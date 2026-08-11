/**
 * OSAR — CyberCrowd Organ Attachment Surface
 *
 * ONE JOB:
 * Attach the completed OSAR → NET organ spine integration to the
 * CyberCrowd-facing organ surface without interpreting, mutating,
 * or expanding the established artifact.
 *
 * This surface does not:
 * - interpret doctrine
 * - mutate OSAR state
 * - mutate NET state
 * - create authority
 * - create identity
 * - execute governance
 * - execute organ behavior
 * - contact external services
 */

import type { OSAROperationalStateOrganParticipation } from "./osar-operational-state-organ-participation";
import { integrateOSARNetOrganSpine } from "./osar-net-organ-spine-integration";

export interface OSARCyberCrowdOrganAttachment {
  readonly attached: true;
  readonly attachedAt: string;
  readonly spine: ReturnType<typeof integrateOSARNetOrganSpine>;
}

export const attachOSARToCyberCrowdOrgan = (
  participation: OSAROperationalStateOrganParticipation,
): OSARCyberCrowdOrganAttachment =>
  Object.freeze({
    attached: true as const,
    attachedAt: new Date().toISOString(),
    spine: integrateOSARNetOrganSpine(participation),
  });
