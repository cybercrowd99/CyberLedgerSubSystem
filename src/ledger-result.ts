/**
 * CyberCrowd Ledger Result
 * 
 * File:
 * src/ledger-result.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Result Unit
 *
 * Purpose:
 * Defines the structural result unit used by CyberLedger
 * to represent the outcome of completed execution flow.
 *
 * Ledger results preserve:
 * - execution references
 * - completion state
 * - structural output metadata
 * - continuity-safe result records
 *
 * Ledger results do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerResult {
  /** Structural result reference */
  resultId: string;

  /** Result creation timestamp (system time) */
  timestamp: number;

  /** Related execution reference */
  executionId: string;

  /** Related operation reference */
  operationId: string;

  /** Source subsystem */
  sourceSubsystem: string;

  /** Structural completion state */
  status: "SUCCESS" | "FAILED";

  /** Structural result metadata */
  output: unknown;
}

/**
 * Creates a structural ledger result.
 *
 * Records outcome.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerResult(
  sourceSubsystem: string,
  executionId: string,
  operationId: string,
  status: "SUCCESS" | "FAILED",
  output: unknown = {}
): LedgerResult {
  return {
    resultId: crypto.randomUUID(),
    timestamp: Date.now(),
    executionId,
    operationId,
    sourceSubsystem,
    status,
    output,
  };
}
