/**
 * CyberCrowd Ledger Event
 * 
 * File:
 * src/ledger-event.ts
 *
 * Subsystem:
 * CyberLedgerSubSystem
 *
 * Effigy:
 * Structural Event Unit
 *
 * Purpose:
 * Defines the structural event type recorded by CyberLedger.
 *
 * Ledger events preserve:
 * - structural movement
 * - subsystem event references
 * - continuity relationships
 * - non-identity event history
 *
 * Ledger events do NOT preserve:
 * - identity payloads
 * - identity correlation
 * - behavioral history
 * - operator profiles
 * - authority decisions
 * - surveillance data
 * - predictive models
 * - value assignment
 */

export interface LedgerEvent {
  /** Unique structural event reference (never identity) */
  eventId: string;

  /** Timestamp of event creation (system time) */
  timestamp: number;

  /** Subsystem responsible for the event */
  sourceSubsystem: string;

  /** Structural event geometry (never identity) */
  geometry: unknown;

  /** Continuity references connected to the event */
  anchors: string[];
}

/**
 * Creates a structural ledger event.
 *
 * Creates a memory event.
 * Does not create authority.
 * Does not create identity.
 * Does not create value decisions.
 */
export function createLedgerEvent(
  sourceSubsystem: string,
  geometry: unknown,
  anchors: string[] = []
): LedgerEvent {
  return {
    eventId: crypto.randomUUID(),
    timestamp: Date.now(),
    sourceSubsystem,
    geometry,
    anchors,
  };
}
