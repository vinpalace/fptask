import axios from "axios";

let DOMAIN = "http://localhost:8000";

async function login(params) {
  try {
    return await axios.post(`${DOMAIN}/api-token-auth/`, {
      ...params,
    });
  } catch (err) {
    console.error(err);
  }
}

async function signup(params) {
  try {
    return await axios.post(`${DOMAIN}/api/v1/register/`, {
      ...params,
    });
  } catch (err) {
    console.error(err);
  }
}

async function getFiles(params) {
  try {
    return await axios.get(`${DOMAIN}/api/v1/user-uploads/`, {
      ...params,
    });
  } catch (err) {
    console.error(err);
  }
}

async function postFile(params) {
  try {
    return await axios.post(`${DOMAIN}/api/v1/user-uploads/`, {
      ...params,
    });
  } catch (err) {
    console.error(err);
  }
}

export { login, signup, getFiles, postFile };
