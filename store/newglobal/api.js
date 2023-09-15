import axios from "axios"
import {
  NEW_GLOBAL44_USERNAME,
  NEW_GLOBAL44_PASSWORD
} from "react-native-dotenv"
const newglobal = axios.create({
  baseURL: "https://bcnfjfj.com",
  auth: { username: NEW_GLOBAL44_USERNAME, password: NEW_GLOBAL44_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
