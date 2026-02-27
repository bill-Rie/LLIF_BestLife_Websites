---
title: "LLIF Developer API v1.0 Now Available"
slug: "api-v1-release"
date: "2025-11-04"
categories: ["Releases"]
excerpt: "The LLIF Developer API v1.0 is now available to approved program organizers and research institutions, enabling secure, consent-gated access to longitudinal participant data."
featured: false
---

The LLIF Developer API v1.0 is now available for approved program organizers and research institutions.

## What's in v1.0

The initial release includes:

- **Participant enrollment endpoints** — create and manage program enrollments with full consent tracking
- **Longitudinal data reads** — query participant data across time with structured, typed responses
- **Consent audit trail** — every data access is logged against the participant's explicit consent record
- **Webhook support** — receive events when participants update permissions or export their data
- **OpenAPI specification** — full machine-readable schema for tooling and client generation

## Access Model

The API is not publicly open. Access requires:

1. Approval as a program organizer or research institution
2. Execution of the LLIF Data Partner Agreement
3. IRB or equivalent review for research applications

This is intentional. LLIF infrastructure carries legal obligations to participants, and we hold partners to the same standard.

## What's Coming in v1.1

Planned additions include batch export endpoints, aggregate query support, and expanded webhook event types. See the developer documentation for the current roadmap.

Questions or access requests: [contact the developer team](/contact).
