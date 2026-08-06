/**
 * CyberCrowd Ledger Discovery
 * 
 * File:
 * src/ledger-discovery.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Discovery Layer
 *
 * Purpose:
 * Defines the discovery coordination layer used by CyberLedger
 * to combine structural queries, searches, filters, indexes,
 * and geometry references into continuity-safe discovery flow.
 *
 * Ledger discovery preserves:
 * - structural lookup paths
 * - subsystem discovery scope
 * - continuity references
 * - geometry relationships
 * - index navigation
 *
 * Ledger discovery does NOT preserve:
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
  LedgerQuery,
} from "./ledger-query";

import {
  LedgerSearchResult,
  searchLedger,
} from "./ledger-search";

import {
  LedgerFilterCriteria,
  LedgerFilterResult,
  filterLedgerSearch,
} from "./ledger-filter";

export interface LedgerDiscovery {
  /** Structural subsystem reference */
  subsystem: "CyberLedgerSubSystem";

  /** Discovery layer state */
  status: "DISCOVERY_CONNECTED";
}

export interface LedgerDiscoveryResult {
  /** Discovery reference */
  discoveryId: string;

  /** Discovery timestamp */
  timestamp: number;

  /** Search reference */
  searchId: string;

  /** Filter reference */
  filterId: string;

  /** Structural references */
  references: string[];

  /** Structural geometry */
  geometry: unknown;
}

/**
 * Creates a structural ledger discovery layer.
 *
 * Discovers structure.
 * Does not discover identity.
 * Does not create authority.
 * Does not create judgment.
 */
export function createLedgerDiscovery(): LedgerDiscovery {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "DISCOVERY_CONNECTED",
  };
}

/**
 * Performs structural ledger discovery.
 */
export function discoverLedgerStructure(
  query: LedgerQuery,
  criteria: LedgerFilterCriteria = {}
): LedgerDiscoveryResult {

  const searchResult: LedgerSearchResult =
    searchLedger(query);

  const filterResult: LedgerFilterResult =
    filterLedgerSearch(
      searchResult,
      criteria
    );

  return {
    discoveryId: crypto.randomUUID(),
    timestamp: Date.now(),
    searchId: searchResult.searchId,
    filterId: filterResult.filterId,
    references: filterResult.references,
    geometry: {
      type: "STRUCTURAL_DISCOVERY",
    },
  };
}
