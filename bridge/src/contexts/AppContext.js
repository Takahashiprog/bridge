import { createContext, useState } from "react";

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false)
  const [isSignup, setIsSignup] = useState(true)
  const [isSchool, setisSchool] = useState(false)
  const [loginName, setLoginName] = useState('')
  return(
    <AppContext.Provider
      value={{
        isLogin,
        isSignup,
        isSchool,
        loginName,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider