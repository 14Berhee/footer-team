import {User} from "../Components/User"
import { useState } from "react"
import Footer from "../Components/Footer"

export default function Home() {

  const [user , setUser] =useState<string>("")

  const handleClickOne =()=>{
    setUser("name")
  };

  return (
    <div >
    <div>
     <User user={user} setUser={setUser} 
     handleClickOne={handleClickOne}/> 
    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}
