import type { PostsResponse } from "../types/PostType";

const API_URL = "https://dummyjson.com";

export const postServices = {

    // Get All Posts
    getPosts: async (
        limit: number,
        skip: number
    ): Promise<PostsResponse> => {

        const response = await fetch(
            `${API_URL}/posts?limit=${limit}&skip=${skip}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        return response.json();
    },

};