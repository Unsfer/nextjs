import Layout from '../components/layout';
import useSWR from 'swr';
import { Menu } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';

export default function Home(props) {
  const { VK_APP_ID } = props;
  if (!VK_APP_ID) {
    return <div>No VK_APP_ID</div>;
  }

  return (
    <Layout>
      <div>
        <pre>props = {JSON.stringify(props, null, 2)}</pre>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { VK_APP_ID = '' } = process.env;
  return { props: { VK_APP_ID } };
}