import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(true)
  const [isSchool, setIsSchool] = useState(true)
  const [loginName, setLoginName] = useState('')
  return(
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        isSignup,
        setIsSignup,
        isSchool,
        setIsSchool,
        loginName,
        setLoginName,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider