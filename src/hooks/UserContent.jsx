
import {createContext, useContext,useState,useEffect,  } from "react";



const UserContext = createContext({})

export const UserProvider = ({children }) => {
    const [userInfo, setUserInfo] = useState({}) 

     const putUserData = (userInfo) =>{
        setUserInfo(userInfo)

        localStorage.setItem('devburger:userData', JSON.stringify(userInfo))
     }

           const logout = ()=>{
            setUserInfo({})
            localStorage.removeItem('devburger:userData')
           }
                     useEffect(()=>{
                        const userInfoLocalStore = localStorage.getItem('devburger:userData')
                             
                        if(userInfoLocalStore){

                            setUserInfo(JSON.parse(userInfoLocalStore))

                        }
                     }, [])
    return(
        <UserContext.Provider value={{userInfo, putUserData, logout}}>
            {children} </UserContext.Provider>
    )
}
   export const useUser = () =>{
    const context = useContext(UserContext)

    if (!context){
        throw new Error('useUser must be a valid contex')
   }
   return context;
}