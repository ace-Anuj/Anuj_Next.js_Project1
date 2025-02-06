"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useGlobalState } from "../../services/globalstate";

export default function UserPostsPage() {
  const { id } = useParams(); // Get user ID from URL
  const { users, posts, loading, error, fetchingUserPosts,fetchingUsers } = useGlobalState();

  // Fetch users list on mount (only if not already fetched)
  // useEffect(() => {
  //   if (users.length === 0) fetchingUsers();
  // }, []);

  // Fetch user posts when `id` changes
  useEffect(() => {
    fetchingUserPosts(id);
  }, [id]);

  useEffect(() => {
    if (!users || users.length === 0) {
      fetchingUsers();
    }
  }, []);

  // Find the selected user from global state
  const selectedUser = users.find((user) => user.id === Number(id));

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-[#041b40] to-[#070708] ">
     

      <Link href='/' className="text-blue-500 underline">
                    <button className="mt-4 px-4 py-2 bg-[#033a91] text-white rounded-md hover:bg-blue-600">
                      Back To Dashboard 
                    </button>
                  </Link>

      <h1 className="text-2xl font-bold my-4 text-white">
        Posts by {selectedUser ? selectedUser.name : "User"}
      </h1>

      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : posts.length > 0 ? (
        <ul className="mt-2">
          {posts.map((post) => (
            <li key={post.id} className="border p-2 rounded-lg mb-2 bg-black">
              <h3 className="font-semibold text-white">{post.title}</h3>
              <p className="text-gray-400">{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}
