import { Table } from 'semantic-ui-react';

export default function ModelsTable({ models }) {
  	if (!models?.length) {
    	return <div>Нет данных</div>;
  	}

  	return (
		<Table celled>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Модель</Table.HeaderCell>
					<Table.HeaderCell>Цена</Table.HeaderCell>
					<Table.HeaderCell>Количество</Table.HeaderCell>
				</Table.Row>
			</Table.Header>


	   		<Table.Body>
	   			{models.map(model => (
		      		<Table.Row key={model.id}>
			        	<Table.Cell>{model.model_name}</Table.Cell>
			        	<Table.Cell>{model.price}</Table.Cell>
			        	<Table.Cell>{model.count_available}</Table.Cell>
		      		</Table.Row>
   				))}
	    	</Table.Body>
		</Table>
  	)
}