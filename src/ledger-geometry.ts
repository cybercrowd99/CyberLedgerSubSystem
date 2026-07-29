/**
 * CyberCrowd Ledger Geometry
 *
 * File:
 * src/ledger-geometry.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Geometry Unit
 *
 * Purpose:
 * Defines the structural geometry shared by CyberLedger records.
 *
 * Ledger geometry preserves:
 * - structural relationships
 * - continuity topology
 * - non-identity movement
 * - subsystem structure
 *
 * Ledger geometry does NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerGeometry {
  /** Structural geometry type */
  type: string;

  /** Structural geometry payload */
  data: unknown;
}

/**
 * Creates structural ledger geometry.
 *
 * Creates structure.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerGeometry(
  type: string,
  data: unknown
): LedgerGeometry {
  return {
    type,
    data,
  };
}
