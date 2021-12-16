import {BASE_URL} from '../constants/url'
import axios from 'axios'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history, setBotaoDaBarra) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
      setBotaoDaBarra("Logout")
  })
  .catch((err) => alert(err.response.data.message))
  }

export const fazerLogin = (body, clear, history, setBotaoDaBarra) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeed(history)
      setBotaoDaBarra("Logout")
    })
  .catch((err) => alert(err.response.data.message))
  }