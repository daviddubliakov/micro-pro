import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Navigation } from '../components/Navigation';

const Search = dynamic(
  () => import('catalogSearch/Search').then((mod) => mod.Search),
  {
    ssr: true,
  },
);

const Categories = dynamic(
  () => import('catalogSearch/Categories').then((mod) => mod.Categories),
  {
    ssr: true,
  },
);

export default function Orders() {
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
        <Navigation />
        <Categories />
      </main>
    </>
  );
}
