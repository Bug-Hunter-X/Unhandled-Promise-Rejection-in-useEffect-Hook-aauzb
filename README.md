# Unhandled Promise Rejection in useEffect Hook

This repository demonstrates a common error in React Native: accessing state variables before they've been initialized within a `useEffect` hook.  The error typically manifests as an `Unhandled Promise Rejection` when an asynchronous operation (like a fetch call) hasn't completed before attempting to use the updated state value.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution using optional chaining or a conditional check.