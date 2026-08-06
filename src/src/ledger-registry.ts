/**
 * CyberCrowd Ledger Registry
 * 
 * File:
 * src/ledger-registry.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Registry Layer
 *
 * Purpose:
 * Defines the registry layer used by CyberLedger to track
 * approved structural components and references.
 *
 * Ledger registries preserve:
 * - structural component references
 * - subsystem registrations
 * - continuity-safe discovery
 * - non-identity module relationships
 *
 * Ledger registries do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerRegistry {
  /** Unique structural registry reference */
  registryId: string;

  /** Registry creation timestamp (system time) */
  timestamp: number;

  /** Registered structural components */
  components: string[];
}

/**
 * Creates a structural ledger registry.
 *
 * Creates discovery structure.
 * Does not create authority.
 * Does not create identity.
 * Does not create decisions.
 */
export function createLedgerRegistry(
  components: string[] = []
): LedgerRegistry {
  return {
    registryId: crypto.randomUUID(),
    timestamp: Date.now(),
    components,
  };
}
