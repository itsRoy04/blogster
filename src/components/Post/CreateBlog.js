
"use client"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import JoditEditor from "jodit-react";
import axios from "axios";

export default function BlogPostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreateNewPost = async () => {
        try {
            const { data } = await axios.post(`/api/blog/create-post`, {
                title,
                content
            })
            console.log("handleCreateNewPost", data)
            if (data.success) {
                console.log("new post ", data)
            }

        } catch (error) {
            console.log("error", error)
        }
    }

    console.log("title content new post", title, content)


    return (
        <form className="max-w-2xl mx-auto mt-8 p-4 shadow-md bg-white" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>

            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    {...register("title", { required: true })}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                />
                {errors.title && <span className="text-red-500">Title is required</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                    Content
                </label>
                <JoditEditor
                    value={content}
                    tabIndex={1}
                    onChange={(value) => setContent(value)}
                    config={{
                        height: 400,
                        buttons: 'bold,italic,underline,|,ul,ol,|,outdent,indent,|,link',
                        // Add other buttons as needed
                    }}
                    style={{
                        width: '100%',
                    }}
                />
                {errors.content && <span className="text-red-500">Content is required</span>}
            </div>

            <div className="flex items-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={handleCreateNewPost}
                >
                    Create Post
                </button>
            </div>
        </form>
    );
};
