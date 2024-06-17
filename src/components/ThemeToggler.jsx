// Icons und useState importieren
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useState } from 'react'

// Themes Objekt erstellen mit den Themes die du in deinem tailwind.config.js Datei eingefügt hast.
const themes = {
  light: 'light',
  dark: 'dark',
}

// ThemeToggle Komponente erstellen
const ThemeToggle = () => {
  // useState für das Theme - default ist light
  const [theme, setTheme] = useState(themes.light)

  // Funktion um das Theme zu wechseln
  // Wenn das Theme light ist, dann wechsel zu dark und umgekehrt
  const toggleTheme = () => {
    // Wenn das Theme light ist, dann wechsel zu dark und umgekehrt und speichere das Theme in der newTheme Variable
    const newTheme = theme === themes.light ? themes.dark : themes.light

    // Setze das Theme in der HTML Attribute und ...
    document.documentElement.setAttribute('data-theme', newTheme)
    // Setze das Theme in der useState Variable
    setTheme(newTheme)
  }

  // Button mit dem onClick Event und dem Icon
  return (
    <button onClick={toggleTheme} className="btn btn-sm">
      {/* Wenn das Theme light ist, dann zeige das Moon Icon und umgekehrt */}
      {theme === 'light' ? (
        <BsMoonFill className="h-4 w-4 " />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  )
}
export default ThemeToggle
