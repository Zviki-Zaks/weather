import { storageService } from "./asyncService"

const KEY = 'weatherUser'
function login() {
}

function logout() {

}

async function update(field, value) {
    const user = await _load()
    user[field] = value
    _save(user)
    return user
}

function getLoggedinUser() {

}

async function logGuest() {
    const location = {}
    navigator.geolocation.getCurrentPosition((res) => {
        location.lat = res.coords.latitude
        location.lon = res.coords.longitude
    })
    const user = await _load() || {}
    user.location = location
    console.log('user', user)
    _save(user)
    return user

}

export const userService = {
    login,
    logout,
    update,
    getLoggedinUser,
    logGuest
}

function _save(item) {
    return new Promise((resolve, reject) => {
        localStorage.setItem(KEY, JSON.stringify(item))
        resolve(item)
    })
}

function _load() {
    return new Promise((resolve, reject) => {
        const item = JSON.parse(localStorage.getItem(KEY) || 'null')
        resolve(item)
    })
}