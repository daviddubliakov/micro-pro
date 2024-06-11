import Head from 'next/head';
import dynamic from 'next/dynamic';

import Nav from '../components/nav';

const Search = dynamic(
  () => import('catalogSearch/Search').then((mod) => mod.Search),
  {
    ssr: true,
  },
);

const Featured = dynamic(
  () => import('catalogSearch/Featured').then((mod) => mod.Featured),
  {
    ssr: true,
  },
);

export function Home() {
  return (
    <>
      <Head>
        <title>Catalog</title>
        <meta name='description' content='Created by Davyd Dubliakov' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Search />
        <Nav />
        <Featured />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  // const [featured] = await Promise.all([import('shop/Featured')]);

  // if (featured.getServerSideProps) {
  //   const [featuredProps] = await Promise.all([
  //     featured.getServerSideProps(ctx),
  //   ]);
  //   return {
  //     props: {
  //       featuredProps: featuredProps.props,
  //     },
  //   };
  // }

  return {
    props: {},
  };
};

export default Home;
