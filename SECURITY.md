# Security Policy

## Supported Versions

The following versions of `@HolimaX/beerbank` (Cloud Dashboard Foundation) are actively supported with security and accessibility updates:

| Version | Supported          | Notes |
| ------- | ------------------ | ----- |
| 0.1.26  | :white_check_mark: | Current release (React 18.3, Bootstrap 5.3.8, WCAG 2.2 AA/AAA compliant) |
| < 0.1.26| :x:                | Legacy releases; upgrade to `>= 0.1.26` |

## Architectural Security Safeguards

1. **Public Repository Sanitization**: Zero hardcoded secrets, Okta client IDs, or private cloud endpoints exist in source code. All identity and telemetry configuration is parameterized via environment variables (`REACT_APP_*`).
2. **PCD Tier Entitlement Verification (`verifyPcdAccess`)**: Personalized Cloud Dashboard (`PCD`) Pro/Premium capabilities require verified Okta OIDC authentication with an active `PRO` or `PREMIUM` tier claim provisioned via the Android companion application. Passing `{ tier: "PRO" }` to `myFunction()` without a verified Okta session is blocked and logged.

## Reporting a Vulnerability

If you discover a security vulnerability within `@HolimaX/beerbank`, please report it responsibly by opening a security advisory on the [HolimaX/React GitHub repository](https://github.com/HolimaX/React/security) rather than filing a public issue with exploit details. You can expect an initial acknowledgment within 72 hours.

