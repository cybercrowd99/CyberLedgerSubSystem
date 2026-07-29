/**
 * CyberCrowd Ledger Gateway
 *
 * File:
 * src/ledger-gateway.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Gateway Boundary
 *
 * Purpose:
 * Defines the controlled entry boundary used to connect
 * approved structural requests into the CyberLedger routing layer.
 *
 * Ledger gateways preserve:
 * - controlled request entry
 * - structural communication flow
 * - boundary enforcement
 * - non-identity interaction paths
 *
 * Ledger gateways do NOT preserve:
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
  LedgerRouter,
  createLedgerRouter,
} from "./ledger-router";

export interface LedgerGateway {
  subsystem: "CyberLedgerSubSystem";
  status: "GATEWAY_CONNECTED";
  router: LedgerRouter;
}

/**
 * Creates a structural ledger gateway.
 *
 * Creates an entry point.
 * Does not create authority.
 * Does not create identity.
 * Does not create decisions.
 */
export function createLedgerGateway(): LedgerGateway {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "GATEWAY_CONNECTED",
    router: createLedgerRouter(),
  };
}
