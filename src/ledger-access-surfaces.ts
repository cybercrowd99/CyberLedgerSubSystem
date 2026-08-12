/**
 * LEDGER — CyberCrowd
 *
 * Access Surface Registry
 *
 * ONE JOB:
 * Declare the structural access surfaces exposed by the Ledger.
 *
 * Ownership boundary:
 *
 *   LEDGER
 *    │
 *    ├── LEDGER-RECORD
 *    ├── LEDGER-EVIDENCE
 *    ├── LEDGER-CONTINUITY
 *    └── LEDGER-IDENTITY
 *
 * This module does not:
 * - execute service behavior
 * - infer capability
 * - infer intent
 * - authorize actions
 * - transform records
 * - enrich evidence
 * - create identity relationships
 * - transfer ownership
 *
 * It only declares the Ledger access-surface structure.
 *
 * LEDGER → CASES → CORE → NET
 */

export default {
  ledger: {
    record: "LEDGER-RECORD",
    evidence: "LEDGER-EVIDENCE",
    continuity: "LEDGER-CONTINUITY",
    identity: "LEDGER-IDENTITY",
  },
};
