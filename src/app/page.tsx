"use client";
import PostCard from "@/components/PostsCard";
import styles from "./page.module.css";
import { useGetPostsQuery, useNewPostMutation } from "@/components/redux/api";
import { FormEvent, useState } from "react";
export default function Home() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    newPost(post);
    setTitle("");
    setBody("");
  };
  return (
    <main className={styles.main}>
      <div className={styles.mt20}>
        <h2>
          RTK Query using React Redux<span>-&gt;</span>
        </h2>
        <form onSubmit={submitHandler} style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit"> Add </button>
        </form>
        {isLoading ? (
          <div>Loading </div>
        ) : (
          data?.map((i) => <PostCard post={i} key={i.id} />)
        )}
        <p className={styles.mt20}>
          RTK Query focuses on data fetching and caching, while Redux Toolkit
          provides utilities for setting up and working with a Redux store,
          including reducers and middleware. Both can be used together in a
          Redux-powered React application for state management.
        </p>{" "}
        <p className={styles.mt20}>
          RTK Query focuses on data fetching and caching, while React-Redux
          focuses on integrating the Redux state management library with React
          components. They serve complementary roles in Redux-based
          applications.
        </p>
      </div>
    </main>
  );
}
