/**
 * CyberCrowd Ledger Snapshot
 * 
 * File:
 * src/ledger-snapshot.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Snapshot Unit
 *
 * Purpose:
 * Defines the structural snapshot stored by CyberLedger.
 *
 * Ledger snapshots preserve:
 * - structural state
 * - continuity geometry
 * - subsystem memory
 * - non-identity history
 *
 * Ledger snapshots do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerSnapshot {
  /** Unique structural snapshot reference */
  snapshotId: string;

  /** Snapshot creation timestamp (system time) */
  timestamp: number;

  /** Source subsystem */
  sourceSubsystem: string;

  /** Structural snapshot geometry */
  geometry: unknown;

  /** Structural continuity references */
  anchors: string[];
}

/**
 * Creates a structural ledger snapshot.
 *
 * Creates memory.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerSnapshot(
  sourceSubsystem: string,
  geometry: unknown,
  anchors: string[] = []
): LedgerSnapshot {
  return {
    snapshotId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    anchors,
  };
}
