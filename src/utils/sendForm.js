import {sendFormOffer} from './custFetch';

export const clickForSubmitForm = () => {
  const btnSubForm = document.getElementById('btnSubForm');
  btnSubForm.click();
}

export const sendForm = async (formData, setState) => {
  const res = await sendFormOffer(formData);
  setState(res);
}