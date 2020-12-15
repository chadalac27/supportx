import React, {useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {AuthContext} from '../Context/AuthContext';

const UnPrivateRoute = ({component: Componenet, ...rest}) => {
    const { isAuthenticated} = useContext(AuthContext);
    //console.log("UnPrivateRoute is authenticated", isAuthenticated);
    return(
        <Route {...rest} render={props => {
            if(isAuthenticated){
                return <Redirect to={{  pathname: '/dashboard', 
                                        state: {from: props.location}}}/>
            }

            return <Componenet {...props}/>
        }}/>
    )
}

export default UnPrivateRoute;