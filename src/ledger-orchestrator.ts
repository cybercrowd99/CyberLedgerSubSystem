/**
 * CyberCrowd Ledger Orchestrator
 * 
 * File:
 * src/ledger-orchestrator.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Ledger Orchestration Layer
 *
 * Purpose:
 * Defines the orchestration layer used by CyberLedger
 * to coordinate structural lifecycle movement across
 * approved ledger processing stages.
 *
 * Ledger orchestrators preserve:
 * - pipeline coordination
 * - subsystem execution flow
 * - continuity-safe lifecycle movement
 * - structural process ordering
 *
 * Ledger orchestrators do NOT preserve:
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
  LedgerPipeline,
  createLedgerPipeline,
  processLedgerOperation,
} from "./ledger-pipeline";

import {
  LedgerResponse,
} from "./ledger-response";

export interface LedgerOrchestrator {
  /** Structural subsystem identity */
  subsystem: "CyberLedgerSubSystem";

  /** Orchestration state */
  status: "ORCHESTRATOR_CONNECTED";

  /** Connected pipeline */
  pipeline: LedgerPipeline;
}

/**
 * Creates a structural ledger orchestrator.
 *
 * Coordinates movement.
 * Does not create identity.
 * Does not create authority.
 * Does not create decisions.
 */
export function createLedgerOrchestrator(): LedgerOrchestrator {
  return {
    subsystem: "CyberLedgerSubSystem",
    status: "ORCHESTRATOR_CONNECTED",
    pipeline: createLedgerPipeline(),
  };
}

/**
 * Coordinates a structural ledger operation.
 */
export function orchestrateLedgerOperation(
  operation: LedgerOperation
): LedgerResponse {
  return processLedgerOperation(operation);
}
