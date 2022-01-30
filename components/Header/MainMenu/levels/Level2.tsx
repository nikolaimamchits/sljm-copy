import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React, { useContext, useMemo } from 'react';
import { MainMenuContext } from '../MainMenuContext';
import { Item } from './Item';
import { Items } from './Items';

export const Level2 = () => {
  const [tCommon] = useTranslation('common');
  const { activeLevel } = useContext(MainMenuContext);
  const items = useMemo(
    () =>
      ({
        shop: [
          { label: tCommon('section.latest'), href: '/collections/latest' }
        ],
        editorial: []
      }[activeLevel]),
    [activeLevel]
  );
  return (
    <Items>
      {items?.map(i => (
        <li key={i.href}>
          <Link passHref href={i.href}>
            <a>
              <Item>{i.label}</Item>
            </a>
          </Link>
        </li>
      ))}
    </Items>
  );
};
