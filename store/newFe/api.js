import axios from "axios"
import { NEW_FE3_USERNAME, NEW_FE3_PASSWORD } from "react-native-dotenv"
const newFe = axios.create({
  baseURL: "https://vnvnvm.com",
  auth: { username: NEW_FE3_USERNAME, password: NEW_FE3_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
