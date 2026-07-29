/**
 * CyberCrowd Ledger Discovery Index
 *
 * File:
 * src/ledger-discovery-index.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Discovery Index Binding Layer
 *
 * Purpose:
 * Defines the structural binding layer used by CyberLedger
 * to connect discovery results with indexed references.
 *
 * Ledger discovery indexes preserve:
 * - discovery references
 * - ledger index paths
 * - continuity lookup bindings
 * - structural navigation metadata
 *
 * Ledger discovery indexes do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

import {
  LedgerDiscoveryResult,
} from "./ledger-discovery";

import {
  LedgerIndex,
  createLedgerIndex,
} from "./ledger-index";

export interface LedgerDiscoveryIndex {
  /** Structural discovery index reference */
  discoveryIndexId: string;

  /** Creation timestamp */
  timestamp: number;

  /** Related discovery reference */
  discoveryId: string;

  /** Bound ledger index */
  index: LedgerIndex;

  /** Structural navigation geometry */
  geometry: unknown;
}

/**
 * Creates a structural discovery index binding.
 *
 * Binds structure.
 * Does not bind identity.
 * Does not create authority.
 * Does not create judgment.
 */
export function createLedgerDiscoveryIndex(
  discovery: LedgerDiscoveryResult
): LedgerDiscoveryIndex {
  const index = createLedgerIndex(
    "CyberLedgerSubSystem",
    discovery.references,
    discovery.geometry
  );

  return {
    discoveryIndexId: crypto.randomUUID(),
    timestamp: Date.now(),
    discoveryId: discovery.discoveryId,
    index,
    geometry: {
      type: "STRUCTURAL_DISCOVERY_INDEX",
    },
  };
}
