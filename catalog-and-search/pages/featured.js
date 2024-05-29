import Product from '@/components/product';

export function Featured({ test }) {
  return (
    <div>
      <h3>Featured products</h3>
      <div>
        {test.map((item) => (
          <Product key={item} />
        ))}
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
