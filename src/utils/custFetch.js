
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
  const responseData = await response.json()
  return [response.ok, responseData];
}

export const verificationFetch = async (token) => {
  const url = '/api/apiVerificationUser';
  const response = await fetch(url, fetchOption({token}));
  const responseData = await response.json();
  return [response.ok, responseData];
}