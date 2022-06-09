import { Search } from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

export default function(){
    const [filterEvents,setfilterEvents]=useState([]);
    useEffect(()=>{
        //setfilterEvents(events);
    },[])
    const SearchText="";
    SearchEvent=(text)=>{
        SearchText=text;//!
        if(text=="")
         setfilterEvents([...events]);
         else
         setfilterEvents(event.filter(e=>e.name.includes(text)).remove);
    }
    return(
        <>
        <h1>Search</h1>
        <form>
        <input type="search" placeholder="שם אולם" onChange={(e)=>{SearchEvent(e.target.value)}}/>      
        <select >
            <option>50 איש</option>
            <option>100 איש</option>
            <option>200 איש</option>
        </select>
        </form>
        </>
    )
} 