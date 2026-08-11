/**
 * OSAR → NET Organ Hook-Up
 *
 * Connects the accepted OSAR → NET organ handoff to the NET
 * organ attachment surface.
 *
 * This hook-up is structural only.
 * It does not interpret doctrine, create authority, create identity,
 * execute governance, or perform organ behavior.
 */

import { handoffOSARToNetOrgan } from "./osar-net-organ-handoff";
import { acceptOSARNetOrganAttachment } from "./osar-net-organ-attachment-acceptance";
import { attachOSARToNetOrgan } from "./osar-net-organ-attachment";
import type { OSAROperationalStateOrganParticipation } from "./osar-operational-state-organ-participation";

export function hookOSARNetOrgan(
  participation: OSAROperationalStateOrganParticipation,
) {
  const attachment = attachOSARToNetOrgan(participation);
  const acceptance = acceptOSARNetOrganAttachment(attachment);
  const handoff = handoffOSARToNetOrgan(acceptance);

  return {
    attachment,
    acceptance,
    handoff,
  };
}
