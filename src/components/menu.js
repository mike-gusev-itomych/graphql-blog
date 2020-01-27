import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    padding: '10px'
  }}>
    <ul style={{
      listStyle: 'none',
      margin: 0,
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li style={{ margin: 0 }}>
        <Link to="/">Home</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/about">About</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/services">Services</Link>
      </li>
      <li style={{ margin: 0 }}>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu

