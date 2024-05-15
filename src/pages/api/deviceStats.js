import { createRouter } from 'next-connect';
import { connectDB } from '../../lib/connectDB';
const moment = require('moment');
const counterDayInMonth = require('./utils/counterDayInMonth');

const router = createRouter();

router.get(async (req, res) => {
  let connection, deviceData, userStatReqOffersCurMonth, userStatReqOffersLastMonth;
  const currentMonth = moment().format('YYYYMM');
  const lastMonth = moment().subtract('1', 'month').format('YYYYMM');
  const numDayCurMonth = moment(currentMonth, 'YYYYMM').daysInMonth();
  const numDayLastMonth = moment(lastMonth, 'YYYYMM').daysInMonth();
  const startDayCurMonth = currentMonth + '01';
  const lastDayCurMonth = currentMonth + numDayCurMonth;
  const startDayLastMonth = lastMonth + '01';
  const lastDayLastMonth = lastMonth + numDayLastMonth;


  try {
    try {
      connection = await connectDB();
    } catch (e) {
      throw new Error('не удалось создать подключение');
    }
    try {
      [deviceData] = await connection.query('SELECT * FROM `list_of_site_visits`');
      [userStatReqOffersCurMonth] = await connection.query('SELECT * FROM `user_interest_offer` WHERE `application_date` BETWEEN ? AND ? ORDER BY `application_date` DESC', [startDayCurMonth, lastDayCurMonth]);
      [userStatReqOffersLastMonth] = await connection.query('SELECT * FROM `user_interest_offer` WHERE `application_date` BETWEEN ? AND ?', [startDayLastMonth, lastDayLastMonth]);
    } catch (e) {
      throw new Error('не удалось получить ответ от сервера');
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json({message: e.message});
    return;
  } finally {
    if (connection) {
      connection.end();
    }
  }

  userStatReqOffersCurMonth = userStatReqOffersCurMonth.reduce((acc, ele) => {
    ele['application_date'] = moment(ele['application_date']).format('YYYY-MM-DD');
    ele['date_set_message'] = ele['date_set_message'] ? moment(ele['date_set_message']).format('YYYY-MM-DD') : '---- -- --';
    acc.push(ele);
    return acc;
  }, []);

  const [arrQuantityCurMonth, arrStatsCurMonthPercent , arrStatsCurMonth] = counterDayInMonth(+numDayCurMonth, currentMonth, userStatReqOffersCurMonth);
  const [arrQuantityLastMonth, arrStatsLastMonthPercent, arrStatsLastMonth] = counterDayInMonth(+numDayLastMonth, lastMonth, userStatReqOffersLastMonth);


  res.status(200).json({deviceData, arrQuantityCurMonth, arrStatsCurMonth, arrStatsCurMonthPercent, arrQuantityLastMonth, arrStatsLastMonth, arrStatsLastMonthPercent, userStatReqOffersCurMonth});
})

export default router.handler();