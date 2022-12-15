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
              "api-key":
                "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",
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
