import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MainMenuContext } from '../MainMenuContext';
import { Item } from './Item';
import { Items } from './Items';

export const Level1 = () => {
  const [tCommon] = useTranslation('common');
  const router = useRouter();
  const locale = router.locale;
  const { setActiveLevel } = useContext(MainMenuContext);
  const strangerLocale = locale === 'ru' ? 'en' : 'ру';
  return (
    <div className="border-y border-black flex gap-2 justify-between flex-wrap">
      <Items>
        {[
          {
            label: tCommon('section.shop'),
            href: '/',
            id: 'shop'
          },
          {
            label: tCommon('section.editorial'),
            href: '/editorial',
            id: 'editorial'
          },
          {
            label: tCommon('section.archivio'),
            href: '/archivio',
            id: 'archivio'
          },
          {
            label: tCommon('section.spazio-maiocchi'),
            href: '/spazio-maiocchi',
            id: 'spazio-maiocchi'
          },
          { label: tCommon('section.circle'), href: '/circle', id: 'circle' },
          { label: tCommon('section.drop'), href: '/drop', id: 'drop' }
        ].map(i => (
          <li key={i.id}>
            <Link passHref href={i.href}>
              <a onMouseEnter={() => setActiveLevel(i.id)}>
                <Item>{i.label}</Item>
              </a>
            </Link>
          </li>
        ))}
      </Items>
      <Items>
        <li>
          <Item>{tCommon('section.search')}</Item>
        </li>
        {[
          {
            label: tCommon('section.login'),
            href: '/login'
          },
          { label: tCommon('section.wishlist'), href: '/wishlist' }
        ].map(i => (
          <li key={i.href}>
            <Link passHref href={i.href}>
              <a>
                <Item>{i.label}</Item>
              </a>
            </Link>
          </li>
        ))}

        <li>
          <Link
            passHref
            href={router.asPath}
            locale={locale === 'ru' ? 'en' : 'ru'}
          >
            <a>
              <Item>
                <Item>{strangerLocale}</Item>
              </Item>
            </a>
          </Link>
        </li>
      </Items>
    </div>
  );
};
