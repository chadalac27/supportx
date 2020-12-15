import React, {useState, useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import API from '../utils/API';

const OpenAPI = (props) => {

    let {companyID, ticketID} =useParams();
    let [jsonState,setJsonState] = React.useState();

    useEffect(() => {
        CreateNewTicket();
        //return () => clearInterval(interval);
      }, []);

    function CreateNewTicket()
    {
        console.log(`${window.location.origin.toString()}/whateverRoute/`);
        console.log("Trying to Create New Ticket");
        if(companyID)
        {
            console.log("We have a companyID!");
            API.getCompanyByID(companyID)
            .then((res)=> {
                console.log("OpenAPI/CreateNewTicket:res",res);
                setJsonState(JSON.stringify(res.data));
            })
        }
    }

    return(
    <code> {jsonState}</code>
    )
};

export default OpenAPI;