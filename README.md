# Checkpoint-Debugging-React

🔍 Debugging Report – Vite React App
Setup:

Initialized a Vite React project.

Created App, Counter, and Display components with prop/state logic.

Tools Used:

React Developer Tools

Dev console

Issues Found:

Display was receiving undefined due to incorrect prop name.

Increment button used count++ (post-increment), which caused buggy behavior.

Fixes:

Changed <Display count={count} /> to <Display value={count} />.

Replaced setCount(count++) with setCount(count + 1).

Result:

App functions as expected.

React Dev Tools confirms correct state/prop flow.
