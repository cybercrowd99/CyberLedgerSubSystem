/**
 * CyberCrowd Evidence Record
 * 
 * File:
 * src/evidence-record.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Evidence Unit
 *
 * Purpose:
 * Defines the structural evidence type stored by CyberLedger.
 *
 * Evidence records preserve:
 * - structural proof
 * - subsystem event evidence
 * - geometry of system movement
 * - non-identity verification
 *
 * Evidence records do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface EvidenceRecord {
  evidenceId: string;
  timestamp: number;
  sourceSubsystem: string;
  geometry: unknown;
  proof: unknown;
}

/**
 * Creates a structural evidence record.
 *
 * Creates proof.
 * Does not create authority.
 * Does not create identity.
 * Does not create value decisions.
 */
export function createEvidenceRecord(
  sourceSubsystem: string,
  geometry: unknown,
  proof: unknown
): EvidenceRecord {
  return {
    evidenceId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    proof,
  };
}
