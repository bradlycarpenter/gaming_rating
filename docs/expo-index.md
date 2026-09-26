# Expo / React Native index (SDK 57)

A "what do I read to do X" map for `apps/native`.

- Docs root: <https://docs.expo.dev/>
- **Every page is available as markdown**: append `.md` to any path — e.g.
  `https://docs.expo.dev/router/basics/navigation.md`. Links below use the `.md` form so they're
  readable in a terminal (`curl -s <url>`); drop the `.md` for the browser version.
- Full page map: <https://docs.expo.dev/llms.txt>
- React Native core components/APIs (View, Text, FlatList, StyleSheet, Platform): <https://reactnative.dev/docs/components-and-apis>

---

## 0. Mental model

| I want to | Read |
| --- | --- |
| Understand what Expo is vs React Native vs EAS | [Core concepts](https://docs.expo.dev/core-concepts.md) |
| Understand the dev loop (dev server, dev build, Expo Go) | [Develop an app with Expo](https://docs.expo.dev/workflow/overview.md) |
| Know when I need a custom dev build instead of Expo Go | [Development builds intro](https://docs.expo.dev/develop/development-builds/introduction.md) |
| Configure the app (name, icon, scheme, plugins) | [app.json / app.config.js](https://docs.expo.dev/versions/latest/config/app.md), [Configure with app config](https://docs.expo.dev/workflow/configuration.md) |
| Understand why `npx expo prebuild` exists and eject doesn't | [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation.md) |
| Work in this pnpm monorepo | [Work with monorepos](https://docs.expo.dev/guides/monorepos.md) |

---

## 1. Routing & navigation (Expo Router — `src/app/`)

| I want to | Read |
| --- | --- |
| Understand file-based routing | [Core concepts](https://docs.expo.dev/router/basics/core-concepts.md) |
| Decode `(tabs)`, `[id]`, `_layout`, `+not-found` | [Router notation](https://docs.expo.dev/router/basics/notation.md) |
| Add a stack / tabs / drawer layout | [Navigation layouts](https://docs.expo.dev/router/basics/navigation-layouts.md), [Stack](https://docs.expo.dev/router/advanced/stack.md), [JavaScript tabs](https://docs.expo.dev/router/advanced/tabs.md), [Native tabs](https://docs.expo.dev/router/advanced/native-tabs.md) |
| Navigate: `<Link>`, `router.push`, going back | [Navigating between pages](https://docs.expo.dev/router/basics/navigation.md) |
| A game detail route `/games/[id]` and read the id | [URL parameters](https://docs.expo.dev/router/reference/url-parameters.md) |
| Open a screen as a modal | [Modals](https://docs.expo.dev/router/advanced/modals.md) |
| **Gate routes behind login** (we have `login.tsx` / `sign-up.tsx`) | [Authentication in Expo Router](https://docs.expo.dev/router/advanced/authentication.md), [Protected routes](https://docs.expo.dev/router/advanced/protected.md) |
| Loading & error states per route | [Error handling and loading states](https://docs.expo.dev/router/error-handling.md) |
| Typed `href`s | [Typed routes](https://docs.expo.dev/router/reference/typed-routes.md) |
| Nest a tab layout inside a stack correctly | [Nesting navigators](https://docs.expo.dev/router/advanced/nesting-navigators.md), [Common navigation patterns](https://docs.expo.dev/router/basics/common-navigation-patterns.md) |
| Keep routes under `src/` (we do) | [Top-level src directory](https://docs.expo.dev/router/reference/src-directory.md) |
| API reference for `Link`, `Stack`, `useRouter`, `useLocalSearchParams` | [expo-router SDK](https://docs.expo.dev/versions/latest/sdk/router.md), [Link](https://docs.expo.dev/versions/latest/sdk/router/link.md), [Stack](https://docs.expo.dev/versions/latest/sdk/router/stack.md) |

---

## 2. Data: talking to `apps/server`

| I want to | Read |
| --- | --- |
| Point the app at the API URL per environment | [Environment variables in Expo](https://docs.expo.dev/guides/environment-variables.md) (`EXPO_PUBLIC_*`, as in `src/env.ts`) |
| Reach a localhost Worker from a device/simulator | [Common development errors](https://docs.expo.dev/workflow/common-development-errors.md) |
| Options for fetching/caching (we use TanStack Query) | [Databases in Expo apps](https://docs.expo.dev/develop/database.md) |
| Detect offline / connection state | [Network](https://docs.expo.dev/versions/latest/sdk/network.md) |
| Store the session token securely | [SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore.md) |
| Store non-sensitive prefs | [Store data](https://docs.expo.dev/develop/user-interface/store-data.md) |
| **Local SQLite (todo.md Phase 1)** | [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite.md) |
| Offline-first sync patterns | [Local-first architecture](https://docs.expo.dev/guides/local-first.md) |
| Read files / cache images to disk | [FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem.md) |

---

## 3. Auth (better-auth + expo)

| I want to | Read |
| --- | --- |
| How auth fits an Expo app generally | [Authentication in Expo apps](https://docs.expo.dev/develop/authentication.md) |
| OAuth / OpenID flows and redirect URIs | [Authentication with OAuth or OpenID providers](https://docs.expo.dev/guides/authentication.md), [AuthSession](https://docs.expo.dev/versions/latest/sdk/auth-session.md) |
| Open a browser for an OAuth round-trip | [WebBrowser](https://docs.expo.dev/versions/latest/sdk/webbrowser.md) |
| Deep-link back into the app after login | [Linking into your app](https://docs.expo.dev/linking/into-your-app.md), [Linking overview](https://docs.expo.dev/linking/overview.md) |
| Redirect signed-out users away from tabs | [Protected routes](https://docs.expo.dev/router/advanced/protected.md) |
| Don't land on login while the stored session is still loading | [Authentication in Expo Router](https://docs.expo.dev/router/advanced/authentication.md) (the `SplashScreenController` section), [SplashScreen](https://docs.expo.dev/versions/latest/sdk/splash-screen.md) |
| Sign in with Apple (App Store requirement if you ship social login) | [AppleAuthentication](https://docs.expo.dev/versions/latest/sdk/apple-authentication.md) |

better-auth's own Expo client docs are separate from Expo's: <https://www.better-auth.com/docs/integrations/expo>

---

## 4. UI

| I want to | Read |
| --- | --- |
| The core primitives (`View`, `Text`, `Pressable`, `ScrollView`, `FlatList`) | [RN components](https://reactnative.dev/docs/components-and-apis) |
| Long lists of search results | [FlatList](https://reactnative.dev/docs/flatlist) |
| Styling with Tailwind (we use uniwind) | [Tailwind CSS](https://docs.expo.dev/guides/tailwind.md) |
| Notches / home indicator | [Safe areas](https://docs.expo.dev/develop/user-interface/safe-areas.md) |
| Status/nav bar appearance | [System bars](https://docs.expo.dev/develop/user-interface/system-bars.md), [StatusBar](https://docs.expo.dev/versions/latest/sdk/status-bar.md) |
| Dark mode | [Color themes](https://docs.expo.dev/develop/user-interface/color-themes.md) |
| Custom fonts | [Fonts](https://docs.expo.dev/develop/user-interface/fonts.md), [Font](https://docs.expo.dev/versions/latest/sdk/font.md) |
| Icons | [Expo Vector Icons](https://docs.expo.dev/guides/icons.md) |
| Fast, cached game cover images | [Image](https://docs.expo.dev/versions/latest/sdk/image.md), [Assets](https://docs.expo.dev/develop/user-interface/assets.md) |
| Animations / gestures (reanimated, gesture-handler are installed) | [Animation](https://docs.expo.dev/develop/user-interface/animation.md) |
| Search input that doesn't get covered by the keyboard | [Keyboard handling](https://docs.expo.dev/guides/keyboard-handling.md), [Controlled components](https://docs.expo.dev/guides/controlled-components.md) |
| Splash screen & app icon | [Splash screen and app icon](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon.md), [SplashScreen](https://docs.expo.dev/versions/latest/sdk/splash-screen.md) |
| Star-rating haptics | [Haptics](https://docs.expo.dev/versions/latest/sdk/haptics.md) |
| Native SwiftUI/Compose components | [Expo UI](https://docs.expo.dev/versions/latest/sdk/ui.md) |

---

## 5. Running & debugging

| I want to | Read |
| --- | --- |
| Run on the iOS simulator | [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator.md) |
| Run on an Android emulator | [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator.md) |
| Read logs | [View logs](https://docs.expo.dev/workflow/logging.md) |
| Make sense of a red screen | [Errors and warnings](https://docs.expo.dev/debugging/errors-and-warnings.md), [Debugging runtime issues](https://docs.expo.dev/debugging/runtime-issues.md) |
| Debugger / profiler / React DevTools | [Debugging and profiling tools](https://docs.expo.dev/debugging/tools.md) |
| Fix a stale bundler cache | [Clear bundler caches (macOS/Linux)](https://docs.expo.dev/troubleshooting/clear-cache-macos-linux.md) |
| Everything else that breaks | [Troubleshooting overview](https://docs.expo.dev/troubleshooting/overview.md), [Common development errors](https://docs.expo.dev/workflow/common-development-errors.md) |
| Configure Metro (monorepo, svg, etc.) | [Metro bundler](https://docs.expo.dev/guides/customizing-metro.md), [metro.config.js](https://docs.expo.dev/versions/latest/config/metro.md) |
| Add a library and know if it needs native code | [Using Expo SDK, RN, and third-party libraries](https://docs.expo.dev/workflow/using-libraries.md) |
| TypeScript setup and path aliases (`@/`) | [Using TypeScript](https://docs.expo.dev/guides/typescript.md) |
| Lint/format config | [Using ESLint and Prettier](https://docs.expo.dev/guides/using-eslint.md) |

---

## 6. Device capabilities you'll likely want

| Need | Page |
| --- | --- |
| Ask for a permission properly | [Permissions](https://docs.expo.dev/guides/permissions.md) |
| App/build metadata at runtime | [Constants](https://docs.expo.dev/versions/latest/sdk/constants.md) |
| Push notifications | [Push notifications overview](https://docs.expo.dev/push-notifications/overview.md), [Setup](https://docs.expo.dev/push-notifications/push-notifications-setup.md) |
| Pick an image (avatars) | [ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker.md) |
| Open external URLs | [Linking](https://docs.expo.dev/versions/latest/sdk/linking.md), [Linking into other apps](https://docs.expo.dev/linking/into-other-apps.md) |

---

## 7. Shipping (later)

| I want to | Read |
| --- | --- |
| Build for the stores | [Build your project for app stores](https://docs.expo.dev/deploy/build-project.md), [EAS Build](https://docs.expo.dev/build/introduction.md) |
| Submit | [Submit to app stores](https://docs.expo.dev/deploy/submit-to-app-stores.md) |
| Ship JS-only fixes OTA | [EAS Update](https://docs.expo.dev/eas-update/introduction.md) |
| Crash reporting | [Monitoring services](https://docs.expo.dev/monitoring/services.md), [Using Sentry](https://docs.expo.dev/guides/using-sentry.md) |
| Upgrade the SDK | [Upgrade Expo SDK](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough.md) |

---

## Suggested path for this project

1. [Core concepts](https://docs.expo.dev/core-concepts.md) + [Develop an app with Expo](https://docs.expo.dev/workflow/overview.md)
2. [Router core concepts](https://docs.expo.dev/router/basics/core-concepts.md) → [notation](https://docs.expo.dev/router/basics/notation.md) → [layouts](https://docs.expo.dev/router/basics/navigation-layouts.md) → [navigation](https://docs.expo.dev/router/basics/navigation.md) — then re-read your own `src/app/` tree
3. [RN components](https://reactnative.dev/docs/components-and-apis) + [FlatList](https://reactnative.dev/docs/flatlist) — rebuild the search results list deliberately
4. [URL parameters](https://docs.expo.dev/router/reference/url-parameters.md) — add `/games/[id]`
5. [Authentication in Expo Router](https://docs.expo.dev/router/advanced/authentication.md) + [Protected routes](https://docs.expo.dev/router/advanced/protected.md) + [SecureStore](https://docs.expo.dev/versions/latest/sdk/securestore.md) — finish the login flow
6. [SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite.md) + [Local-first architecture](https://docs.expo.dev/guides/local-first.md) — todo.md Phase 1
