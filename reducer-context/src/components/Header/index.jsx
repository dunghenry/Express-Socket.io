import React from 'react'
import { ThemeContext } from '../ThemeContext'
const Header = () => {
    const { theme, toggleTheme} = React.useContext(ThemeContext);
    console.log(theme)
  return (
      <div className={theme}>
          <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default Header