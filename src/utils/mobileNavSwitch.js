export const mobileNavSwitch = (pageName) => {
  switch (true){
    case 'ГОЛОВНА' === pageName :
      return '/';
    case 'ПРО КОМПАНІЮ' === pageName:
      return '/aboutCompany';
    case 'ПОЗИЧАЛЬНИКАМ' === pageName:
      return  '/debtors';
    case 'ІНВЕСТИЦІЇ ТА ПАРТНЕРСТВО' === pageName:
      return  '/InvestmentAndPartnership';
    case 'СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ' === pageName:
      return '/Offers';
    default:
      return 'нет страницы';
  }
}