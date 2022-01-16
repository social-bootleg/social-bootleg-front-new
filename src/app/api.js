import axios from "axios";
import engagementJSON from './json/engagement.json'
import postsStatsJSON from './json/posts_stats.json'
import mostLikedPostsJSON from './json/mostlikedposts.json'
import topFansJSON from './json/top_fans.json'
import ghostFollowersJSON from './json/ghost_followers.json'
import { Config } from "../constants/constants";
const { apiURL, endpoints: { engagement, postStats, mostLikedPosts, topFans, ghostFollowers } } = Config;

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

const getPostsStats = async (user) => {
  try {
    const { data } = await axios.post(
      `${apiURL}${postStats}`,
      JSON.stringify({ username: user }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    return data;
  } catch (error) {
    console.error(`${getPostsStats.name} error: ${error}`)
    return postsStatsJSON;
  }
}

const getMostLikedPosts = async (user) => {
  try {
    const { data } = await axios.post(
      `${apiURL}${mostLikedPosts}`,
      JSON.stringify({ username: user }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    return data;
  } catch (error) {
    console.error(`${getMostLikedPosts.name} error: ${error}`)
    return mostLikedPostsJSON;
  }
}

const getTopFans = async (user) => {
  try {
    const { data } = await axios.post(
      `${apiURL}${topFans}`,
      JSON.stringify({ username: user }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    return data;
  } catch (error) {
    console.error(`${getTopFans.name} error: ${error}`)
    return topFansJSON;
  }
}

const getGhostFollowers = async (user) => {
  try {
    const { data } = await axios.post(
      `${apiURL}${ghostFollowers}`,
      JSON.stringify({ username: user }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });

    return data;
  } catch (error) {
    console.error(`${getGhostFollowers.name} error: ${error}`)
    return ghostFollowersJSON;
  }
}

export {
  getEngagement,
  getUsers,
  getCreatedUser,
  getUpdatedUser,
  getDeletedUser,
  getPostsStats,
  getMostLikedPosts,
  getTopFans,
  getGhostFollowers
};
