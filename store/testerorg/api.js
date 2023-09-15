import axios from "axios"
import { TESTERORG_USERNAME, TESTERORG_PASSWORD } from "react-native-dotenv"
const testerorg = axios.create({
  baseURL: "https://Vcbdn.com",
  auth: { username: TESTERORG_USERNAME, password: TESTERORG_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
