export const getFromStorage = (key: string) => {
  const storageString = sessionStorage.getItem(key)
  if (!storageString) return null
  return JSON.parse(storageString)
}

export const setInStorage = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
