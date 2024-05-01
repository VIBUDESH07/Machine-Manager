import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="footer">
        <h2>Questions? Call 000-000-000</h2>
        <div class="row">
          <div class="col">
            <a href="#">FAQ</a>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
          <div class="col">
            <a href="#">Help Center</a>
            <a href="#">Jobs</a>
            <a href="#">Cookies Policy</a>
            <a href="#">Contact Us</a>
          </div>
          <div class="col">
            <a href="#">My Account</a>
            <a href="#">Find Service Centers</a>
            <a href="#">Vehicle Maintenance Tips</a>
          </div>
        </div>
        {/* <button class="language-btn">
          English <img src="images/down-icon.png" alt="Language Options" />
        </button> */}
        <p class="copy-text">&copy;KEC Vehicle Maintenance Website</p>
      </div>
  )
}

export default Footer