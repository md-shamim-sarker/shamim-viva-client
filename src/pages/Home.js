import React, {useContext} from 'react';
import {AuthContext} from '../contexts/UserContext';

const Home = () => {
    const {myName} = useContext(AuthContext);
    return (
        <div>
            Home page
            {myName}
        </div>
    );
};

export default Home;