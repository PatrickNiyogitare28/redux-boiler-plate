import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav className="bg-gray-900">
    <section>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/posts">Posts</Link>
    </section>
  </nav>
)
