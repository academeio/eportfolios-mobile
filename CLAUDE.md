# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ePortfolios Mobile is a React Native 0.77 / TypeScript mobile app for uploading portfolio evidence (files, photos, audio, journal entries) to an ePortfolios or Mahara server. Version 1.0.0, forked from Mahara Mobile 25.0.5 (GPL v3).

**Stack:** React Native 0.77.3, TypeScript 5.0, Redux + RTK, GlueStack UI (NativeBase), React Navigation 7, LinguiJS i18n.

**Bundle IDs:** `in.eportfolios.mobile` (Android and iOS).

## Build & Run

```bash
# Install dependencies (runs patch-package via postinstall)
npm install

# Start Metro bundler
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Android release APK
npm run release

# Android release AAB
npm run bundlerelease
```

## Lint, Format & Type-Check

```bash
# ESLint
npm run lint
npm run lint:fix

# Prettier
npm run prettier
npm run prettier:fix

# TypeScript (no emit, type-check only)
npx tsc --noEmit
```

## Testing

```bash
npm test
```

Jest config lives in `.test/jest.config.js`.

## i18n Workflow

Uses LinguiJS with catalogs in `locales/`. Supported locales: en, es, fr, ko, ru.

```bash
# Extract new strings from source
npm run extract

# Compile .po files to .js catalogs
npm run compile

# Add a new locale
npm run add-locale <locale-code>
```

Source strings use `<Trans>` components and `t` macro from `@lingui/macro`. Compiled catalogs are in `locales/<locale>/messages.js`.

## Architecture

### Directory Layout

| Directory | Purpose |
|-----------|---------|
| `src/screens/` | Screen components (one folder per screen) |
| `src/components/` | Reusable UI components |
| `src/store/` | Redux store, actions (`store/actions/`), reducers (`store/reducers/`) |
| `src/models/` | TypeScript types (`models.ts`) and factory functions (`typeCreators.ts`) |
| `src/utils/` | Helper functions, theme, constants |
| `src/navigation/` | React Navigation configuration |
| `src/hooks/` | Custom React hooks |
| `src/constants/` | App-wide constants |
| `src/i18n.ts` | LinguiJS initialization |
| `src/assets/` | Images and static assets |
| `locales/` | i18n message catalogs (.po and compiled .js) |
| `android/` | Android native project |
| `ios/` | iOS native project (Xcode workspace) |
| `patches/` | patch-package patches for node_modules |

### State Management

Redux with Redux Toolkit. Store defined in `src/store/store.ts`. Reducers in `src/store/reducers/`, async actions in `src/store/actions/`.

### Navigation

React Navigation 7 with bottom tabs and stack navigators. Configuration in `src/navigation/`.

### Theming

GlueStack UI (NativeBase) with custom theme in `src/utils/theme.tsx`. Colors, fonts (OpenSans), and component overrides defined there.

### API Communication

The app connects to user-specified server URLs. No hardcoded API endpoints. Login via username/password or SSO (WebView). File uploads use multipart form data via `react-native-blob-util`.

## Key Conventions

### Deferred Type Renames

The following identifiers retain upstream `Mahara` naming and must NOT be renamed yet (tracked in `docs/planned-features-mobile.md` in the parent eportfolios repo):

- `MaharaFile`, `maharaFormData`, `uploadItemToMahara`
- `emptyMFile`, `PendingMFile`, `isPendingMFile`, `isMaharaFile`, `newMaharaFile`

### API Protocol Identifiers

These values must match server-side expectations and must NOT be changed:

- `maharamobile` -- web service name sent during authentication
- `maharaversion` -- API field returned by server version check
- `maharatoken` -- JavaScript variable name used in SSO WebView token exchange

### Internal Theme Variables

These are internal code identifiers, not user-facing, and are kept as-is:

- `maharaTheme`, `maharaThemeBase` -- GlueStack theme objects in `src/utils/theme.tsx`

### Upstream Attribution

Individual source files retain their original copyright headers (GPL v3 requirement). Do not remove Catalyst IT / Mahara Project attribution from file headers.

### Entry Point

`index.js` at root reads `codegenConfig.name` from `package.json` dynamically to register the app component.
