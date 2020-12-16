import react from 'react';

const Alert = props=>{

    return(
        <div className={`alert ${props.message.msgError ? "alert-danger" : "alert-primary"} text-center`} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Alert;