import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUsers,
  getCreatedUser,
  getUpdatedUser,
  getDeletedUser
} from "./app/api";

// Styles
import "./app.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Engamement from "./components/Engagement";
import EnterUser from "./components/EnterUser";
import DataTable from "./components/DataTable";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import Modal from "./components/Modal";
import Search from "./components/Search";
import Loader from "./components/Loader";
import MySwal from "./index";
import UserData from "./components/UserData";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [tags, setTags] = useState(false);
  const [userData, setUserData] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    avatar: null,
    first_name: "",
    last_name: "",
    email: ""
  });
  const [activeModal, setActiveModal] = useState({ name: "", active: false });
  const [savedUsers, setSavedUsers] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [sorted, setSorted] = useState(false);
  const useJson = true;

  // Setting up Modal
  const setModal = modal => {
    search("");
    setActiveModal({ name: modal, active: true });
  };

  // Search
  const search = term => {
    setUserData(true);

    // if (term.length > 2) {
    //   setCurrentPage(1);

    //   const results = savedUsers.filter(user =>
    //     Object.keys(user).some(key =>
    //       user[key]
    //         .toString()
    //         .toLowerCase()
    //         .includes(term.toString().toLowerCase())
    //     )
    //   );

    //   dispatch({ type: "SET_USERS", data: results });
    // } else if (!term.length) {
    //   dispatch({ type: "SET_USERS", data: savedUsers });
    // }
  };

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true);

    try {
      await getUsers().then(({ data }) => {
        setSavedUsers(data.data);
        dispatch({ type: "SET_USERS", data: data.data });
      });
    } catch (err) {
      MySwal.fire({
        icon: "error",
        title: "Failed to fetch users."
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app">
      <Navbar/>
      <Header />
      <main className="content">
        <div className="container">
          <div className="content-wrapper">
            <Search search={search}/>
          </div>
          <div id="section1">
          {
            userData ? (<UserData />) : (<EnterUser />)
          }
          </div>
          <Search search={search} resetSearch={search} />
        </div>
      </main>
      )
      <Footer />
    </div>
  );
}

export default App;
