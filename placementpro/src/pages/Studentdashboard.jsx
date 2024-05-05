import React, { useEffect, useState } from 'react';
import Stusidebar from '../components/Stusidebar';

const Studentdashboard = () => {
  // State to store student details and image data
  const [studentDetails, setStudentDetails] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Function to convert ArrayBuffer to base64
  const getImageSource = (imageData) => {
    const buffer = new Uint8Array(imageData.data);
    let binary = '';
    buffer.forEach(byte => {
      binary += String.fromCharCode(byte);
    });
    return `data:image/png;base64,${window.btoa(binary)}`;
  };

  // Effect to retrieve student details from localStorage when the component mounts
  useEffect(() => {
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      const parsedStudentDetails = JSON.parse(storedStudentDetails);
      setStudentDetails(parsedStudentDetails);
      
      if (parsedStudentDetails.image_data) {
        setImageSrc(getImageSource(parsedStudentDetails.image_data));
       
      }
    }
  }, []);
  if (!studentDetails) {
    return <div>Loading...</div>; // Render a loading indicator if studentDetails is null
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '640px',paddingTop:'20px'}}>
        {/* Place the heading */}
        <div>
          <h1 style={{ textAlign: 'center', color: 'blue' }}>Student Dashboard</h1>
        </div>

       
      
        {/* Place the image on the right */}
        <img src={imageSrc} alt='logo' style={{ width: '50px', marginLeft: '400px' ,borderRadius:'70%'}} />
        <h5 style={{paddingLeft:'10px'}}>{studentDetails.name}</h5>
      </div>
      <Stusidebar />
    </div>
  );
};

export default Studentdashboard;
