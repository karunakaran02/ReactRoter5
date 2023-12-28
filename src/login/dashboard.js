import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { UserName, Password} from "../services/action"

export const DashBoard = () => {
    
    const [userState, setUserState] = useState('')
    const [passwordState, setPasswordState] = useState('')
    const [confirmState, setConfirmState] = useState('')
   
    const dispatch = useDispatch()
    let navigate = useHistory();

    const handleUsername = (e) => {
        dispatch(UserName(e))
        setUserState(e)
    }

    const handlePassword = (e) => {
        dispatch(Password(e))
        setPasswordState(e)
    }

    const handleConfirmPassword = (e) => {
        setConfirmState(e)
    }

    const handleSubmit = () => {
        if ((passwordState === confirmState) && (userState !== "")) {
            navigate.push('/')
        }
        else if (userState === "") {
            alert('Please Enter a Username')
        }
        else {
            alert('Please Make a Same Password')
        }
    }

    return (
        <div>
            <div>
                <h1 style={{ color: 'white' }}>Reset Password</h1>
            </div>
            <div>
                <label style={{ color: 'white' }}>username :</label>
                <input id="dashBoardTextField" onChange={(e) => handleUsername(e.target.value)} type="text" placeholder="Username" />
            </div>
            <div>
                <label style={{ color: 'white' }}>Password :</label>
                <input id="dashBoardPasswordField" onChange={(e) => handlePassword(e.target.value)} type='password' placeholder="Password" />
            </div>
            <div>
                <label style={{ color: 'white' }}>Confirm password :</label>
                <input id="dashboardConfirmField" onChange={(e) => handleConfirmPassword(e.target.value)} type='password' placeholder="Confirm Password" />
            </div>
            <div id="dashBoardButtonField">
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}