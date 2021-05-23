import Layout from '../components/layout';
import useSWR from 'swr';
import { Button } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';

export default function Home(props) {
  const { VK_APP_ID } = props;
  if (!VK_APP_ID) {
    return <div>No VK_APP_ID</div>;
  }

  const initVK = async () => {
  	await VK.init({ apiId: VK_APP_ID });

  	VK.Auth.login(function(...args) { console.log(...args); })
  };

  return (
    <Layout>
      <div>
        <pre>props = {JSON.stringify(props, null, 2)}</pre>

        <Button primary onClick={initVK} content="Тест"/>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { VK_APP_ID = '' } = process.env;
  return { props: { VK_APP_ID } };
}