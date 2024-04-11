/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Feed } from "./Feed"
import DataContext from "./Contexts/DataContext"


export const Home = () => {
  const {searchResult}=useContext(DataContext);
  return (
    <main>
        {searchResult.length ?(<Feed searchResult={searchResult}/>):(<p style={{marginTop:"2rem"}}>No Posts to display</p>)}
    </main>
  )
}
