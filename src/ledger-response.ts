/**
 * CyberCrowd Ledger Response
 *
 * File:
 * src/ledger-response.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Response Unit
 *
 * Purpose:
 * Defines the structural response unit used by CyberLedger
 * to return approved execution results without exposing
 * internal ledger structures.
 *
 * Ledger responses preserve:
 * - result references
 * - response status
 * - structural output metadata
 * - continuity-safe communication
 *
 * Ledger responses do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerResponse {
  /** Structural response reference */
  responseId: string;

  /** Response creation timestamp (system time) */
  timestamp: number;

  /** Related ledger result reference */
  resultId: string;

  /** Source subsystem */
  sourceSubsystem: string;

  /** Structural response status */
  status: "DELIVERED" | "FAILED";

  /** Structural response payload */
  payload: unknown;
}

/**
 * Creates a structural ledger response.
 *
 * Communicates outcome.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerResponse(
  sourceSubsystem: string,
  resultId: string,
  status: "DELIVERED" | "FAILED",
  payload: unknown = {}
): LedgerResponse {
  return {
    responseId: crypto.randomUUID(),
    timestamp: Date.now(),
    resultId,
    sourceSubsystem,
    status,
    payload,
  };
}
