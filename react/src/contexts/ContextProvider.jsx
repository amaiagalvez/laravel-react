import { createContext, useContext, useState } from "react";
import hand from '../assets/hand.jpg'

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  setCurrentUser: () => { },
  setUserToken: () => { }
})

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Amaia Galvez',
    email: 'amaiagalvez@hotmail.com',
    imageUrl: hand,
  })

  const [userToken, setUserToken] = useState(null)

  return (
    <StateContext.Provider value={{
      currentUser,
      setCurrentUser,
      userToken,
      setUserToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const userStateContext = () => useContext(StateContext)