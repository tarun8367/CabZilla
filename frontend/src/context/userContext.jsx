import React, { createContext } from 'react'

import { useState } from 'react'

export const userDataContext = createContext()

const userContext = ({children}) => {

    const [user, setUser] = useState({
        fullName: { firstName: "", lastName: "" },
        email: "",
        password: "",   
    });
  return (
    <div>
        <userDataContext.Provider value={[user, setUser]}>
        {children}
        </userDataContext.Provider>
    </div>
  )
}

export default userContext
