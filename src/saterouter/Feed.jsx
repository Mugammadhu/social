/* eslint-disable react/prop-types */
import { Post } from "./Post"

export const Feed = ({searchResult}) => {
  return (
    <>
    {searchResult.map((post)=>(<Post key={post.id} post={post}/>))}
    </>
  )
}
