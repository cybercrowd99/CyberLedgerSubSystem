/**
 * CyberCrowd Ledger Link
 *
 * File:
 * src/ledger-link.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Reference Link
 *
 * Purpose:
 * Defines the structural link used by CyberLedger to connect
 * records, events, evidence, and continuity references.
 *
 * Ledger links preserve:
 * - structural relationships
 * - reference connections
 * - continuity paths
 * - non-identity memory structure
 *
 * Ledger links do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerLink {
  /** Unique structural link reference */
  linkId: string;

  /** Timestamp of link creation (system time) */
  timestamp: number;

  /** Subsystem creating the link */
  sourceSubsystem: string;

  /** Origin structural reference */
  fromReference: string;

  /** Destination structural reference */
  toReference: string;

  /** Relationship geometry */
  geometry: unknown;
}

/**
 * Creates a structural ledger link.
 *
 * Creates connection.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerLink(
  sourceSubsystem: string,
  fromReference: string,
  toReference: string,
  geometry: unknown
): LedgerLink {
  return {
    linkId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    fromReference,
    toReference,
    geometry,
  };
}
