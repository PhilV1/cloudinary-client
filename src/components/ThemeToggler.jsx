import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useState } from 'react'

const themes = {
  light: 'light',
  dark: 'dark',
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light

    document.documentElement.setAttribute('data-theme', newTheme)

    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className="btn ">
      {theme === 'light' ? (
        <BsMoonFill className="h-5 w-5 " />
      ) : (
        <BsSunFill className="h-5 w-5" />
      )}
    </button>
  )
}
export default ThemeToggle
