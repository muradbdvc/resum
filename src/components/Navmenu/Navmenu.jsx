import React from 'react'
import {Link} from 'react-router-dom'

const navitems =[
    {
        id:1,
        title:'Home',
        path:'/',
        cName:'nav-item'
    }, 
    {
        id:2,
        title:'Resume',
        path:'/resume',
        cName:'nav-item'
    }
];
const Navmenu = () => {
  return (
    <div>
        <nav className="navbar rounded-md">
            <ul className="navbar " >
                {navitems.map((item)=>{
                    const {id, path, title}= item;
                    return (
                        <li key={id} className='cName'>
                            <Link to={path}>
                                {title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Navmenu