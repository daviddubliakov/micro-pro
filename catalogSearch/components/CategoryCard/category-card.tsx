import st from './styles.module.less';

export const CategoryCard = () => {
  return (
    <div className={st.card}>
      <img src='https://stage-scdn.autodoc.pro/catalog/categories/150x150/10435.png?w=640' />
      <span>Oils & Liquids</span>
    </div>
  );
};
