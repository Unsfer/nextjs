import Head from 'next/head'
import { Menu, Container } from 'semantic-ui-react';

export default function Layout({
  children,
  vkAuthResponse,
  title = 'VK app',
}) {
  const { user } = vkAuthResponse?.session || {};
  return (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width"/>
			<link rel="icon" href="/favicon.ico"/>
			<link rel="stylesheet" type="text/css" href="/semantic.min.css"/>
			<link rel="stylesheet" type="text/css" href="/index.css"/>

			<script src="https://vk.com/js/api/openapi.js?169" type="text/javascript"></script>
		</Head>

		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item header>VK app</Menu.Item>
				{!!user && 
					<Menu.Item position="right" icon="check">
						{user.first_name} {user.last_name}
					</Menu.Item>
				}
			</Container>
		</Menu>

    	<Container style={{ marginTop: '3em' }}>
			{children}
		</Container>
	</div>
  )
}