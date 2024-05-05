import React, { useEffect, useState } from 'react';
import Stusidebar from '../components/Stusidebar';
import axios from 'axios';

const Courses = () => {
    const [courses, setCourses] = useState([]); // State to store courses data

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const studentId = JSON.parse(localStorage.getItem('studentDetails')).student_id;
                console.log(studentId)
                const response = await axios.get(`https://localhost:5000/student/${studentId}`); // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
                
                // Update the state with the fetched data
                setCourses(response.data);
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
                    {courses.map(course => (
                        <li key={course.id}>{course.name}</li> // Adjust the property names based on your API response
                    ))}
                </ul>
            </div>
            <Stusidebar />
        </div>
    );
};

export default Courses;
