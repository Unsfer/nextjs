import Layout from '../components/layout';
import useSWR from 'swr';
import { Menu } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';

export default function Home() {
  const { env } = useSWR(`/api/env`, fetcher);

  return (
    <Layout>
      <div>
        MY VK APP
        <pre>env = {JSON.stringify(env, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}