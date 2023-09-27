import moment from 'moment'
var CryptoJS = require("crypto-js");
// Encrypted And Decrypted -> Key 
var Key = 'DZPv7bUD4c82xArE1lfQUIb6'
// 9z$C&F)J@NcRfTjW
var Code = 'QUJDREVGR0g=';
export const Page_Loader = "Page_Loader";

export const getShowingWithOutTime = (dateStr) => {
  return moment(dateStr).format("MM/DD/YYYY")
}

export const getShowingDayWithOutTime = (dateStr) => {
  return moment(dateStr).format("DD/MM/YYYY")
}
export const getShowingDayWithTime = (dateStr) => {
  return moment(dateStr).format("DD-MM-YYYY HH:MM:SS")
}

export const getShowingWithOutTimeStartDate = (dateStr) => {
  return moment(dateStr).format("YYYY/MM/DD")
}


export const DecryptedList = (response) => {
  var key = CryptoJS.enc.Utf8.parse(Key);
  var iv = CryptoJS.enc.Base64.parse(Code);
  var bytes = CryptoJS.TripleDES.decrypt(response, key, {
    mode: CryptoJS.mode.CBC,
    iv: iv,
  });

  return bytes.toString(CryptoJS.enc.Utf8);
}

// Encrypt Data 
export const EncryptedList = (text) => {
  var key = CryptoJS.enc.Utf8.parse(Key);
  var iv = CryptoJS.enc.Base64.parse(Code);
  var encoded = CryptoJS.enc.Utf8.parse(text);
  var bytes = CryptoJS.TripleDES.encrypt(encoded, key, {
    mode: CryptoJS.mode.CBC,
    iv: iv,
  });
  return bytes.toString();
}

// Decrypt ID And name 
export const Decrypt_Id_Name = (data, key) => {
  const result = JSON.parse(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8))
  return result
}

export const Encrypted_Id_Name = (data, key) => {
  const result = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString()
  return result
}


// custuom style withoutColor
export const customStylesWithOutColor = { control: base => ({ ...base,  height: 31,  minHeight: 30, fontSize: 14, margintop: 2, boxShadow: 0, fontWeight: 500, }),
};