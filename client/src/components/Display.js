import React from "react";
// import axios from "axios";
import {FetchData} from "./FetchData";

export class Display extends React.Component {
    render() {
        return (
             <div>
                <h1>Players:</h1>
                <FetchData/>
             </div>
        );
    }
}