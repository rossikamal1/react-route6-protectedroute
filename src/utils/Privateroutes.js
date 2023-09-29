import { Outlet, Navigate } from 'react-router-dom'
const Privateroutes = () => {
    let auth = {'token':false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/firstpage"/>
    )
}

export default Privateroutes