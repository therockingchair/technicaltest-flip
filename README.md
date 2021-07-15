# React Native Technical Test Flip

## My Environment Setup

node 12.13.0 - Xcode 12.2 - Android Studio 4.0

## About App

- Transaction Detail
- Transaction List
- Searched or filtered by
  - name
  - sender bank
  - beneficiary bank
  - amount
- Sorted by
  - name A-Z
  - name Z-A
  - date newest
  - date oldest
- Using Hooks API to minimized render times
  - memo
  - useMemo
  - useCallback

## Setup Instructions

### Install Dependencies

`yarn install`

### Run instructions for Android:

- Have an Android emulator or a device connected.
- `yarn android`

### Run instructions for iOS:

- `cd ios && pod install`
- `yarn ios`
