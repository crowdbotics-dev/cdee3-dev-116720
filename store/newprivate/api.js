import axios from "axios"
import {
  NEW_PRIVATE66_USERNAME,
  NEW_PRIVATE66_PASSWORD
} from "react-native-dotenv"
const newprivate = axios.create({
  baseURL: "https://vbvnv.com",
  auth: { username: NEW_PRIVATE66_USERNAME, password: NEW_PRIVATE66_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
