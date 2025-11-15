AMCP: Asynchronous Model Context Protocol Specification v0.1
This document outlines the specification for the Asynchronous Model Context Protocol (AMCP), a system designed to enable massively parallel, asynchronous collaboration between AI agents.
1. Overview
AMCP is a protocol for multi-agent systems that facilitates large-scale, dynamic collaboration without the need for direct, sequential communication. It replaces traditional turn-based interaction with a shared, semantically searchable context, allowing agents to operate in parallel and form emergent coalitions. This design overcomes the scalability limitations of existing multi-agent frameworks.
Core Principles:
Asynchronous Communication: Agents publish messages to a shared context independently and at any time. There is no concept of waiting for a turn.
Shared Vector Memory: A central vector database (e.g., Qdrant) acts as the communication backbone, storing all messages and enabling semantic retrieval.
Semantic Information Retrieval: Agents query the shared memory using semantic search to discover relevant context, critiques, or potential collaborators.
Dynamic Coalition Formation: Agents can self-organize into groups based on shared interests or complementary ideas discovered through the shared memory.
Emergent Consensus: Agreement is reached organically through deliberation and refinement within the shared context, rather than through a formal voting or sequential approval process.
2. Channels
In the AMCP paradigm, there is one primary channel for broadcasting information.
This is the central, shared channel where all agents publish their contributions.
Publish: An agent can publish a message to this channel at any time. This action is atomic and non-blocking.
3. Messages
Messages are the core data objects in AMCP. They are designed to be self-contained and semantically rich.
Payload Schema:
agent_id: string (Identifier for the publishing agent)
agent_role: string (e.g., 'MaterialsScientist', 'PatentAttorney')
session_id: string (Identifier for the current invention session)
phase: string (Enum: 'Ideation', 'Deliberation', 'Synthesis')
content: string (The core text of the idea or critique)
content_vector: array[float] (Vector embedding of the content)
parent_ids: array[string] (Optional: IDs of messages this message is responding to)
timestamp: integer (Unix timestamp)
Payload Schema:
agent_id: string (Always 'PatentAttorney')
session_id: string (Identifier for the current invention session)
phase: string (Value: 'PatentGeneration')
claim_text: string (The formal text of a patent claim)
supporting_message_ids: array[string] (IDs of messages from deliberation that support this claim)
novelty_analysis: string (Brief explanation of why this claim is novel, citing prior art search)
timestamp: integer (Unix timestamp)
4. AsyncAPI Specification (Illustrative)
code
Yaml
asyncapi: 3.0.0
info:
  title: Asynchronous Model Context Protocol (AMCP)
  version: 0.1.0
  description: |
    A protocol for massively parallel AI agent collaboration.
    All agents broadcast to a shared vector memory and retrieve context via semantic search.

servers:
  qdrant:
    host: localhost:6333
    protocol: http
    description: Qdrant vector database endpoint

channels:
  broadcast:
    address: 'collections/invention_parliament'
    description: The shared context where all agents publish their ideas and critiques.
    messages:
      idea.proposal:
        $ref: '#/components/messages/IdeaProposal'
      patent.claim:
        $ref: '#/components/messages/PatentClaim'
    bindings:
      http:
        type: request
        method: POST
        query:
          type: object
          properties:
            wait:
              type: boolean
              default: true

operations:
  broadcastMessage:
    action: send
    channel:
      $ref: '#/channels/broadcast'
    messages:
      - $ref: '#/components/messages/IdeaProposal'
      - $ref: '#/components/messages/PatentClaim'

components:
  messages:
    IdeaProposal:
      summary: An idea or critique published by an agent.
      payload:
        type: object
        properties:
          agent_id:
            type: string
            description: Identifier for the publishing agent.
          agent_role:
            type: string
            description: The role of the agent (e.g., 'MaterialsScientist').
          session_id:
            type: string
            description: Identifier for the current invention session.
          phase:
            type: string
            enum: ['Ideation', 'Deliberation', 'Synthesis']
          content:
            type: string
            description: The core text of the idea or critique.
          content_vector:
            type: array
            items:
              type: number
              format: float
            description: Vector embedding of the content.
          parent_ids:
            type: array
            items:
              type: string
            description: Optional IDs of messages this message is responding to.
          timestamp:
            type: integer
            format: int64
            description: Unix timestamp.

    PatentClaim:
      summary: A formal patent claim generated by the PatentAttorney agent.
      payload:
        type: object
        properties:
          agent_id:
            type: string
            description: Must be 'PatentAttorney'.
          session_id:
            type: string
          phase:
            type: string
            const: 'PatentGeneration'
          claim_text:
            type: string
          supporting_message_ids:
            type: array
            items:
              type: string
          novelty_analysis:
            type: string
          timestamp:
            type: integer
            format: int64
