import axios from "axios"
import { NEW_NM_USERNAME, NEW_NM_PASSWORD } from "react-native-dotenv"
const newnm = axios.create({
  baseURL: "https://fxbsn.com",
  auth: { username: NEW_NM_USERNAME, password: NEW_NM_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
