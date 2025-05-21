class Storage {
  set(key: string, data: unknown) {
    // Save data to sessionStorage
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  get<T = unknown>(key: string): T | null {
    // Get saved data from sessionStorage
    const data = sessionStorage.getItem(key)
    return data ? (JSON.parse(data) as T) : null
  }

  remove(key: string) {
    sessionStorage.removeItem(key)
  }
}

const storage = new Storage()

export default storage
