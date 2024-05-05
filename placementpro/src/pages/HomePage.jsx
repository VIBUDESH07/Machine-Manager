import React from 'react'
import SideBar from '../components/Sidebar'
import zogo from "../components/assets/zogo_logo.png"
import google from "../components/assets/google_logo.png";
import amazon from "../components/assets/amazon_logo.png";
import flipkart from "../components/assets/flipkart_logo.png"
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='home-container'>
         <SideBar />
        
         <div className="container">
      <div className="company">
        <div className="img-field">
          <img src={zogo} alt="Zogo Logo" />
        </div>
        <div className="content-field">
          <h3>Zogo</h3>
          <p>Zogo is a cutting-edge tech company specializing in AI-driven solutions for businesses worldwide.</p>
        </div>
      </div>
      <div className="company">
        <div className="img-field">
          <img src={google} alt="Google Logo" />
        </div>
        <div className="content-field">
          <h3>Google</h3>
          <p>Google is a multinational technology company that specializes in internet-related services and products.</p>
        </div>
      </div>
      <div className="company">
        <div className="img-field">
          <img src={amazon} alt="Amazon Logo" />
        </div>
        <div className="content-field">
          <h3>Amazon</h3>
          <p>Amazon is the world's largest online marketplace and cloud computing platform, offering a wide range of services.</p>
        </div>
      </div>
      <div className="company">
        <div className="img-field">
          <img src={flipkart} alt="Flipkart Logo" />
        </div>
        <div className="content-field">
          <h3>Flipkart</h3>
          <p>Flipkart is an Indian e-commerce company, offering a vast selection of products and services to customers.</p>
        </div>
      </div>
      <div className="company">
        <div className="img-field">
          <img src={amazon} alt="Example Logo" />
        </div>
        <div className="content-field">
          <h3>Example Company</h3>
          <p>This is an example company providing innovative solutions in the field of IT and software development.</p>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default HomePage
