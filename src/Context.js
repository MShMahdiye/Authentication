import { createContext,useState } from "react";

export const authContext = createContext();

export function useAuth(){
  const [authed,setAuthed] = useState(false);
  return {
    authed,
    login(){
      return new Promise(
        (res) => {
          setAuthed(true);
          res();
        }
      )
    },
    logout(){
      new Promise(
        (res) => {
          setAuthed(false);
          res();
        }
      )
    }
  }
}

export default ({children}) => {
  const auth = useAuth();
  return(
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}