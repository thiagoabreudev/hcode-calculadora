class CalculatorCtrl {
	constructor () {
		this._dateEl = document.querySelector('#data');
		this._timeEl = document.querySelector('#hora');
		this._displayEl = document.querySelector('#display');
		this._display = '0'
		this._displayDate;
		this._displayTime;
		this._current_date;
		this.initialize()
	}

	initialize() {

		setInterval(()=> {
			this.displayDate = this.current_date.toLocaleDateString('pt-BR');
			this.displayTime = this.current_date.toLocaleTimeString('pt-BR');
		}, 1000)		
	}

	get display() {
		return this._displayEl.innerHTML;
	}

	set display(value) {
		this._display = this._displayEl.innerHTML = value;
	}

	get displayDate() {
		return this._dateEl.innerHTML;
	}

	set displayDate(value) {
		this._displayDate = this._dateEl.innerHTML = value;
	}

	get displayTime() {
		return this._timeEl.innerHTML;
	}

	set displayTime(value) {
		this._displayTime = this._timeEl.innerHTML = value;
	}

	get current_date() {
		return new Date()
	}

	set current_date(value) {
		this._current_date = value;
	}
}