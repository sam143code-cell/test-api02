import axios from "axios";

export const sendAlert = () => {
  return axios.post(
    "https://hooks.slack.com/services/T000/B000/XXXX",
    { text: "Alert!" }
  );
};