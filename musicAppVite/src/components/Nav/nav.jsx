import { NavLink, Outlet } from "react-router-dom"


let activestyle ={
  textDecoration : 'none',
  padding: '3%',
  background: '#DB9977', 
  color: '#202020', 
  fontWeight: '700', 
  boxShadow: '0 0 2px 2px #1a1919',
  borderRadius: '5px'
}

let notActive ={
    textDecoration : 'none',
    color: 'black'

}
function Nav() {


  return (
    <>
    <nav>
      <ul className="nav nav-pills">
        <li className="nav-item">
            <NavLink to ='/' style= {({ isActive}) => (isActive? activestyle: notActive)}>Home
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to ='/about' style= {({ isActive}) => (isActive? activestyle: notActive)}>About
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to ='/TopSongs' style= {({ isActive}) => (isActive? activestyle: notActive)}>Most Popular Songs
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink to ='/Albums' style= {({ isActive}) => (isActive? activestyle: notActive)}>Albums
            </NavLink>
        </li>
      </ul>     
    </nav>
    <Outlet/>
    </>
  )
}

export default Nav
