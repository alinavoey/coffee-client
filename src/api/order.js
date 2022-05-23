import apiUrl from '../apiConfig'
import axios from 'axios'

export const createOrder = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/orders',
    data: {
      order: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const indexOrders = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/orders',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
