import { React, useEffect, useState } from 'react';
import { StudentHeader } from './StudentHeader';
import axios from 'axios';
import { format } from 'timeago.js';

const StudentDashboard = () => {

    const [contestsArr, setContestsArr] = useState("");
    const [typeMenu, setTypeMenu] = useState(false);

    const getData = () => {
        axios.get("http://localhost:2345/contests/")
            .then((res) => setContestsArr(res.data));
    }

    useEffect(() => {
        getData()
    }, []);

    const handleName = (name) => {
        console.log("clicked", name);
        if (name === 'default') {
            getData();
        } else if (name === 'code') {
            axios.get(`http://localhost:2345/students/?sort/`)
                .then((res) => console.log(res));
        } else if (name === 'dsa') {
            axios.get(`http://localhost:2345/students`)
                .then((res) => setContestsArr(res.data))
        }
    }

    return (
        <>
            <StudentHeader />
            <div className="student-dashboard-body">
                <div className="table-area">
                    <table className="student-table">
                        <thead>
                            <th>ID</th>
                            <th>Title</th>
                            <th onClick={() => { setTypeMenu(!typeMenu) }}>
                                <div className="extraMenu">Type</div>
                                {
                                    typeMenu
                                        ? <div className="miniMenu">
                                            <div name="all" onClick={() => handleName("all")}>All</div>
                                            <div name="code" onClick={() => handleName("code")}>Coding</div>
                                            <div name="dsa" onClick={() => handleName("dsa")}>DSA</div>
                                            <div onClick={() => setTypeMenu(!typeMenu)}>Close</div>
                                        </div>
                                        : null
                                }
                            </th>
                            <th>Time</th>
                            <th>Deadline</th>
                        </thead>
                        <tbody>
                            {contestsArr && contestsArr.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.type}</td>
                                        <td>{format(item.time)}</td>
                                        <td>{format(item.deadline)}</td>
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

export { StudentDashboard };