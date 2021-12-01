import { React, useState } from 'react';
import { AdminHeader } from './AdminHeader';
import { AdminMenu } from './AdminMenu';
import axios from 'axios';

const AdminContestForm = () => {
    const initContestData = {
        title: "",
        type: "DSA",
        deadline: "",
        tags: [],
        time: "",
    };

    const [contestData, setContestData] = useState(initContestData);

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "selecttype") {
            setContestData({ ...contestData, type: value });
        } else {
            setContestData({ ...contestData, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contestData);
        axios.post('http://localhost:2345/contests/', contestData)
            .then((res) => console.log(res));
        setContestData(initContestData);
    }

    return (
        <>
            <AdminHeader />
            <div className="dashboard-body">
                <AdminMenu />
                <div className="formDiv">
                    <form className="studentForm" onSubmit={handleSubmit}>
                        <label>
                            <div>Title</div>
                            <input onChange={handleChange} name="title" type="text" value={contestData.title} />
                        </label>
                        <label>
                            <div>Type</div>
                            <select name="selecttype" onChange={handleChange} value={contestData.type} >
                                <option>Select</option>
                                <option>DSA</option>
                                <option>Coding</option>
                            </select>
                        </label>
                        <label>
                            <div>Time</div>
                            <input onChange={handleChange} name="time" type="datetime-local" value={contestData.time} />
                        </label>
                        <label>
                            <div>Deadline</div>
                            <input onChange={handleChange} name="deadline" type="datetime-local" value={contestData.deadline} />
                        </label>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export { AdminContestForm };