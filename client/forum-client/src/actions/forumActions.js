import axios from "axios";

export const setAccessToken = accessToken => {
  return {
    type: "SetAccessToken",
    payload: accessToken
  };
};