import { Typography } from '@mui/material';
import doSomethingUseful from '../../../public/image/offer/50.png';
import timeNow from '../../../public/image/offer/150.png';

export const offersData = [
  {
    id: 1,
    title: 'Роби корисне діло, закривай борг за "50% тіла',
    image: doSomethingUseful,
    desc:
      <>
        <Typography
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 'clamp(14px,1vw,16px)',
            lineHeight: '1.4',
          }}
        >
          ТОВ &quot;ДІДЖИ ФІНАНС&quot;, пропонує мега круті умови закриття боргів за кредитами, що первинно були оформлені в ТОВ &quot;МАНІВЕО ШВИДКА ФІНАНСОВА ДОПОМОГА&quot; (https://moneyveo.ua/).
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 'clamp(14px,1vw,16px)',
            lineHeight: '1.4',
          }}
        >
          Дізнавайся чи ТВІЙ БОРГ включено до акції за тел.: 0673693337, 0931708647,
          <span>чи просто залиш заявку скориставшися кнопками на сайті &quot;Прийняти участь&quot;, &quot;Хочу консультацію&quot;!</span>
        </Typography>
      </>
  },
  {
    id: 2,
    title: 'Настав час "ФІНАНСОВОЇ СВОБОДИ',
    image: timeNow,
    desc:
      <>
        <Typography
          sx={{
            fontFamily: 'Raleway',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 'clamp(14px,1vw,16px)',
            lineHeight: '1.4',
          }}
        >
          ТОВ &quot;ДІДЖИ ФІНАНС&quot;, пропонує лояльні умови закриття боргів за кредитами, що первинно були
          оформлені в&nbsp;
          <a
            href="https://miloan.ua/"
            target="_blank"
          >
            https://miloan.ua/
          </a>
          ,
          &nbsp;
          <a
            href="https://tengo.ua"
            target="_blank"
          >
            https://tengo.ua
          </a>
          ,
          &nbsp;
          <a
            href="http://forzacredit.com.ua/"
            target="_blank"
          >
            http://forzacredit.com.ua/
          </a>
          ,
          &nbsp;
          <a
            href="https://creditplus.ua/"
            target="_blank"
          >
            https://creditplus.ua/
          </a>
          ,
          &nbsp;
          <a
            href="https://money4you.ua/"
            target='_blank'
          >
            https://money4you.ua/
          </a>
          . Деталі за т.: 0673693337, 0931708647, або залиш заявку на сайті!
        </Typography>
      </>
  },
]
