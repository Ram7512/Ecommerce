import usePosts from "../hooks/PostHook";
import type { Post } from "../types/PostType";

function Posts() {

    const { data, error, isLoading } = usePosts(1);

    if (isLoading) {
        return <p className="text-center mt-10">Loading posts...</p>;
    }

    if (error) {
        return <p className="text-center mt-10 text-red-500">
            Failed to fetch posts
        </p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <h1 className="text-3xl font-bold mb-8">
                Latest Posts
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {data?.posts.map((post : Post) => (

                    <div
                        key={post.id}
                        className="bg-white p-6 rounded-xl shadow-md border"
                    >

                        <h2 className="text-xl font-semibold mb-3">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 mb-4">
                            {post.body}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between text-sm text-gray-500">

                            <span>
                                <i className="bi bi-hand-thumbs-up"></i>
                                {" "}{post.reactions.likes}
                            </span>

                            <span>
                                <i className="bi bi-eye"></i>
                                {" "}{post.views} views
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Posts;