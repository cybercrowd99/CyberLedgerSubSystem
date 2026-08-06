/**
 * CyberCrowd Ledger Manager
 * 
 * File:
 * src/ledger-manager.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Manager
 *
 * Purpose:
 * Defines the coordination manager used by CyberLedger
 * to connect approved ledger components.
 *
 * Ledger managers preserve:
 * - component coordination
 * - structural lifecycle flow
 * - continuity-safe orchestration
 * - non-identity subsystem management
 *
 * Ledger managers do NOT preserve:
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
  LedgerGateway,
  createLedgerGateway,
} from "./ledger-gateway";

import {
  LedgerRegistry,
  createLedgerRegistry,
} from "./ledger-registry";

export interface LedgerManager {
  subsystem: "CyberLedgerSubSystem";
  status: "MANAGER_CONNECTED";
  gateway: LedgerGateway;
  registry: LedgerRegistry;
}

/**
 * Creates a structural ledger manager.
 *
 * Coordinates structure.
 * Does not create authority.
 * Does not create identity.
 * Does not create decisions.
 */
export function createLedgerManager(
  components: string[] = []
): LedgerManager {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "MANAGER_CONNECTED",
    gateway: createLedgerGateway(),
    registry: createLedgerRegistry(components),
  };
}
