import BasicInfo from "../BasicInfo";
import Engamement from "../Engagement";
import React from "react";
import TopFans from "../TopFans";
import TopPosts from "../TopPosts";
import GhostFollowers from "../GhostFollowers";
import NavbarUserData from "../NavbarUserData";
import UnansweredComments from "../UnansweredComments";
const UserData = props => {
    return (
        <div className="container">
            <BasicInfo />
            <NavbarUserData/>
            <Engamement />
            <TopPosts/>
            <TopFans/>
            <GhostFollowers />
            <UnansweredComments/>
        </div>

    );
}
export default UserData;