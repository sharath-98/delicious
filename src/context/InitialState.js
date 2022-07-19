import { fetchUser } from "../utils/getLocalStorage"

const userInfo = fetchUser();
export const initialState = {
    user: userInfo
}