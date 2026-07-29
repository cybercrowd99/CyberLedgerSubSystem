/**
 * CyberCrowd Ledger Execution
 *
 * File:
 * src/ledger-execution.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Execution Unit
 *
 * Purpose:
 * Defines the execution handoff unit used by CyberLedger
 * to represent structural movement of approved operations.
 *
 * Ledger executions preserve:
 * - operation linkage
 * - context references
 * - execution state
 * - structural completion metadata
 *
 * Ledger executions do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerExecution {
  /** Structural execution reference */
  executionId: string;

  /** Execution creation timestamp (system time) */
  timestamp: number;

  /** Related operation reference */
  operationId: string;

  /** Related context reference */
  contextId: string;

  /** Source subsystem */
  sourceSubsystem: string;

  /** Structural execution status */
  status: "CREATED" | "COMPLETED" | "FAILED";

  /** Execution metadata */
  metadata: unknown;
}

/**
 * Creates a structural ledger execution.
 *
 * Executes movement.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerExecution(
  sourceSubsystem: string,
  operationId: string,
  contextId: string,
  metadata: unknown = {}
): LedgerExecution {
  return {
    executionId: crypto.randomUUID(),
    timestamp: Date.now(),
    operationId,
    contextId,
    sourceSubsystem,
    status: "CREATED",
    metadata,
  };
}
