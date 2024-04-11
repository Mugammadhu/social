/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import DataContext from "./Contexts/DataContext";

const Update = () => {
  const {
    posts,
    handleUpdate,
    editTitle,
    editBody,
    setEditTitle,
    setEditBody,
  } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
      console.log(editTitle, editBody);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, setEditBody, setEditTitle]);
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h1>EditPost</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="postTitle">Title:</label>
            <input
              type="text"
              autoFocus
              required
              id="postTitle"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              autoFocus
              required
              id="postBody"
              value={editBody}
              onChange={(e) => {
                setEditBody(e.target.value);
              }}
            ></textarea>
            <button
              type="submit"
              onClick={() => {
                handleUpdate(post.id);
              }}
            >
              Submit
            </button>
          </form>
        </>
      )}

      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that is disappointing</p>
          <p>
            Visit Home Page
            <Link to="/">HOME</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default Update;

// () => {
//
