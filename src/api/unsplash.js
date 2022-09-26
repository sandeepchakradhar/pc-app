import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID dSmnsg0Ef_U8dLoB9DtYtkBKljOKx0Hn5cfm1QkKWn8",
  },
});
