import {createContext,useState} from 'react';

export const Context=createContext();
export const AppContext=({children})=>{
const[imageSearch,setImageSearch]=useState(false);
const value={
    imageSearch,
    setImageSearch
}
return(
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
)
}