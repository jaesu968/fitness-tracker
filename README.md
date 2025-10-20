# React Native Navigation Lab — Fitness Tracker (Codecademy Practice)

This Fitness Tracker is a Codecademy practice project designed to help you learn React Native and React Navigation. The UI components and screens are provided; your task is to connect them together with navigators and route logic.

## Goals

In this exercise you'll practice:

- Creating a root navigator to switch between major app sections
- Building nested navigators (stacks) for each section
- Performing imperative navigation between screens
- Passing and using route parameters to initialize screens

## Files to work on

- `App.tsx` — navigation entry point
- `components/ProfileScreen.tsx` — profile content
- `components/ProgressScreen.tsx` — fitness progress views
- `components/WorkoutsScreen.tsx` — list of available workouts
- `components/WorkoutDetailScreen.tsx` — workout details view

## How the project works

When you start the application it will initially be a minimal shell. As you implement navigators and connect the screens, the app will come to life and allow navigation between Workouts, Progress, and Profile.

## Tips

- Check off tasks as you complete them to keep track of progress.
- If changes do not appear while developing, try refreshing the simulator or reloading the app — sometimes updates can get stuck during rendering.

## Local development

This project runs with Expo. A minimal set of steps to get started locally:

1. Install dependencies:

```bash
npm install --legacy-peer-deps
# or: yarn
```

2. Start the Metro bundler:

```bash
npx expo start --clear
```

3. Open a simulator or device:

- iOS Simulator (macOS):

```bash
npx expo start --ios
# or press `i` in the running `expo start` terminal
```

- Android Emulator:

```bash
# Start an AVD in Android Studio, then
npx expo start --android
# or press `a` in the running `expo start` terminal
```

If you prefer to open the project on a physical device, scan the QR code printed by the Expo CLI with the Expo Go app.

---

Happy learning — enjoy building your Fitness Tracker!