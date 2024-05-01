
const fetchOptionSpred = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...data}),
  }
}

 const fetchOptionNoSpred = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({data}),
  }
 }
export const authUsersFetch = async (email, pass) => {
  const url = '/api/apiAuthUser';
  const response = await fetch(url, fetchOptionSpred({email, pass}));
  const responseData = await response.json();
  return [response.ok, responseData];
}

export const verificationFetch = async (token) => {
  const url = '/api/apiVerificationUser';
  try {
    const response = await fetch(url, fetchOptionSpred({token}));
    const responseData = await response.json();
    return [response.ok, responseData];
  } catch (e) {
    console.log(e.message)
  }
}

export const preloaderFetch = async (file) => {
  const url = '/api/previewImg';
  const res = await fetch(url, {
    method: 'POST',
    body: file
  })
  const responseData = await res.json();
  console.log(responseData)
  return [res.ok, responseData];
}

export const uploadFile = async (formData) => {
  const url = '/api/uploadFile';
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const responseData = await response.json();
  return [response.ok, responseData];
}

export const getAllOffers = async (rowsPerPage, offset) => {
  const url = process.env.URL + `/api/getAllOffers?page=${rowsPerPage}&offset=${offset}`;
  const res = await fetch(url);
  return await res.json();
}

export const updateData = async (signal = '', rowsPerPage, preLoadingData) => {
  const url = `/api/getAllOffers?page=${rowsPerPage}&offset=${preLoadingData}`;
  let response;
  if (signal) {
     response = await fetch(url);
  } else {
     response = await fetch(url, signal);
  }
  return await response.json();
}

export const fetchSearchOffers = async (value, rowsPerPage, preLoadingData) => {
  const url = `/api/searchOffers`;
  const response = await fetch(url, fetchOptionSpred({value, rowsPerPage, preLoadingData}));
  return await response.json();
}

export const deleteOffers = async (id, jwt) => {
  const url = 'api/deleteOffers';
  const response = await fetch(url, fetchOptionSpred({id, jwt}));
  const statusReq = response.ok;
  const responseData = await response.json();
  return {statusReq, responseData};
}

export const offerForPageOffer = async () => {
  const url = process.env.URL + '/api/offerdataForPageOffer';
  const res = await fetch(url);
  return await res.json();
}

export const createCookies = async (device) => {
  const url = '/api/createCookies';
  const res = await fetch(url, fetchOptionSpred({device}));
  const resParse = await res.json();
  return {status: res.ok, message: resParse.message};
}

export const getDeviceStatistic = async () => {
  const url = process.env.URL + '/api/deviceStats';
  const res = await fetch(url);
  return await res.json();
}

