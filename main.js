const inputCEP = document.querySelector('#cep');
const searchCEP = document.querySelector('#btnPesquisar');
const street = document.querySelector('#rua');
const complement = document.querySelector('#complemento');
const neighborhood = document.querySelector('#bairro');
const city = document.querySelector('#cidade');
const state = document.querySelector('#estado');

searchCEP.addEventListener('click', (event) => {
	event.preventDefault();
	const cepValue = inputCEP.value;
	getData(cepValue);
});

function getData(cep) {
	const url = `https://viacep.com.br/ws/${cep}/json/`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			street.value = data.logradouro;
			complement.value = data.complemento;
			neighborhood.value = data.bairro;
			city.value = data.localidade;
			state.value = data.uf;
			console.log(data);
		});
}
