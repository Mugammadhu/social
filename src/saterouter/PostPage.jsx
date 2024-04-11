/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import DataContext from "./Contexts/DataContext";


export const PostPage = () => {
  const {posts,handleDelete}=useContext(DataContext)
  const {id}=useParams();
  const post=posts.find((post)=>(post.id).toString()===id);
  return (
    <main>
    <article className="newpost">
      {post && 
      <>
      <h1 className="postTitle">{post.title}</h1>
        <p className="postDate">{post.datetime}</p>
        <p className="postBody">{post.body}</p>
        <Link to={`/edit/${post.id}`}>
        <button className="uptbtn">Update</button>
        </Link>
        <button onClick={()=>{handleDelete(post.id)}} className="delbtn">Delete</button>
      </>
      }
      {!post && 
      <>
      <h2>Post Not Found</h2>
      <p>Well, that is  disappointing.</p>
      <p className="home1"><Link to="/">Visit Our Home Page</Link></p>
      </>}
    </article>
</main>
  )
}
