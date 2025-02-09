import React from "react";

const UsersList = props =>{
    const users = props.all_users.map(({id, name})=>{
        // returning each user from list
        return <ul>
                  <li key={id}>{name}</li>
                </ul>
    })
    // returning all users with one ul and li element for every one
    return <div>{users}</div>
}

export default UsersList;