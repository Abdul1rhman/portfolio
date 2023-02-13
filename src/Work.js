import React from 'react'
import firstweb from './firstweb.PNG'
import secweb from './secweb.PNG'
import athkar from './athkar.PNG'
import { AiOutlineArrowRight } from 'react-icons/ai';
function Work() {
  return (
    <div className='work-cont' id='w'>

    <h2>My Work</h2>

    <div className='center-work'>
        <div className='projects-cont'>
            <div className='card'>
                <div className='img-cont'>
                <img src={athkar} alt="" />
                </div>
                <h3>athkary</h3>
                
                <div className='anc'>
                    <a href="https://abdul1rhman.github.io/athkar/" target="_blank">Visit Now</a>
                    <AiOutlineArrowRight style={{color:'#ed1047'}}/>
                </div>
            </div>

            <div className='card'>
                <div className='img-cont'>
                <img src={firstweb} alt="" />
                </div>
                <h3>The first website</h3>
                
                <div className='anc'>
                    <a href="https://abdul1rhman.github.io/" target="_blank">Visit Now</a>
                    <AiOutlineArrowRight style={{color:'#ed1047'}}/>
                </div>
            </div>

            <div className='card'>
                <div className='img-cont'>
                <img src={secweb} alt="" />
                </div>
                <h3>The second website</h3>
                
                <div className='anc'>
                    <a href="https://abdul1rhman.github.io/second-web/" target="_blank">Visit Now</a>
                    <AiOutlineArrowRight style={{color:'#ed1047'}}/>
                </div>
            </div>

            <div className='card'>
                <div className='img-cont'>
                <img src="https://t3.ftcdn.net/jpg/03/75/73/46/360_F_375734648_3Vgq0Z3Qmp3FgKb3DWhvO5idVna48Ds2.jpg" alt="" />
                </div>
                <h3>Under repairs</h3>
                <div className='anc'>
                    <a href="#">Visit Now</a>
                    <AiOutlineArrowRight style={{color:'#ed1047'}}/>
                </div>
                
            </div>
        </div>
    </div>
    

    </div>
  )
}

export default Work