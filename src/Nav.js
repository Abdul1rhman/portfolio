import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
function Nav() {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setOpen] = useState(false)


  const handel = () => {
    setClicked(!clicked)
    setOpen(!isOpen)
  }

  const handela=()=>{
    setOpen(false)
    setClicked(!clicked)
  }
  return (
    <div>
      <nav>
        <h2>Abdulrhman</h2>

        <button className='nav-btn' onClick={handel}>{clicked?

          <MdClose style={{width:'30px',height:'30px'}}/>:

        <HiMenu style={{width:'30px',height:'30px',}}/>}
        
        </button>
        <ul className={`nav-menu ${isOpen?'active':''}`}>
          <li className='nav-item'><a href="#f" onClick={handela} >Home</a></li>
          {/* <li className='nav-item'><a href="#" onClick={handela}>About</a></li> */}
          <li className='nav-item'><a href="#w"  onClick={handela}>Work</a></li>
          <li className='nav-item'><a href="#c"onClick={handela}>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav