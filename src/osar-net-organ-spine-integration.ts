/**
 * OSAR → NET Organ Spine Integration
 *
 * Connects the OSAR → NET organ hook-up into the declared
 * organ attachment spine.
 *
 * This integration is structural only.
 * It does not interpret doctrine, create authority, create identity,
 * execute governance, or perform organ behavior.
 */

import { hookOSARNetOrgan } from "./osar-net-organ-hookup";
import type { OSAROperationalStateOrganParticipation } from "./osar-operational-state-organ-participation";

export function integrateOSARNetOrganSpine(
  participation: OSAROperationalStateOrganParticipation,
) {
  const { attachment, acceptance, handoff } = hookOSARNetOrgan(participation);

  return {
    attachment,
    acceptance,
    handoff,
  };
}
