/**
 * CyberCrowd Ledger Operation
 * 
 * File:
 * src/ledger-operation.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Operation Unit
 *
 * Purpose:
 * Defines the structural operation unit used by CyberLedger
 * to represent approved system movement.
 *
 * Ledger operations preserve:
 * - operation references
 * - context linkage
 * - subsystem movement
 * - structural execution metadata
 *
 * Ledger operations do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerOperation {
  /** Structural operation reference */
  operationId: string;

  /** Operation creation timestamp (system time) */
  timestamp: number;

  /** Subsystem performing the operation */
  sourceSubsystem: string;

  /** Related ledger context reference */
  contextId: string;

  /** Structural operation type */
  operationType: string;

  /** Structural operation payload */
  payload: unknown;
}

/**
 * Creates a structural ledger operation.
 *
 * Creates movement.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerOperation(
  sourceSubsystem: string,
  contextId: string,
  operationType: string,
  payload: unknown = {}
): LedgerOperation {
  return {
    operationId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    contextId,
    operationType,
    payload,
  };
}
