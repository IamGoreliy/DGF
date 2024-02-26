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
    case 'ПИТАННЯ ТА ВІДПОВІДІ' === pageName:
      return '/FAQ';
    case 'НАСЛІДКИ НЕСПЛАТИ БОРГУ' === pageName:
      return '/consequences';
    case 'ІДЕНТИФІКАЦІЯ БОРГУ' === pageName:
      return '/identification';
    default:
      return 'нет страницы';
  }
}