import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1 className="p-4">Tour of Heroes</h1>
      <nav className="ml-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes-list">Heroes</Link>
      </nav>
    </header>
  );
}
