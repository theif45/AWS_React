import React from "react";

function UserInfo({ username, name, email }) {
    const style = {
        marginBottom: "15px",
        padding: "20px",
        border: "1px solid #dbdbdb",
    }

    return(
        <div style={style}>
            <input type="text" value={username}/>
            <input type="text" value={name}/>
            <input type="text" value={email}/>
        </div>
    );
}

UserInfo.defaultProps = {
    username: "빈값",
    name: "빈값",
    email: "빈값"
}

export default UserInfo;