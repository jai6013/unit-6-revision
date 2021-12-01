import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
    const initState = {
        username: "",
        password: "",
        role: "student"
    }

    const [userData, setUserData] = useState(initState);

    const handleInput = (e) => {
        let { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSignin = (e) => {
        e.preventDefault()
        console.log(userData);
        axios.post("http://localhost:2345/users/signin", userData)
        .then((res) => {
            console.log(res.data)
            if(res.data === "admintoken"){
                navigate("/admin")  
            
            }else{
                navigate("/user")
            }
        })
    }
    return (
        <>
        
            <div className="signin-container">
                <div className="signin-box">
                    <div className="siginin-title">Sign In</div>
                    <form onSubmit = {handleSignin}>
                    <input type="text" name="username" onChange={handleInput} placeholder="Enter Username" />
                    <select name = "role" onChange={handleInput}>
                        <option selected>Student</option>
                        <option>admin</option>
                    </select>
                    <input type="password" name="password" onChange={handleInput} placeholder="Enter Password" />
                    <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export { SignIn };