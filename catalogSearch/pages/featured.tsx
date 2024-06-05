// import { Box } from 'antd';
import Product from '../components/product';

export function Featured() {
  return (
    <div>
      <h3>Featured products</h3>
      <div>
        <Product key={1} />
        <Product key={2} />
        <Product key={3} />
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 2 === 0 ? [1, 2, 3] : [1, 2, 3, 4];
  return {
    props: {
      test,
    },
  };
}
export default Featured;
