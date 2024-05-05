import React, { useEffect, useState } from 'react';
import Stusidebar from '../components/Stusidebar';
import axios from 'axios';

const Courses = () => {
    // State to store courses data

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const studentId = JSON.parse(localStorage.getItem('studentDetails')).student_id;
                const response = await axios.get(`http://localhost:5000/student/${studentId}`); 
               
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        // Call the fetchStudentData function when the component mounts
        fetchStudentData();
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div>
           
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '640px',paddingTop:'20px'}}>
                {/* Render the fetched courses data */}
                <h2>Courses</h2>
                <ul>
                   
                </ul>
            </div>
            <Stusidebar />
        </div>
    );
};

export default Courses;
