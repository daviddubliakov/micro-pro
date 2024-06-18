import cx from 'classnames';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { ProLogoLightImg } from '../images';
import { BellIcon, CartIcon, HeadphonesIcon, UserIcon } from 'components/icons';

import st from './styles.module.less';

export const Search = () => {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <div className={st.column}>
          <div className={st.image}>
            <ProLogoLightImg />
          </div>
        </div>
        <div className={cx(st.column, st.grow)}>
          <div className={st.search}>
            <Input
              placeholder='Recherche intelligente : par catégorie, nom du produit, référence article'
              className={st['search-input']}
            />
            <Button
              className={st['search-button']}
              type='primary'
              icon={<SearchOutlined />}
            >
              Rechercher
            </Button>
          </div>
        </div>
        <div className={st.column}>
          <ul className={st.list}>
            <li>
              <BellIcon />
            </li>
            <li>
              <UserIcon />
            </li>
            <li>
              <HeadphonesIcon />
            </li>
            <li>
              <CartIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
