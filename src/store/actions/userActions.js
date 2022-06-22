import { userService } from "../../services/userService"

export function logGuest() {
    return async (dispatch) => {
        try {
            const user = await userService.logGuest()
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('error', err);
        }
    }
}
export function updateUser(field, value) {
    return async (dispatch) => {
        try {
            const user = await userService.update(field, value)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('error', err);
        }
    }
}