import React, { createContext } from 'react'

import { useState } from 'react'

export const userDataContext = createContext()

const UserContext = ({children}) => {

    const [user, setUser] = useState({
        fullName: { firstName: "", lastName: "" },
        email: ""
    });
  return (
    <div>
        <userDataContext.Provider value={{user, setUser}}>
        {children}
        </userDataContext.Provider>
    </div>
  )
}

export default UserContext
