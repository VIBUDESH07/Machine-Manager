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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
            {/* Left column */}
            <div style={{ backgroundColor: 'lightblue',height:'200px' ,padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2>Courses</h2>
                </div>
                
            </div>
            {/* Right column */}
            <div style={{ backgroundColor: 'greenyellow', padding: '20px' }}>
                {/* Make sure studentDetails is not null before accessing its properties */}
                {studentDetails && <h2>Hello Mr. {studentDetails.name}</h2>}
            </div>
            <div>
                Hello
            </div>
            
        </div>
    );
};

export default Courses;
