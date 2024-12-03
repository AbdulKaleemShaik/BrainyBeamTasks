Theme Changer App

This project implements a global app theme switcher using React Context API and local storage. The theme switcher allows users to toggle between light and dark themes, with their preferences persisted even after the app is reloaded.

Features
Global Theme Management: Switch between light and dark themes across the entire app.
Persistent User Preference: Save the selected theme to local storage so it persists across sessions.
React Context API: Manage and share the theme state across the app without prop drilling.
Responsive Design: Ensure a visually pleasing experience on all devices.

Technologies Used
React: Frontend framework.
Context API: State management.
Local Storage: Persisting user-selected theme.
CSS: Styling the light and dark themes.



Usage
Light/Dark Theme Switching
The app loads the theme based on the saved preference in local storage. If no preference exists, it defaults to the light theme.
Use the toggle button in the app to switch between light and dark themes.
The selected theme applies globally across all components.

Key Components
ThemeProvider: A React Context Provider that manages the current theme state and provides it to child components.
App.js: The root component, where the ThemeProvider wraps the entire app.
ThemeToggle.js: A component to toggle between light and dark themes.
localStorage: Used to save and retrieve the theme preference.



