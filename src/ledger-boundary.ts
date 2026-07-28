/**
 * CyberCrowd Ledger Boundary
 *
 * File:
 * src/ledger-boundary.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Memory Boundary
 *
 * Purpose:
 * Defines the ownership boundary for the CyberLedgerSubSystem.
 *
 * The ledger remembers structure.
 * It does not interpret humans.
 * It does not create authority.
 * It does not define value.
 *
 * Owns:
 * - structural memory references
 * - continuity records
 * - evidence geometry snapshots
 * - execution event receipts
 * - non-identity history
 *
 * Does NOT own:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance mechanisms
 * - predictive models
 * - value assignment
 */

export interface LedgerBoundary {
  subsystem: "CyberLedgerSubSystem";
  status: "BOUNDARY_DEFINED";
}

export const LEDGER_BOUNDARY: LedgerBoundary = {
  subsystem: "CyberLedgerSubSystem",
  status: "BOUNDARY_DEFINED",
};
