import React from 'react'
import headerStyles from "./header.module.css";
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className={headerStyles.container}
  >
    <div className={headerStyles.header}
    >
      <h1 style={{ margin: 0 }}>
        <Link className={headerStyles.link}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
