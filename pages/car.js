import Layout from '../components/layout';
import useSWR from 'swr';
import { Message } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';

export default function Home(props) {
  const { VK_APP_ID } = props;
  if (!VK_APP_ID) {
    return <div>No VK_APP_ID</div>;
  }

  const url = 'https://showroom.hyundai.ru/rest/car?car_id=31';
  const { data, error } = useSWR(url, fetcher);

  return (
    <Layout>
      <div>
        <pre>data = {JSON.stringify(data, null, 2)}</pre>
        {error && <Message error visible content={error}/>}
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { VK_APP_ID = '' } = process.env;
  return { props: { VK_APP_ID } };
}