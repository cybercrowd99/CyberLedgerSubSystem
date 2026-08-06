/**
 * CyberCrowd Historical State Preservation Layer
 * 
 * File:
 * src/state-preservation.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Historical State Substrate
 *
 * Purpose:
 * Preserves structural system state across time without identity,
 * behavior, authority, or surveillance vectors.
 *
 * State preservation maintains:
 * - structural snapshots
 * - continuity geometry
 * - subsystem state transitions
 * - non-identity historical memory
 *
 * State preservation does NOT maintain:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface StateSnapshot {
  /** Unique structural snapshot ID (never identity) */
  snapshotId: string;

  /** Timestamp of snapshot creation (system time) */
  timestamp: number;

  /** Subsystem that produced the snapshot */
  sourceSubsystem: string;

  /** Structural state geometry (never identity) */
  geometry: unknown;

  /** Optional continuity anchors (record IDs, evidence IDs, continuity IDs) */
  anchors: string[];
}

/**
 * Creates a historical state snapshot.
 *
 * Creates memory.
 * Does not create authority.
 * Does not create identity.
 * Does not create value decisions.
 */
export function createStateSnapshot(
  sourceSubsystem: string,
  geometry: unknown,
  anchors: string[] = []
): StateSnapshot {
  return {
    snapshotId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    anchors,
  };
}
