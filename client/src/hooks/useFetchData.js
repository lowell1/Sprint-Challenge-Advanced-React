import {useEffect, useState} from "react";
import axios from "axios";

export const useFetchData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(url)
        .then(resp => {
            setData(resp.data);
            console.log("data - ", resp.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[url]);


    return data;
};