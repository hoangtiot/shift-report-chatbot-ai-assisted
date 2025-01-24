import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Shift Report Management</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">SHIFT REPORTS</p>
          <li>
            <Link to="/reports">View List</Link>
          </li>
          <li>
            <Link to="/reports/new">Create New</Link>
          </li>
          <p className="title">CATEGORIES</p>
          <li>
            <Link to="/categories">View List</Link>
          </li>
          <li>
            <Link to="/categories/new">Create New</Link>
          </li>
          <p className="title">EXPENSES</p>
          <li>
            <Link to="/expenses">View List</Link>
          </li>
          <li>
            <Link to="/expenses/new">Create New</Link>
          </li>
          <p className="title">DEBTS</p>
          <li>
            <Link to="/debts">View List</Link>
          </li>
          <li>
            <Link to="/debts/new">Create New</Link>
          </li>
          <p className="title">INCOMES</p>
          <li>
            <Link to="/incomes">View List</Link>
          </li>
          <li>
            <Link to="/incomes/new">Create New</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;