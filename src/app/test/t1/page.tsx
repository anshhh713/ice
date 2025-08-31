"use client";
import { useEffect, useState } from "react";
export default function Test(){
    const [msg, setMsg] = useState("");
    useEffect(() => {
        fetch("/api/users/test/t1")
        .then((res) => res.json())
        .then((data) => setMsg(data.message));
    }, []);
    return (
        <>
        <div className="w-screen h-screen border-black border-2 bg-red-200 flex items-center justify-center">
            {msg}
        <div className="border-2 border-black w-64 h-64 p-4 m-4 text-center flex items-center justify-center bg-white">
            box
        </div>
        </div>
        </>
    )
}
