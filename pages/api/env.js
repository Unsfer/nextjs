export default function handler(req, res) {
	const { VK_APP_ID } = process.env;
  	res.status(200).json({ VK_APP_ID });
}