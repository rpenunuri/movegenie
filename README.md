# MoveGenie

A smart agent that helps you move.

## Prerequisites

- Node.js 18 or newer. On macOS, ensure Node is linked against the current ICU libraries; if `npm install` fails with `libicui18n` errors, reinstall Node with `brew reinstall node` or use a version manager like nvm (`nvm install 20`).
- npm (comes with Node).
- Expo Go app on your mobile device or an Android/iOS simulator.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   This opens the Expo developer tools. Scan the QR code with Expo Go or run one of:
   ```bash
   npm run android
   npm run ios
   ```

## Troubleshooting

If `npm install` fails with an ICU library error on macOS:
```bash
brew reinstall node
# or
brew reinstall icu4c && brew link icu4c --force
```

## Available Scripts

- `npm start` – start Expo bundler.
- `npm run android` – run on Android emulator or device.
- `npm run ios` – run on iOS simulator or device.
- `npm test` – currently prints "No tests".
