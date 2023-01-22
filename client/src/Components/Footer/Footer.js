import React from 'react'
import './Footer.scss'
import { BsFillSuitHeartFill } from 'react-icons/bs';
function Footer() {
  return (
    <>
      <footer className='Footer'>
        <div className='mainDiv'>
          <p>

            Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <BsFillSuitHeartFill /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
        </div>
      </footer>


    </>
  )
}

export default Footer