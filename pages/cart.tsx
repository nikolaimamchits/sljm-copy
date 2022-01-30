import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BaseLayout } from '../components';

const CartPage = () => {
  return <div>Cart page</div>;
};
CartPage.getLayout = page => {
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

export default CartPage;
