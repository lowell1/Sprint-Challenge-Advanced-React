import React, {useState} from "react";
import {useFetchData} from "../hooks/useFetchData";

export const FetchData = () => {
    const [state, setState] = useState({data: []});
    
    // setState(useFetchData("http://localhost:5000/api/players"));


    // if(!state.data)
    //     return <></>;

    // console.log(state.data);
    // const data = useFetchData("http://localhost:5000/api/players");
    return (
        useFetchData("http://localhost:5000/api/players")
        .map(pl => {
            return (
                <div key={pl.id}>
                    <p>Name: {pl.name}</p>
                    <p>Country: {pl.country}</p>
                    <br/>
                </div>
            )
        })
    );
}