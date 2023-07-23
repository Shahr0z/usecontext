<!DOCTYPE html>
<html>
  <body>
    <h1>React App Theme Manage with Context Api and Custom Hooks</h1>
    <p>
      This repository contains code for a React app that uses the Context API and custom hooks to manage and handle app themes and colors. In this app, you can toggle between light and dark themes, and the colors of the components will change accordingly.
    </p>
    <h2>Getting Started</h2>
    <ol>
      <li>Clone the repository to your local machine.</li>
      <li>Install the dependencies using <code>npm install</code>.</li>
      <li>Run the app using <code>npm start</code>.</li>
    </ol>
    <h2>Features</h2>
  <ul>
    <li>App-wide theme management using React Native's context API</li>
    <li>Custom hooks to manage and access theme-related colors dynamically</li>
    <li>Ability to toggle between light and dark themes</li>
    <li>Implementation of custom components (buttons and cards) based on the active theme</li>
  </ul>
    <h2>Demo</h2>
https://github.com/Shahr0z/usecontext/assets/99717541/cffda177-e70f-488b-b9dd-7caabbb7b247
 <h2>Context and Custom Hooks</h2>
  <p>The core part of the theme manager is implemented using React Native's context API and custom hooks. The <code>ThemeContext</code> provides the current theme and a function to change it. The <code>useTheme</code> hook is used to access the theme and toggle function throughout the app.</p>

  <h3>Context API (<code>index.js</code>)</h3>
<pre><code>import React, { createContext, useState, useContext } from 'react';
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        &lt;ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        &lt;/ThemeContext.Provider>
    );
};
</code></pre>
<h3>Custom Hook (<code>useColors.js</code>)</h3>
<pre><code>import { useTheme } from "../Context/Theme";
import { darkTheme, lightTheme } from "../Theme";
export const useColors = () => {
    const { theme } = useTheme();
    return theme === 'dark' ? darkTheme : lightTheme;
};
</code></pre>
<h2>Contributing</h2>
    <p>Contributions to this project are welcome. If you find any issues or have any suggestions for improvements, please feel free to create a pull request or open an issue.</p>

  </body>
</html>
