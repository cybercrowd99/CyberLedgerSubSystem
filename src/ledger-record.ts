/**
 * CyberCrowd Ledger Record
 * 
 * File:
 * src/ledger-record.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Memory Record
 *
 * Purpose:
 * Defines the structural record type stored by CyberLedger.
 *
 * Ledger records preserve:
 * - structural continuity
 * - execution event receipts
 * - system movement geometry
 * - non-identity history
 *
 * Ledger records do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerRecord {
  recordId: string;
  timestamp: number;
  sourceSubsystem: string;
  geometry: unknown;
  receipt: unknown;
}

/**
 * Creates a structural ledger record.
 *
 * Creates memory.
 * Does not create authority.
 * Does not create identity.
 * Does not create value decisions.
 */
export function createLedgerRecord(
  sourceSubsystem: string,
  geometry: unknown,
  receipt: unknown
): LedgerRecord {
  return {
    recordId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    receipt,
  };
}
