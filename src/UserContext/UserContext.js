import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [hasToken, setHasToken] = useState(JSON.parse(localStorage.getItem('isToken')));
    return (
        <UserContext.Provider value={{ hasToken, setHasToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;