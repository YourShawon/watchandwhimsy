import axios from 'axios'

export const fetchData = async (
  url: string,
  headers: Record<string, string>,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    return await axios.get(url, {
      headers: headers
    })
  } catch (e) {
    return e
  } finally {
    loading(false)
  }
}

export const postData = async (
  url: string,
  data: any,
  headers: Record<string, string>,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    return await axios.post(url, data, {
      headers: headers
    })
  } catch (e) {
    return e
  } finally {
    loading(false)
  }
}

export const putData = async (
  url: string,
  data: any,
  headers: Record<string, string>,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    return await axios.put(url, data, {
      headers: headers
    })
  } catch (e) {
    return e
  } finally {
    loading(false)
  }
}

export const deleteData = async (
  url: string,
  headers: Record<string, string>,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    return await axios.delete(url, {
      headers: headers
    })
  } catch (e) {
    return e
  } finally {
    loading(false)
  }
}

export const patchData = async (
  url: string,
  data: any,
  headers: Record<string, string>,
  loading: (value: boolean) => void
) => {
  try {
    loading(true)
    return await axios.patch(url, data, {
      headers: headers
    })
  } catch (e) {
    return e
  } finally {
    loading(false)
  }
}
