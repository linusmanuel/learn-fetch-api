const inputCEP = document.querySelector('#cep');
const searchCEP = document.querySelector('#btnPesquisar');
const cepValue = inputCEP.value;
searchCEP.addEventListener('click', (event) => {
	event.preventDefault();
	getData(cepValue);
});

function getData(cep) {
	const url = `https://viacep.com.br/ws/${cep}/json/`;
	return console.log(url);
}
