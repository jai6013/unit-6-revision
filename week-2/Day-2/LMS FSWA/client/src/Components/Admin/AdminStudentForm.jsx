import { React, useState } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminMenu } from './AdminMenu';
import axios from 'axios';

const AdminStudentForm = () => {
    const initStudentData = {
        name: "",
        city: "",
        age: "",
        gender: "male",
        education: "",
        contact: ""
    };

    const [studentData, setStudentData] = useState(initStudentData);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "selectedu") {
            setStudentData({ ...studentData, education: value });
        } else if (name === "selectgender") {
            setStudentData({ ...studentData, gender: value });
        } else {
            setStudentData({ ...studentData, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(studentData);
        axios.post('http://localhost:2345/students/', {
            name: studentData.name,
            city: studentData.city,
            age: studentData.age,
            gender: studentData.gender,
            education: studentData.education,
            contactNo: studentData.contact
        })
        .then((res) => console.log(res.data));
        setStudentData(initStudentData)
    }

    return (
        <>
            <AdminHeader />
            <div className="dashboard-body">
                <AdminMenu />
                <div className="formDiv">
                    <form className="studentForm" onSubmit={handleSubmit}>
                        <label>
                            <div>Name</div>
                            <input onChange={handleChange} name="name" type="text" value={studentData.name} required />
                        </label>
                        <label>
                            <div>City</div>
                            <input onChange={handleChange} name="city" type="text" value={studentData.city} required />
                        </label>
                        <label>
                            <div>Age</div>
                            <input onChange={handleChange} name="age" type="number" value={studentData.age} required />
                        </label>
                        <label>
                            <div>Gender</div>
                            <select name="selectgender" onChange={handleChange} value={studentData.gender} required >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </label>
                        <label>
                            <div>Education</div>
                            <select name="selectedu" onChange={handleChange} value={studentData.education} required >
                                <option name="default">Select</option>
                                <option name="graduate">Graduate</option>
                                <option name="postgraduate">Post Graduate</option>
                                <option name="highschool">High School</option>
                                <option name="phd">PHD</option>
                                <option name="others">Others</option>
                            </select>
                        </label>
                        <label>
                            <div>Contact</div>
                            <input onChange={handleChange} name="contact" type="number" value={studentData.contact} required/>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export { AdminStudentForm };