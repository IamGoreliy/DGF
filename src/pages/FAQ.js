import {Layout as Header} from '../layouts/headerNavigation';
import {LayoutAuxiliaryPage} from '../layouts/LayoutAuxiliaryPage';
import {SectionFooter} from '../layouts/homePage/SectionFooter';
import { QuestionsAnswers } from '../layouts/FAQ/QuestionsAnswers';

const Page = () => {
  return (
    <>
      <Header>
        <LayoutAuxiliaryPage title={'ПИТАННЯ ТА ВІДПОВІДІ'}>
          <QuestionsAnswers/>
        </LayoutAuxiliaryPage>
        <SectionFooter/>
      </Header>
    </>
  )
}

export default Page;