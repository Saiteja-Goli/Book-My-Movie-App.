import React, { useState } from 'react'
import Store from './myContext'

const MyProvider = ({ children }) => {
    const [gData, setgData] = useState("");
    const [data, setData] = useState(true);
    const [email, setEmail] = useState("");
    return (
        <Store.Provider value={{ gData, setgData, data, setData, email, setEmail }}>
            {children}
        </Store.Provider>
    )
}

export default MyProvider