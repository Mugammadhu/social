/* eslint-disable react/prop-types */
import { useContext } from 'react'
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa'
import DataContext from './Contexts/DataContext'

export const Header = ({title}) => {

  const {width}=useContext(DataContext)
  return (
    <header className="title">
        <h1>{title}</h1>
        {width<786 ? <FaMobileAlt /> :width<992 ? <FaTabletAlt/> :<FaLaptop />}
    </header>
  )
}
