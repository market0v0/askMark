export const encryptData = (message1: string): string => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify({ message1 }),
    'secret-key'
  ).toString()

  return encodeURIComponent(encryptedData)
}

export const decryptData = (encryptedData: string): string => {
  const decryptedData = CryptoJS.AES.decrypt(
    decodeURIComponent(encryptedData),
    'secret-key'
  ).toString(CryptoJS.enc.Utf8)

  const parsedData = JSON.parse(decryptedData)

  return parsedData.message1
}
