const loadingCard = document.getElementById("div-loading-card");
const imgPerson = document.querySelector("img-profile");
const userCard = document.getElementById("div-user-card");

const pName = document.getElementById("p-name");
const pAddress = document.getElementById("p-address");
const pEmail = document.getElementById("p-email");

const btnRandom = document.getElementById("btn-random");

start();

function start() {
	callApi();
	loadingCard.display.style = "none";
}

async function callApi() {
	const resp = await axios.get("https://randomuser.me/api/");

	const data = resp.data.results[0];
	resp.onload = () => {
		loadingCard.display.style = "";
		imgPerson.src = resp.data.picture.large;
		pName.innerText = resp.data.name;
		pEmail.innerText = resp.data.email;
		pAddress.innerText = resp.data.a;
	};
}

btnRandom.onclick = async () => {
	btnRandom.disable = true;
	callApi();
	pName.innerText = resp.data.name;
	pEmail.innerText = resp.data.email;
};
