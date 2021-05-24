import carMonitorClass from '../../../classes/carMonitor';

export default async function handler(req, res) {
	const carMonitor = carMonitorClass.getInstance();

	carMonitor.init();
	const { requestsCount, lastResponse: models, lastRequestDate } = carMonitor;
 	res.status(200).json({ requestsCount, models, lastRequestDate });
}