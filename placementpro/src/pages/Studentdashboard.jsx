import React, { useEffect, useState } from 'react';
import Stusidebar from '../components/Stusidebar';

const Studentdashboard = () => {
  // State to store student details and image data
  const [studentDetails, setStudentDetails] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Effect to retrieve student details from localStorage when the component mounts
  useEffect(() => {
    const storedStudentDetails = localStorage.getItem('studentDetails');
    if (storedStudentDetails) {
      const parsedStudentDetails = JSON.parse(storedStudentDetails);
      setStudentDetails(parsedStudentDetails);
      console.log(parsedStudentDetails.image_data)
      if (parsedStudentDetails.image_data) {
        setImageSrc(getImageSource(parsedStudentDetails.image_data));
        console.log(imageSrc)
      }
    }
  }, []);

  // Function to convert ArrayBuffer to base64
  const getImageSource = (imageData) => {
    const buffer = new Uint8Array(imageData.data);
    let binary = '';
    buffer.forEach(byte => {
      binary += String.fromCharCode(byte);
    });
    return `data:image/png;base64,${window.btoa(binary)}`;
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '640px' }}>
        {/* Place the heading */}
        <div>
          <h1 style={{ textAlign: 'center', color: 'blue' }}>Student Dashboard</h1>
        </div>

        {/* Render student details */}
        {studentDetails && (
          <div>
            <p>Name: {studentDetails.name}</p>
            <p>Email: {studentDetails.student_mail}</p>
            {/* Display the image */}
            {imageSrc && <img src={imageSrc} alt="Student" style={{ width: '100px' }} />}
            {/* Add more details as needed */}
          </div>
        )}
      
        {/* Place the image on the right */}
        <img src='' alt='logo' style={{ width: '100px', marginLeft: '400px' }} />
      </div>
      <Stusidebar />
    </div>
  );
};

export default Studentdashboard;
