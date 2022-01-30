import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BaseLayout } from '../components';

export default function HomePage() {
  return <div>Home page changed</div>;
}
HomePage.getLayout = page => {
  return <BaseLayout>{page}</BaseLayout>;
};
export const getServerSideProps = async ({ locale }) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale!, ['common']))
      }
    };
  } catch (e) {
    console.error(e);
    return {
      props: {}
    };
  }
};
