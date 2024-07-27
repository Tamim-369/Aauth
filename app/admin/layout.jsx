"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const AdminLayout = ({ children }) => {
  const [adminToken, setAdminToken] = useState(null);
  useEffect(() => {
    setAdminToken(localStorage?.getItem("adminToken"));
  }, []);
  return (
    <div className="w-full h-full flex sm:flex-row flex-col">
      <div className="w-full sm:w-3/12 bg-white sm:min-h-full flex flex-row sm:flex-col p-2 gap-2">
        {adminToken ? (
          <>
            <Link
              href={"/admin"}
              className="btn-secondary text-center border-none"
            >
              Home
            </Link>
            <Link
              href={"/admin/settings"}
              className="btn-secondary text-center border-none"
            >
              Settings
            </Link>
            <Link
              href={"/admin/logs"}
              className="btn-secondary text-center border-none"
            >
              Logs
            </Link>
            <Link
              href={"/admin/users/addUsers"}
              className="btn-secondary text-center border-none"
            >
              Add Users
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("adminToken");
                window.location.reload();
              }}
              className="btn-secondary"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link
              href={"/admin/auth/login"}
              className="btn-secondary text-center"
            >
              Log In
            </Link>
            <Link
              href={"/admin/auth/register"}
              className="btn-secondary text-center"
            >
              Register
            </Link>
          </>
        )}
      </div>
      <div className="w-full sm:w-9/12 h-full bg-slate-50">{children}</div>
    </div>
  );
};

export default AdminLayout;
