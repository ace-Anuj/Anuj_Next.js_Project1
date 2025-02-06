"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useGlobalState } from "../services/globalstate"; // Import Zustand store

export default function Dashboard() {
  console.log("Dashboard is here");
  // Extract global state & actions
  const { users, loading, error, fetchingUsers } = useGlobalState();

  // Fetch users when component mounts (if not already loaded)
  useEffect(() => {
    if (users.length === 0) {
      fetchingUsers();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#041b40] to-[#070708] w-full">
      {/* Main container with content */}
      <div className=" container mx-auto p-4 w-full">
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-white">User Profiles </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="border p-4 rounded-lg cursor-pointer hover:bg-slate-600 bg-black"
                >
                  <h2 className="font-bold text-white">{user.name}</h2>
                  <p className="text-white">ID: {user.id}</p>
                  <p className="text-white">Email: {user.email}</p>
                  <p className="text-white">
                    Address: {user.address.street}, {user.address.city}
                  </p>
                  <p className="text-white">Company: {user.company.name}</p>

                  {/* Navigate to the user’s post page */}
                  <Link href={`/users/${user.id}`} className="text-blue-500 underline">
                    <button className="mt-4 px-4 py-2 bg-[#033a91] text-white rounded-md hover:bg-blue-600">
                      View Posts 
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
