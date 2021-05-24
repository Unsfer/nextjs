import carMonitorClass from '../../../classes/carMonitor';

export default async function handler(req, res) {
	const carMonitor = carMonitorClass.getInstance();
	carMonitor.restart();
	res.status(200).json({ status: 'OK' });
}