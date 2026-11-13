import useSWR from "swr";
import { postServices } from "../services/PostServices";
import type { PostsResponse } from "../types/PostType";

function usePosts(page: number) {

    const limit = 10;
    const skip = (page - 1) * limit;

    const { data, error, isLoading } = useSWR<PostsResponse>(
        ["posts", page],
        () => postServices.getPosts(limit, skip)
    );

    return {
        data,
        error,
        isLoading,
        limit
    };
}

export default usePosts;