/**
 * CyberCrowd Ledger Context
 *
 * File:
 * src/ledger-context.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Context
 *
 * Purpose:
 * Defines the execution context carried through CyberLedger
 * structural operations.
 *
 * Ledger contexts preserve:
 * - operation references
 * - subsystem scope
 * - continuity anchors
 * - structural execution state
 *
 * Ledger contexts do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerContext {
  /** Structural operation reference */
  contextId: string;

  /** Context creation timestamp (system time) */
  timestamp: number;

  /** Subsystem initiating the operation */
  sourceSubsystem: string;

  /** Structural references involved */
  references: string[];

  /** Continuity anchors */
  anchors: string[];

  /** Structural operation metadata */
  metadata: unknown;
}

/**
 * Creates a structural ledger context.
 *
 * Creates execution context.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerContext(
  sourceSubsystem: string,
  references: string[] = [],
  anchors: string[] = [],
  metadata: unknown = {}
): LedgerContext {
  return {
    contextId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    references,
    anchors,
    metadata,
  };
}
