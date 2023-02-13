import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin,BsTwitter } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer-cont' id='c'>
        <h1 style={{textAlign:'center', fontSize:'50px'}}>Contact</h1>
        <div className='info'>
            <h1 className='free'>Fell free to contact me:</h1>
            <a href = "mailto:alotaibiabdulrhman1@gmail.com">alotaibiabdulrhman1@gmail.com</a>

            <div className='info-icon'>
                <a href="https://github.com/Abdul1rhman" target="_blank"><BsGithub /></a>
                <a href="#"><BsLinkedin /></a>
                <a href="#"><BsTwitter /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer