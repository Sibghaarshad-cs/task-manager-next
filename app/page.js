import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center">

        <h1 className="text-4xl font-bold mb-4">
          Task Manager
        </h1>

        <p className="text-gray-500 mb-8">
          Manage your tasks easily
        </p>


        <div className="flex gap-4 justify-center">

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Signup
          </Link>


          <Link
            href="/login"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            Login
          </Link>

        </div>

      </div>

    </main>
  );
}