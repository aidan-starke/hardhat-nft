import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { ThemeSwitcherProvider } from 'react-css-theme-switcher'
import { BrowserRouter as Router } from 'react-router-dom'

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
}

const prevTheme = window.localStorage.getItem('theme')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme ? prevTheme : 'light'}>
        <App />
      </ThemeSwitcherProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
