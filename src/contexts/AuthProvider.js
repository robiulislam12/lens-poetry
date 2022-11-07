import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    // declare state
    const [user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    


    // Provide all auth information
    const authInfo = {
        user,
        setUser,
        loading
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;