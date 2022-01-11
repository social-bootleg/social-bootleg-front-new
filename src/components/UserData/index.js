import BasicInfo from "../BasicInfo";
import Engamement from "../Engagement";
import React from "react";
import GhostFollowers from "../GhostFollowers";
import NavbarUserData from "../NavbarUserData";
const UserData = props => {
    return (
        <div className="container">
            <BasicInfo />
            <NavbarUserData/>
            <Engamement />
            <GhostFollowers />
        </div>

    );
}
export default UserData;