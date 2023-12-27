import React,{ useState } from "react";
import Navbar from "../layout/Navbar";
import useLocalStorage from "use-local-storage"


const Dashboard = () => {

  
    const preferencia = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isdark, setisdark] = useLocalStorage("isdark", preferencia);


    return (
        <div>
            < Navbar isdark={isdark} setisdark={setisdark}/>
            <h1>Este é o dashboard</h1>
        </div>
    )
}

export default Dashboard