import { defineStore } from "pinia";
import axios from "axios";

const URL = "https://api.sendinblue.com/v3/smtp/email";
export const useEmail = defineStore("email", {
  state: () => ({ email: null }),
  getters: {},
  actions: {
    async sendEmail(email) {
      
      const res = await axios
        .post(
          URL,
          email,
          {
            headers: {
              "accept": "application/json",
              "api-key":process.env.VUE_APP_API_KEY_EMAIL,
              "content-type": "application/json",
            },
          }
        )
        .then((res) => res.data)
        .catch((err) => err.message);
      return res;
    },
  },
});
