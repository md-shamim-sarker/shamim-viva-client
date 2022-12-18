import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [dark, setDark] = useState(false);
    const authInfo = {
        toggle,
        setToggle,
        dark,
        setDark
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;