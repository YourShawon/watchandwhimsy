// utils/api.ts
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://956f505c-809c-4256-a32c-b3d6097e83c3.mock.pstmn.io',
  headers: {
    'Content-Type': 'application/json'
  }
})

const apiGet = async (url: string, params?: any) => {
  try {
    const response = await axiosInstance.get(url, { params })
    return response.data
  } catch (error) {
    throw error
  }
}

const apiPost = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const apiPut = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const apiPatch = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.patch(url, data)
    return response.data
  } catch (error) {
    throw error
  }
}

const apiDelete = async (url: string) => {
  try {
    const response = await axiosInstance.delete(url)
    return response.data
  } catch (error) {
    throw error
  }
}

const CACHE_EXPIRY_TIME = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

const saveToCache = (key: string, data: any) => {
  const timestamp = new Date().getTime()
  const cacheData = { data, timestamp }
  localStorage.setItem(key, JSON.stringify(cacheData))
}

const getFromCache = (key: string) => {
  const cachedData = localStorage.getItem(key)
  if (!cachedData) return null

  const { data, timestamp } = JSON.parse(cachedData)
  const now = new Date().getTime()

  if (now - timestamp > CACHE_EXPIRY_TIME) {
    // If cached data is older than 1 day, remove it and return null
    localStorage.removeItem(key)
    return null
  }
  return data
}

export { apiGet, apiPost, apiPut, apiPatch, apiDelete, saveToCache, getFromCache }