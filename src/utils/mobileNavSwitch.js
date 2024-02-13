export const mobileNavSwitch = (pageName) => {
  let urlForLink;
  switch (pageName){
    case 'ГОЛОВНА' :
      urlForLink = '/';
      return;
    case 'ПРО КОМПАНІЮ':
      urlForLink = '/aboutCompany';
      return;
    case 'ПОЗИЧАЛЬНИКАМ':
      urlForLink = '/debtors';
      return;
    case 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО':
      urlForLink = '/partnership';
      return;
    case 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ':
      urlForLink = '/offers';
      return;
    default:
      urlForLink = '/404';
  }
  console.log('func', urlForLink)
  return urlForLink;
}