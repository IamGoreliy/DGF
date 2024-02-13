import {CustP} from '../../../styledComponent/StyledComponent';



export const editStylePayData = (

  widthText = '150px',
  color = 'white',
  margin = '0px',
  padding = '0px',
) => {

  const data = [
    {
      id: 1,
      title:
        <>
          <CustP
            style={{

              width: '155px',
              color
            }}
          >
            <b>ОТРИМУВАЧ:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color
            }}
          >
            ТОВ «ДІДЖИ ФІНАНС»
          </CustP>
        </>
    },
    {
      id: 2,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>ЄДРПОУ:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            42649746
          </CustP>

        </>
    },
    {
      id: 3,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>IBAN:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            UA723003460000026507026788401
          </CustP>
        </>
    },
    {
      id: 4,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>БАНК:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            АТ «Сенс Банк»
          </CustP>
        </>
    },
    {
      id: 5,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>МФО:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            300346
          </CustP>
        </>
    },
    {
      id: 6,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>Призначення платежу:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            Погашення за КРЕДИТОМ № [номер] від [рік] р.,
          </CustP>
        </>
    },
    {
      id: 7,
      title:
        <>
          <CustP
            style={{
              width: '155px',
              color,
            }}
          >
            <b>Платник:</b>
          </CustP>
          <CustP
            style={{
              width: '365px',
              color,
            }}
          >
            [ПІБ платника], ІПН: [ІПН платника]
          </CustP>
        </>
    }
  ]
  return data;
}
