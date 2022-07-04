import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";



const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <div>
             <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/"></a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </Navbar>
            
            <br />
            <br />
            {props.children}
        </div>
    );
}

export default PageLayout;