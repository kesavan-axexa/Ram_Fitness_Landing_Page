import React, { useEffect, useState } from "react";
import CreateAccount from "./CreateAccount";
import Login from "./Login";
import OTPVerification from "./OTPVerification";
import SwitchComponents from "../../../components/SwitchComponent/SwitchComponent";
import ForgotPassword from "./ForgotPassword";

const UserIndex = () => {
    const [activeComponent, setActiveComponent] = useState("Login");
    const [mode, setMode] = useState("");
    const [userLists, setUserLists] = useState([]);
    const [data, setData] = useState({});

    return (
        <div>
            <SwitchComponents active={activeComponent}>
                <CreateAccount
                    name="CreateAccount"
                    data={data}
                    setData={setData}
                    userLists={userLists}
                    setUserLists={setUserLists}
                    mode={mode}
                    setMode={setMode}
                    setActiveComponent={setActiveComponent}
                />
                <Login
                    name="Login"
                    data={data}
                    setData={setData}
                    mode={mode}
                    userLists={userLists}
                    setUserLists={setUserLists}
                    setMode={setMode}
                    setActiveComponent={setActiveComponent}
                />
                <OTPVerification
                    name="OTPVerification"
                    data={data}
                    setData={setData}
                    mode={mode}
                    userLists={userLists}
                    setUserLists={setUserLists}
                    setMode={setMode}
                    setActiveComponent={setActiveComponent}
                />
                <ForgotPassword
                    name="ForgotPassword"
                    data={data}
                    setData={setData}
                    mode={mode}
                    userLists={userLists}
                    setUserLists={setUserLists}
                    setMode={setMode}
                    setActiveComponent={setActiveComponent}
                />
            </SwitchComponents>
        </div>
    );
};

export default UserIndex;
