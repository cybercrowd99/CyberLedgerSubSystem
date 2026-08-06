/**
 * CyberCrowd Ledger Controller
 * 
 * File:
 * src/ledger-controller.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Controller
 *
 * Purpose:
 * Defines the coordination controller used to route approved
 * structural ledger requests into the ledger service layer.
 *
 * Ledger controllers preserve:
 * - request routing
 * - service coordination
 * - structural response handling
 * - non-identity execution flow
 *
 * Ledger controllers do NOT preserve:
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
  LedgerService,
  createLedgerService,
} from "./ledger-service";

export interface LedgerController {
  subsystem: "CyberLedgerSubSystem";
  status: "CONTROLLER_CONNECTED";
  service: LedgerService;
}

/**
 * Creates a structural ledger controller.
 *
 * Routes operations.
 * Does not create authority.
 * Does not create identity.
 * Does not create decisions.
 */
export function createLedgerController(): LedgerController {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "CONTROLLER_CONNECTED",
    service: createLedgerService(),
  };
}
