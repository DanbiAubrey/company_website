import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 200) {
        Navigate("/admin");
      }
    } catch (error) {
      console.log("Failed Logout: ", error);
    }
  };

  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/admin/posts" className="text-xl font-bold">
              Admin Page
            </Link>
          </div>

          <div className="hidden text-lg lg:flex items-center space-x-4">
            <Link
              to="/admin/posts"
              className="hover:bg-gray-700 px-3 py-2 rounded"
            >
              Posts
            </Link>
            <Link
              to="/admin/contacts"
              className="hover:bg-gray-700 px-3 py-2 rounded"
            >
              Contacts
            </Link>
            <button
              onClick={handleLogout}
              className="hover:bg-gray-700 px-3 py-2 rounded text-white"
            >
              Logout
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-700"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/admin/posts"
                className="block hover:bg-gray-700 px-3 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Posts
              </Link>
              <Link
                to="/admin/contacts"
                className="block hover:bg-gray-700 px-3 py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNavbar;
