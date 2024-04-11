/* eslint-disable react/prop-types */

import { useContext } from "react"
import DataContext from "./Contexts/DataContext"


export const NewPost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}=useContext(DataContext)
  return (
    <main className="NewPost">
        <h1>NewPost</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="postTitle">Post:</label>
          <input type="text" autoFocus required id="postTitle" value={postTitle} onChange={(e)=>{setPostTitle(e.target.value)}}/>
          <label htmlFor="postBody">Body:</label>
          <textarea autoFocus required id="postBody" value={postBody} onChange={(e)=>{setPostBody(e.target.value)}}></textarea>
          <button type="submit">Submit</button>

        </form>
    </main>
  )
}
