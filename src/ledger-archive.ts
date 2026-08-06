/**
 * CyberCrowd Ledger Archive
 * 
 * File:
 * src/ledger-archive.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Archive Unit
 *
 * Purpose:
 * Defines the structural archive used by CyberLedger for
 * long-term preservation of structural memory.
 *
 * Ledger archives preserve:
 * - structural history
 * - continuity preservation
 * - subsystem memory
 * - non-identity archival records
 *
 * Ledger archives do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerArchive {
  /** Unique structural archive reference */
  archiveId: string;

  /** Archive creation timestamp (system time) */
  timestamp: number;

  /** Source subsystem */
  sourceSubsystem: string;

  /** Archived structural geometry */
  geometry: unknown;

  /** Structural continuity references */
  anchors: string[];
}

/**
 * Creates a structural ledger archive.
 *
 * Creates preservation.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerArchive(
  sourceSubsystem: string,
  geometry: unknown,
  anchors: string[] = []
): LedgerArchive {
  return {
    archiveId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    anchors,
  };
}
