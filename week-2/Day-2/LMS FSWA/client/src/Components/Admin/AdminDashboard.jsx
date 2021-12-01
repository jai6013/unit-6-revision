import { React, useEffect, useState } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminMenu } from './AdminMenu';
import axios from 'axios';

const AdminDashboard = () => {

    const [studentsArr, setStudentsArr] = useState("");
    const [nameMenu, setNameMenu] = useState(false);
    const [ageMenu, setAgeMenu] = useState(false);

    const getData = () => {
        axios.get("http://localhost:2345/students")
            .then((res) => setStudentsArr(res.data));
    }

    useEffect(() => {
        getData()
    }, []);

    const handleDelete = (id) => {
        console.log(id, "clicked")
        axios.delete(`http://localhost:2345/students/${id}`)
            .then((res) => setStudentsArr(res.data))
    }

    const handleName = (name) => {
        console.log("clicked", name);
        if (name === 'default') {
            getData();
        } else if (name === 'asc') {
            axios.get("http://localhost:2345/students/sortasc")
                .then((res) => setStudentsArr(res.data));
        } else if (name === 'desc') {
            axios.get(`http://localhost:2345/students/sortdsc`)
            .then((res) => setStudentsArr(res.data))
        }
    }

    const handleAge = (name) => {
        if (name === 'default') {
            getData();
        } else if (name === 'asc') {
            console.log("haage")
            axios.get("http://localhost:2345/students/agesortasc")
                .then((res) => setStudentsArr(res.data));
        } else if (name === 'desc') {
            axios.get("http://localhost:2345/students/agesortdsc")
                .then((res) => setStudentsArr(res.data))
        }
    }

    return (
        <>
            <AdminHeader />
            <div className="dashboard-body">
                <AdminMenu />
                <div className="table-area">
                    <table className="student-table">
                        <thead>
                            <th>ID</th>
                            <th onClick={() => { setAgeMenu(false); setNameMenu(!nameMenu)}}>
                                <div className="extraMenu">Name</div>
                                {
                                    nameMenu
                                        ? <div className="miniMenu">
                                            <div name="default" onClick={() => handleName("default")}>Default</div>
                                            <div name="asc" onClick={() => handleName("asc")}>Ascending</div>
                                            <div name="desc" onClick={() => handleName("desc")}>Descending</div>
                                            <div onClick={() => setNameMenu(!nameMenu)}>Close</div>
                                        </div>
                                        : null
                                }
                            </th>
                            <th>City</th>
                            <th onClick={() => { setNameMenu(false); setAgeMenu(!ageMenu)}}>
                                <div className="extraMenu">Age</div>
                                {
                                    ageMenu
                                        ? <div className="miniMenu">
                                            <div name="default" onClick={() => handleAge("default")}>Default</div>
                                            <div name="asc" onClick={() => handleAge("asc")}>Ascending</div>
                                            <div name="desc" onClick={() => handleAge("desc")}>Descending</div>
                                            <div onClick={() => { setNameMenu(false); setAgeMenu(!ageMenu) }}>Close</div>
                                        </div>
                                        : null
                                }
                            </th>
                            <th>Education</th>
                            <th>Gender</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {studentsArr && studentsArr.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>{item.city}</td>
                                        <td>{item.age}</td>
                                        <td>{item.education}</td>
                                        <td className="title">{item.gender}</td>
                                        <td>{item.contactNo}</td>
                                        <td>
                                            <button className="deleteBtn" onClick={() => handleDelete(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export { AdminDashboard };