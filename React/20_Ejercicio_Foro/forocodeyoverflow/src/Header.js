import React from "react";

const Header = (props) => {
    return (
        <>
            <img src={props.profileImg} alt="img"></img>
            <h1>{props.username}</h1>
        </>
    );
};

export default Header;
