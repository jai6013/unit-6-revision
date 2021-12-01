import { React, useEffect, useState } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminMenu } from './AdminMenu';
import axios from 'axios';
import { format } from 'timeago.js';

const AdminContest = () => {

    const [contestsArr, setContestsArr] = useState("");

    const getData = () => {
        axios.get("http://localhost:2345/contests/")
            .then((res) => setContestsArr(res.data));
    }

    useEffect(() => {
        getData()
    }, []);

    const handleDelete = (id) => {
        console.log(id, "clicked")
        axios.delete(`http://localhost:2345/contests/${id}`)
            .then((res) => setContestsArr(res.data))
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
                            <th>Title</th>
                            <th>Type</th>
                            <th>Time</th>
                            <th>Deadline</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {contestsArr && contestsArr.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.type}</td>
                                        <td className="title">{format(item.time)}</td>
                                        <td className="title">{format(item.deadline)}</td>
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

export { AdminContest };