import React, { useEffect, useState } from 'react';
import Stusidebar from '../components/Stusidebar';
import axios from 'axios';

const Courses = () => {
    const [studentDetails, setStudentDetails] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const student = JSON.parse(localStorage.getItem('studentDetails'));
                const response = await axios.get(`http://localhost:5000/student/${student.student_id}`);
                setStudentDetails(response.data); // Set student details with the response data
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <Stusidebar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', flex: 1 }}>
                <div>
                    <h2>Courses</h2>
                </div>
                <div style={{ width: '100%', maxWidth: '300px', border: '15px solid green', padding: '50px', margin: '15px' }}>
                    {/* Make sure studentDetails is not null before accessing its properties */}
                    {studentDetails && <h2>Hello Mr. {studentDetails.name}</h2>}
                </div>
            </div>
            
        </div>
    );
};

export default Courses;
