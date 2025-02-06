import { create } from "zustand";
import axios from "axios";
import {API_BASE_URL} from './api.js'

export const useGlobalState = create((set) => ({
  users: [], 
  posts: [], 
  error: null,
  loading: false,

 
  fetchingUsers: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      set({ users: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch users", loading: false });
      console.error("Error fetching users:", error);
    }
  },

  // Fetch posts of a specific user
  fetchingUserPosts: async (userId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${API_BASE_URL}/posts?userId=${userId}`);
      set({ posts: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch posts", loading: false });
      console.error(`Error fetching posts for user ${userId}:`, error);
    }
  },
}));
