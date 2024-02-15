export const mobileNavSwitch = (pageName) => {
  switch (true){
    case 'ГОЛОВНА' === pageName :
      return '/';
    case 'ПРО КОМПАНІЮ' === pageName:
      return '/aboutCompany';
    case 'ПОЗИЧАЛЬНИКАМ' === pageName:
      return  '/debtors';
    case 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО' === pageName:
      return  '/partnership';
    case 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ' === pageName:
      return '/offers';
    default:
      return 'нет страницы';
  }
}