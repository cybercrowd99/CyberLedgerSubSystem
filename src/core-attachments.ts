/**
 * CoreNet Attachment Adapter
 * CyberCrowd Reactor Spine
 *
 * This adapter defines structural attachments between:
 * - CoreNet (substrate field)
 * - CyberLedger (structural memory)
 * - CyberAnalytics (geometry observation)
 *
 * All attachments are inert, non-identity, non-authority, non-surveillance.
 */

export interface Attachment {
  id: string;
  from: "CoreNet" | "CyberLedger" | "CyberAnalytics";
  to: "CoreNet" | "CyberLedger" | "CyberAnalytics";
  geometry: string;
  anchor: string;
  timestamp: number;
}

/**
 * CoreNet → CyberLedger
 * Ledger receives stabilized geometry from CoreNet.
 */
export function coreToLedger(): Attachment {
  return {
    id: crypto.randomUUID(),
    from: "CoreNet",
    to: "CyberLedger",
    geometry: "field-stabilized-geometry",
    anchor: "core-field-anchor",
    timestamp: Date.now()
  };
}

/**
 * CoreNet → CyberAnalytics
 * Analytics receives stabilized geometry from CoreNet.
 */
export function coreToAnalytics(): Attachment {
  return {
    id: crypto.randomUUID(),
    from: "CoreNet",
    to: "CyberAnalytics",
    geometry: "field-stabilized-geometry",
    anchor: "core-field-anchor",
    timestamp: Date.now()
  };
}

/**
 * CyberLedger → CyberAnalytics
 * Ledger provides recorded structure; Analytics observes structure.
 */
export function ledgerToAnalytics(): Attachment {
  return {
    id: crypto.randomUUID(),
    from: "CyberLedger",
    to: "CyberAnalytics",
    geometry: "recorded-structure",
    anchor: "ledger-structure-anchor",
    timestamp: Date.now()
  };
}
