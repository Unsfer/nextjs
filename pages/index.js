import Layout from '../components/layout';
import useSWR from 'swr';
import { Menu } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';

export default function Home() {
  const { data, error } = useSWR(`/api/test`, fetcher);
  console.log({ data, error });

  return (
    <Layout>
      <div>
        MY VK APP
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}