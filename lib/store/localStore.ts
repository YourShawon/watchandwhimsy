class Storage {
  set(key:string, data: any) {
    // Save data to sessionStorage
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  get(key: string) {
    // Get saved data from sessionStorage
    const data = sessionStorage.getItem(key)
    return JSON.parse(data!)
  }

  remove(key: string) {
    sessionStorage.removeItem(key)
  }
}

const storage = new Storage()

export default storage
