"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      router.push("/users/auth/login");
    }
  }, []);
  return (
    <main className={`flex h-full flex-col items-center justify-center `}>
      <div className={`space-y-6`}>
        <h1 className={`text-6xl font-semibold text-black drop-shadow-md`}>
          Auth
        </h1>
        <p className={`text-black  text-lg`}>
          User authentication and authorization system
        </p>
        <div>
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              router.push("/users/auth/login");
            }}
            className="btn-secondary"
          >
            Log out
          </button>
        </div>
      </div>
    </main>
  );
}
