import { Dispatch, SetStateAction } from "react";

type Person ={
    user: String;
    setUser: Dispatch<SetStateAction<string>>
    handleClickOne: ()=> void
    // const handleClickOne: (value: string) => void
};

export  const User =({user , setUser , handleClickOne}: Person)=>{
    const handleClick=()=> {
        setUser("user")
    }
 
    return (
    <div>
    <div>{user}</div>
    <button onClick={handleClick} type="submit">click 1</button>
    <button onClick={handleClick} type="submit">click 2</button>
    </div>

    )
};