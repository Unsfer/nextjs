import moment from 'moment';
import createFetch from '@vercel/fetch';
import fetcher from 'node-fetch';
const fetch = createFetch(fetcher);

export default class carMonitor {
	static _instance = null;
	
	REQUESTS_TIMEOUT = 1 * 60 * 1000; // 1 мин
	CAR_IDS = {
		CRETA: 31,
	};


	handledCars = {};
	requestsCount = 0;
	monitorTimer = null;
	lastResponse = null;
	lastRequestDate = null;


	init = () => {
		if (!this.monitorTimer) {
			this.monitorTimer = setInterval(this.runMonitor, this.REQUESTS_TIMEOUT);
		}
	};

	restart = () => {
		return;
		clearInterval(this.monitorTimer);
		this.requestsCount = 0;
		this.handledCars = {};
		this.lastResponse = null;
		this.lastRequestDate = null;
		this.init();
	};

	runMonitor = async () => {
		const carId = this.CAR_IDS.CRETA;
		this.requestsCount++;
		this.lastResponse = await this.getCarModels(carId);
		this.lastRequestDate = moment().format('DD.MM.YYYY HH:mm:ss');
		console.log('this.lastRequestDate', this.lastRequestDate);
	};

	getCarModels = async (carId) => {
		let url = `https://showroom.hyundai.ru/rest/car`;
		if (carId) {
			url += `?car_id=${carId}`;
		}

		const response = await fetch(url);
		if (response.status === 200) {
			const json = await response.json();
			const models = json?.models;
	 	 	return models;
		}
	};


	static getInstance = () => {
        if (!this._instance) {
            this._instance = new this();
        }
        return this._instance;
	}

}