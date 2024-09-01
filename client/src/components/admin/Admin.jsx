import React from "react";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const Admin = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <section className=" sm:flex   bg-black mt-16 sm:h-screen">
      <div className="flex-shrink-0 sm:w-full md:w-64 md:h-full sm:flex sm:flex-wrap border-r border-gray-700 bg-gray-900 text-yellow-400 p-4">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin"
              className="flex  items-center p-3 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-current text-yellow-400"
              >
                <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
              </svg>
              <span className="ml-2 text-lg">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="getcontacts"
              className="flex items-center p-3 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              <svg
                className="h-6 w-6 text-yellow-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />
                <rect x="9" y="3" width="6" height="4" rx="2" />
                <line x1="9" y1="12" x2="9.01" y2="12" />
                <line x1="13" y1="12" x2="15" y2="12" />
                <line x1="9" y1="16" x2="9.01" y2="16" />
                <line x1="13" y1="16" x2="15" y2="16" />
              </svg>
              <span className="ml-2 text-lg">Contact</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="getusers"
              className="flex items-center p-3 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              <svg
                className="h-6 w-6 text-yellow-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <span className="ml-2 text-lg">User</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1  p-4 bg-black ">
     
        <Outlet />
      </div>
    </section>
  );
};

export default Admin;
