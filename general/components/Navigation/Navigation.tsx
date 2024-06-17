import { HomeFilledIcon } from '../icons';

import st from './styles.module.less';

const LINKS = [
  { id: 1, label: 'Dashboard', href: '/', icon: <HomeFilledIcon /> },
  { id: 2, label: 'Catalog', href: '/catalog' },
  { id: 2, label: 'Orders', href: '/orders' },
  { id: 2, label: 'Documents', href: '/documents' },
  { id: 2, label: 'Returns', href: '/returns' },
  { id: 2, label: 'Repair estimates', href: '/repair-estimates' },
];

export const Navigation = () => {
  return (
    <nav>
      <ul className={st.list}>
        {LINKS.map((item) => (
          <li key={item.id} className={st.item}>
            <span>{item.icon || item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
