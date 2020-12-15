import react from 'react';


const getStyle = (props) => {
    let baseClass = "alert";
    if(props.message.msgError)
    baseClass = baseClass + "alert-danger"
    else
    baseClass = baseClass + "alert-primary"
    return baseClass + " text-center";
}

const Alert = props=>{

    return(
        <div className={getStyle} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Alert;