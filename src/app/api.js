import axios from "axios";
import engagement from './json/engagement.json'
const apiURL = "http://localhost:5000/"
const useJson = true;

function getUsers() {
  const response = axios.get(`${apiURL}/users`);

  return response;
}
function getEngagement(user){
  return engagement;
  if (useJson){
   return "{\"comments\":\"109\",\"engagement\":\"10.16\",\"likes\":\"3063\"}";
  }
  else{
    return axios.post(`${apiURL}/users`, {username : user})
  }
}
function getCreatedUser({ first_name, last_name, email }) {
  const response = axios.post(`${apiURL}/users`, {
    email,
    first_name,
    last_name
  });

  return response;
}

function getUpdatedUser(id, user) {
  const response = axios.put(`${apiURL}/users/${id}`, {
    avatar: user.avatar,
    id: id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  });

  return response;
}

function getDeletedUser(id) {
  const response = axios.delete(`${apiURL}/users/${id}`);

  return response;
}

export { getEngagement, getUsers, getCreatedUser, getUpdatedUser, getDeletedUser };
