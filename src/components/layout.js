import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Switch from "./Switch"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Switch
              isOn={theme === 'dark'}
              handleToggle={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            />
          )}
        </ThemeToggler>
      </div>
    )
  } else {
    header = (
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <Switch
              isOn={theme === 'dark'}
              handleToggle={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            />
          )}
        </ThemeToggler>
      </div>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
