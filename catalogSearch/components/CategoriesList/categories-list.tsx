import { CategoryCard } from 'components/CategoryCard';
import st from './styles.module.less';

export const CategoriesList = () => {
  return (
    <div className={st.container}>
      <div className={st.sidebar}>Sidebar</div>
      <div className={st.list}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};
