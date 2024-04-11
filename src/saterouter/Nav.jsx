/* eslint-disable react/prop-types */
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import DataContext from './Contexts/DataContext'

export const Nav = () => {
  const {search,setSearch}=useContext(DataContext);
  return (
    <nav className="nav">
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" placeholder="Search Post" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        </form>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="post">Post</Link></li>
            <li><Link to="about">About</Link></li>
        </ul>
    </nav>
  )
}
