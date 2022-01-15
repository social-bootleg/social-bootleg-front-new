import axios from "axios";
import engagementJSON from './json/engagement.json'
import { Config } from "../constants/constants";
const { apiURL, endpoints: { engagement } } = Config;

function getUsers() {
  const response = axios.get(`${apiURL}/users`);

  return response;
}

async function getEngagement(user) {
  try {
    const { data } = await axios.post(`${apiURL}${engagement}`, JSON.stringify({ username: user }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    data.engagement = (+data.engagement).toFixed(2);
    return data;
  } catch (error) {
    console.error(`${getEngagement.name} error: ${error}`)
    return engagementJSON;
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
