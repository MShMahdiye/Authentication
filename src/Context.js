import { createContext,useState } from "react";

export const authContext = createContext();

// export function useAuth(){
//   const [authed, setAuthed] = useState(false);
  
//   return {

//   }
// }

export default ({ children }) => {
  const [authed, setAuthed] = useState(false);
  
  const auth = {
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
  
  return(
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}