import useSWR from 'swr';
import { Message } from 'semantic-ui-react';
import fetcher from '../tools/fetcher';
import { Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import ModelsTable from '../components/ModelsTable';

export default function Home(props) {
  const { data, error } = useSWR('/api/monitor/data', fetcher);

  return (
    <Layout>
      <div>
        {error && <Message error visible content={error}/>}
        {data && <div>
          Всего запросов: {data.requestsCount}. Последний запрос: {data.lastRequestDate}.{' '}
          <Button compact negative content="Перезапустить монитор"/>
          <ModelsTable models={data.models}/>
        </div>}
      </div>
    </Layout>
  )
}