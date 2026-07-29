/**
 * CyberCrowd Ledger Query
 *
 * File:
 * src/ledger-query.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Query Unit
 *
 * Purpose:
 * Defines the structural query format used by CyberLedger to
 * retrieve records, events, evidence, continuity references,
 * chains, and links without identity or authority semantics.
 *
 * Ledger queries preserve:
 * - structural filters
 * - continuity constraints
 * - subsystem scoping
 * - non-identity retrieval logic
 *
 * Ledger queries do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerQuery {
  /** Subsystem scope for the query */
  subsystem?: string;

  /** Structural reference filters */
  references?: string[];

  /** Continuity constraints */
  continuity?: {
    anchors?: string[];
    requireTopology?: boolean;
  };

  /** Geometry filters */
  geometry?: {
    type?: string;
  };

  /** Limit results (structural only) */
  limit?: number;
}

/**
 * Creates a structural ledger query.
 *
 * Creates retrieval structure.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerQuery(query: LedgerQuery): LedgerQuery {
  return {
    ...query,
  };
}
