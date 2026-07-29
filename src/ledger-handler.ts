/**
 * CyberCrowd Ledger Handler
 *
 * File:
 * src/ledger-handler.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Handler Layer
 *
 * Purpose:
 * Defines the handling layer used by CyberLedger to receive
 * approved structural operations and coordinate execution flow.
 *
 * Ledger handlers preserve:
 * - operation intake
 * - execution coordination
 * - structural result creation
 * - continuity-safe processing
 *
 * Ledger handlers do NOT preserve:
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
  LedgerOperation,
} from "./ledger-operation";

import {
  LedgerExecution,
  createLedgerExecution,
} from "./ledger-execution";

export interface LedgerHandler {
  subsystem: "CyberLedgerSubSystem";
  status: "HANDLER_CONNECTED";
}

/**
 * Creates a structural ledger handler.
 *
 * Processes movement.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerHandler(): LedgerHandler {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "HANDLER_CONNECTED",
  };
}

/**
 * Handles an approved structural ledger operation.
 */
export function handleLedgerOperation(
  operation: LedgerOperation
): LedgerExecution {
  return createLedgerExecution(
    operation.sourceSubsystem,
    operation.operationId,
    operation.contextId,
    {
      operationType: operation.operationType,
    }
  );
}
