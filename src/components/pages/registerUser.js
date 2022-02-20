import React from "react";

import NewUserForm from "../forms/newUserForm";


function RegisterUser() {
    const isAdmin = sessionStorage.getItem("isAdmin");

    return (
        <div>
            {isAdmin === 'true' ? 
                <h1 className="page-title">User Manager</h1> && <NewUserForm /> 
                : 
                <div className="sorry-msg">Sorry. You must login as an administrator to view this page.</div>}
            
        </div>
    );
}

export default RegisterUser;