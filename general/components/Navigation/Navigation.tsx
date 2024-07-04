import Link from 'next/link';
import { HomeFilledIcon } from '../icons';

import st from './styles.module.less';

const LINKS = [
  { id: 1, label: 'Dashboard', href: '/', icon: <HomeFilledIcon /> },
  { id: 2, label: 'Catalog', href: '/catalog' },
  { id: 3, label: 'Orders', href: '/orders' },
  { id: 4, label: 'Documents', href: '/documents' },
  { id: 5, label: 'Returns', href: '/returns' },
  { id: 6, label: 'Repair estimates', href: '/repair-estimates' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className={st.list}>
        {LINKS.map((item) => (
          <li key={item.id} className={st.item}>
            <Link href={item.href}>{item.icon || item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
