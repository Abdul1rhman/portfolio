import React from 'react'
import Work from './Work'
import Footer from './Footer'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
function Home() {
  
  const [text] = useTypewriter({
    words:['Abdulrhman','a Developer' ],
    loop:{}
  });
  
  
  return (
    <div>
      <div className='cont' id='f'>
        <div className='image'>
          <img src="https://i.pinimg.com/originals/10/0e/40/100e40496828d3aff5f25586879cd7cd.jpg" alt="" />
        </div>
        
        <div className='head'>
          <p className='red'>hello and arhabo</p>
          <h1 style={{fontSize:'56px'}}>Hello I'm{' '} 
          <span className='red' style={{fontWeight: 'bold' }}>{text}</span>
          <span><Cursor cursorColor={'white'}/></span>
          </h1>
          <h3 className='red'>The sky is the limit</h3>
          <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti corporis quos deleniti commodi nihil quidem aliquid laboriosam, ipsa ex, iure sint ullam similique labore eaque a, est mollitia enim!</p>

        </div>
       
      </div>
      <Work/>
      <Footer />
    </div>
    
  )
}

export default Home