/**
 * CyberCrowd Ledger Index
 *
 * File:
 * src/ledger-index.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Memory Index
 *
 * Purpose:
 * Defines the structural index layer used by CyberLedger
 * to locate continuity references without identity correlation.
 *
 * Ledger indexes preserve:
 * - record references
 * - evidence references
 * - event references
 * - continuity lookup paths
 * - structural relationships
 * - navigation anchors
 *
 * Ledger indexes do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerIndex {
  /** Structural index reference */
  indexId: string;

  /** Timestamp of index creation */
  timestamp: number;

  /** Subsystem that created the index */
  sourceSubsystem: string;

  /** Linked structural references */
  references: string[];

  /** Structural lookup geometry */
  geometry: unknown;
}

/**
 * Creates a structural ledger index.
 *
 * Creates lookup structure.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerIndex(
  sourceSubsystem: string,
  references: string[],
  geometry: unknown
): LedgerIndex {
  return {
    indexId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    references,
    geometry,
  };
}
