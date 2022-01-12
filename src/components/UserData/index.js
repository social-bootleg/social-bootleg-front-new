import BasicInfo from "../BasicInfo";
import Engamement from "../Engagement";
import React from "react";
import TopFans from "../TopFans";
import TopPosts from "../TopPosts";
import GhostFollowers from "../GhostFollowers";
import NavbarUserData from "../NavbarUserData";
import UnansweredComments from "../UnansweredComments";
import './style.scss'
import PostsStats from "../PostsStats";
const UserData = props => {
    return (
        <div className="container">
            <p className="report">Raport o Twoim koncie:</p>
            <BasicInfo />
            <NavbarUserData/>
            <Engamement />
            <PostsStats/>
            <TopPosts/>
            <TopFans/>
            <GhostFollowers />
            <UnansweredComments/>
        </div>

    );
}
export default UserData;