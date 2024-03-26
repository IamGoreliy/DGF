
const fetchOption = (data) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({...data}),
  }
}
export const authUsersFetch = async (email, pass) => {
  const url = '/api/apiAuthUser';
  const response = await fetch(url, fetchOption({email, pass}));
  const responseData = await response.json();
  return [response.ok, responseData];
}

export const verificationFetch = async (token) => {
  const url = '/api/apiVerificationUser';
  const response = await fetch(url, fetchOption({token}));
  const responseData = await response.json();
  return [response.ok, responseData];
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