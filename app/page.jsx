import Link from "next/link";

export default async function Home() {
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
          <Link href={"/auth/login"}>
            <button className="btn-secondary">Log In</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
