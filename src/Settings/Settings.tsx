import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import CategorySettings from './CategorySettings';
import MenuSettings from './MenuSettings';

type Props = {};

const Settings = (props: Props) => {
  return (
    <Layout>
      <h2 className="text-xl mb-4 font-header">User Settings</h2>

      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <nav>
            <ul>
              <li className="mb-2">
                <NavLink
                  to="categories"
                  className="pr-1 py-1 font-header"
                  activeClassName="border-b-2 border-primary-500">
                  Categories
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="menu" className="pr-1 py-1 font-header" activeClassName="border-b-2 border-primary-500">
                  Menu
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-span-6">
          <Routes>
            <Route path="categories" element={<CategorySettings />} />
            <Route path="menu" element={<MenuSettings />} />
            <Route path="*" element={<Navigate to="categories" />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
