import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div>
      Sorry! We cannot find the page you are looking for!
      <Link passHref href="/">
        <a className="font-black">Go back</a>
      </Link>
    </div>
  );
};
export default Page;
