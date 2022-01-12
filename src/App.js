import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import "./app.scss";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import EnterUser from "./components/EnterUser";
import EnterTag from "./components/EnterTag";
import RelatedTags from "./components/RelatedTags";
import Search from "./components/Search";
import UserData from "./components/UserData";
import Navbar from "./components/Navbar";
import HashtagSearch from "./components/HashtagSearch";

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [tags, setTags] = useState(false);
  const [userData, setUserData] = useState(false);
  const [hashtagData, setHashtagData] = useState(false);
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
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  // Search
  const search = async(term) => {
    await sleep(2000);
    setUserData(true);
  };

   // Tag search
   const tagSearch = async(term) => {
     await sleep(2000);
    setHashtagData(true);
  };


  // // Fetch Users
  // const fetchUsers = async () => {
  //   setLoading(true);

  //   try {
  //     await getUsers().then(({ data }) => {
  //       setSavedUsers(data.data);
  //       dispatch({ type: "SET_USERS", data: data.data });
  //     });
  //   } catch (err) {
  //     MySwal.fire({
  //       icon: "error",
  //       title: "Failed to fetch users."
  //     });
  //   } finally {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 500);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <div className="app">
      <Navbar/>
      <Header />
      <main className="content">
        <div className="container">
          <div className="content-wrapper" id="section1" >
            <Search search={search}/>
          <div >
          {
            userData ? (<UserData />) : (<EnterUser />)
          }
          </div>
          </div>
          <div className="content-wrapper" id="section2">
          <HashtagSearch search={tagSearch}/>
          {
            hashtagData ? (<RelatedTags/>) : (<EnterTag/>)
          }
          </div>
        </div>
      </main>
      )
      <Footer />
    </div>
  );
}

export default App;
