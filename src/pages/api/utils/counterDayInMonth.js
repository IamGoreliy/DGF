const moment = require('moment');
const counterDayInMonth = (num, curMonth, arrUserStatReqOffer) => {
  let startPos = 0;
  const arrNumMonth = [];
  let statsForOverviewSales = [];
  let statsForOverviewSalesPercent = [];
  while (num > startPos) {
    startPos += 1;
    const editingDate = startPos.toString().length > 1 ? startPos.toString() : '0' + startPos;
    arrNumMonth.push(editingDate);
    statsForOverviewSales[startPos - 1] = 0;
    arrUserStatReqOffer.forEach(ele => {
     if  (moment(ele['application_date']).format('YYYYMMDD') === curMonth + editingDate) {
       statsForOverviewSales[startPos - 1] += 1;
     }
    });
  }
  const maxNumCurMonth = Math.max(...statsForOverviewSales);
  statsForOverviewSalesPercent = statsForOverviewSales.map(ele => ele / maxNumCurMonth * 100);
  return [arrNumMonth, statsForOverviewSalesPercent, statsForOverviewSales];
}

module.exports = counterDayInMonth;