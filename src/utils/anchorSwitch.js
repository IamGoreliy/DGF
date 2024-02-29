const anchorSwitch = (nameBtn) => {
  switch (nameBtn) {
    case 'Залишити заявку':
      return '/#contactCompany';
    case 'Сплатити борг':
      return '/#payAnchor'
    default:
      return null;
  }
}

export const hrefAnchor = (nameBtn, router) => {
  const anchor = anchorSwitch(nameBtn);
  if (anchor) {
    router.push(`${anchor}`);
  }

}