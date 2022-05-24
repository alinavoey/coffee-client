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

export const showOrder = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/orders/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteOrder = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/orders/' + id,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateOrder = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/orders/' + id,
    data: {
      order: data
    },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
