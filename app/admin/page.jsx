"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token && token !== "" && token !== null && token !== undefined) {
      router.push("/admin");
    } else {
      router.push("/admin/auth/login");
    }
  }, []);
  return (
    <main className={`flex h-full flex-col items-center justify-center `}>
      <div className={`space-y-6`}>
        <h1 className={`text-6xl font-semibold text-black drop-shadow-md`}>
          AdminPage
        </h1>
        <p>
          This is Admin Page click add user to add new user and view logs to
          view logs
        </p>
        <div className="flex gap-2">
          <Link href={"/admin/users/addUsers"} className="btn-primary">
            Add Users
          </Link>
          <Link href={"/admin/logs"} className="btn-secondary">
            View Logs
          </Link>
        </div>
      </div>
    </main>
  );
}
