/**
 * CyberCrowd Ledger Router
 * 
 * File:
 * src/ledger-router.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Route Layer
 *
 * Purpose:
 * Defines the routing layer used to direct approved
 * structural ledger requests to the correct controller path.
 *
 * Ledger routers preserve:
 * - structural request routing
 * - subsystem path selection
 * - continuity-safe movement
 * - non-identity communication flow
 *
 * Ledger routers do NOT preserve:
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
  LedgerController,
  createLedgerController,
} from "./ledger-controller";

export interface LedgerRouter {
  subsystem: "CyberLedgerSubSystem";
  status: "ROUTER_CONNECTED";
  controller: LedgerController;
}

/**
 * Creates a structural ledger router.
 *
 * Routes movement.
 * Does not create authority.
 * Does not create identity.
 * Does not create decisions.
 */
export function createLedgerRouter(): LedgerRouter {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "ROUTER_CONNECTED",
    controller: createLedgerController(),
  };
}
