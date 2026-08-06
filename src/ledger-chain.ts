/**
 * CyberCrowd Ledger Chain
 * 
 * File:
 * src/ledger-chain.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Continuity Chain
 *
 * Purpose:
 * Defines the structural chain used by CyberLedger to connect
 * records, evidence, events, and continuity references.
 *
 * Ledger chains preserve:
 * - structural sequence
 * - reference relationships
 * - continuity movement
 * - non-identity history
 *
 * Ledger chains do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerChain {
  /** Unique structural chain reference */
  chainId: string;

  /** Timestamp of chain creation (system time) */
  timestamp: number;

  /** Subsystem that created the chain */
  sourceSubsystem: string;

  /** Ordered structural references */
  references: string[];

  /** Chain geometry */
  geometry: unknown;
}

/**
 * Creates a structural ledger chain.
 *
 * Creates continuity.
 * Does not create identity.
 * Does not create authority.
 * Does not create value decisions.
 */
export function createLedgerChain(
  sourceSubsystem: string,
  references: string[],
  geometry: unknown
): LedgerChain {
  return {
    chainId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    references,
    geometry,
  };
}
