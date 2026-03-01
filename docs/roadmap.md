# ePortfolios Mobile — Roadmap

**Last updated:** 01-03-2026

---

## v1.1.0 — Polish & Infrastructure

### Branding Assets

- [ ] Design final app icon (replace placeholder "eP" icons)
- [ ] Generate Android adaptive icons for all densities (mipmap-mdpi through mipmap-xxxhdpi)
- [ ] Generate iOS app icons for AppIcon asset catalog (all required sizes)
- [ ] Replace placeholder SVG logos (`Logo-big.tsx`, `Logo.tsx`) with final brand artwork
- [ ] Create "Powered by ePortfolios" badge/logo for partner use
- [ ] Design splash screen / launch screen assets for Android and iOS
- [ ] Prepare store listing assets (feature graphic, screenshots, promotional images)

### CI/CD Pipeline

- [ ] GitHub Actions workflow for Android build (debug APK)
- [ ] GitHub Actions workflow for iOS build (requires macOS runner or Xcode Cloud)
- [ ] Automated lint + type-check on PRs (`npm run lint && npx tsc`)
- [ ] Automated test run on PRs (`npm test`)
- [ ] Release workflow: build signed APK/AAB, create GitHub release with artifacts

### Dependency Modernization

- [ ] Audit `patches/` directory — verify all patch-package patches still apply and are needed
- [ ] Run `npm audit` and resolve critical/high vulnerabilities
- [ ] Evaluate GlueStack UI migration path (themed-native-base → gluestack-ui v2)

---

## v1.2.0 — Server Compatibility & UX

### Server Compatibility

- [ ] Update SiteCheckScreen to detect both Mahara and ePortfolios servers
- [ ] Add server version detection (show warning if server is too old)
- [ ] Support ePortfolios-specific API extensions as they're developed

### User Experience

- [ ] Dark mode support
- [ ] Offline queue improvements (better retry logic, conflict resolution)
- [ ] Push notifications for upload completion
- [ ] Biometric authentication (fingerprint/face) for app lock

---

## v2.0.0 — Major Features

### Portfolio Features

- [ ] View portfolio pages within the app (WebView or native render)
- [ ] Competency framework integration (view assigned competencies)
- [ ] Quick capture: camera → annotate → upload in one flow
- [ ] Audio/video recording improvements
- [ ] Tablet-optimised layouts

### i18n

- [ ] Complete translation coverage for es, fr, ko, ru locales
- [ ] Add additional languages as needed by institutions
- [ ] RTL layout support

---

## Ongoing — Internal Code Cleanup

Address incrementally as files are modified. Same approach as the web fork.

### TypeScript Type Renames

- [ ] `MaharaFile` → `PortfolioFile` (in `src/models/models.ts`)
- [ ] `PendingMFile` → `PendingPortfolioFile`
- [ ] `emptyMFile` → `emptyPortfolioFile` (in `src/utils/constants.ts`)
- [ ] `isMaharaFile()` → `isPortfolioFile()` (in `src/utils/helperFunctions.ts`)
- [ ] `isPendingMFile()` → `isPendingPortfolioFile()`
- [ ] `maharaFormData` field → `formData`
- [ ] `uploadItemToMahara()` → `uploadItem()`

### React Native Upgrades

- [ ] Evaluate upgrade path beyond 0.77 (New Architecture adoption)
- [ ] Update Gemfile dependencies (CocoaPods, Fastlane if added)

---

## App Store Presence

- [ ] Register "ePortfolios Mobile" on Google Play Store
- [ ] Register "ePortfolios Mobile" on Apple App Store
- [ ] Prepare store listings (descriptions, privacy policy)
- [ ] Set up app signing keys (separate from Mahara Mobile's)
