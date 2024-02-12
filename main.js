const inputValue = document.querySelector(".inputValue");
const btnEnter = document.querySelector(".btnEnter");
const form = document.querySelector(".form1");
const container = document.querySelector(".container");
const pTag = document.querySelector("p");
const inputSearch = document.querySelector(".inputSearch");
const btnSearch = document.querySelector(".btnSearch");
const search = document.querySelector(".search");

const text =
	"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptatum tempore mollitia praesentium. Quas perspiciatis enim eligendi explicabo sed doloribus aperiam, ullam repellendus tenetur magnam similique, animi sequi non cupiditate? Accusamus eaque consectetur aliquam? Sunt veritatis debitis amet nobis minima cum dolorum suscipit fugit natus temporibus dolore quibusdam autem, ab, eos quia in tenetur sapiente possimus. Nesciunt, quisquam perferendis culpa ea rerum dolores eaque eos error fugit recusandae voluptate voluptatibus totam officia porro labore amet debitis hic impedit? Deleniti totam nobis exercitationem fuga qui eaque tenetur, quidem nostrum obcaecati non natus saepe autem quam libero nisi nemo deserunt fugiat, voluptatibus excepturi doloribus odio illo, iure minus minima. Quia asperiores obcaecati ratione soluta repellendus fuga atque doloremque vero, minima, assumenda, sunt animi laborum delectus ad voluptatem odio in dolorum quaerat dolorem dolor earum. Aspernatur quidem ipsam perferendis optio accusantium veritatis expedita dolor, iste fugit consequuntur error dicta voluptas laboriosam blanditiis obcaecati? Tempora excepturi quaerat placeat, fugiat pariatur ex aperiam! Consequuntur, velit voluptatibus repellendus voluptatem earum debitis iusto obcaecati et similique molestias omnis harum quod quasi optio tenetur commodi dignissimos numquam eos ea error sapiente doloremque adipisci! Deleniti repellendus ut vitae quasi quisquam earum, adipisci animi, mollitia nesciunt, beatae veritatis dolor accusantium!";

btnSearch.disabled = false;
const arrayText = text.split(" ");
// console.dir(arrayText);
const number = inputValue;
// first page btn
form.onsubmit = function (e) {
	e.preventDefault();
	if (!inputValue.value) return;
	form.style.display = "none";
	container.style.display = "flex";
	search.style.display = "flex";
	textValue();
};
// second page  search
function textValue() {
	let text = [];
	let text2 = [];
	let textValue = "";
	let value1 = inputValue.value;
	for (let i = 0; i < value1; i++) {
		text.push(arrayText[i]);
	}
	textValue = text.join(" ");
	pTag.innerHTML = textValue;
	// console.log(textValue);

	search.onsubmit = function (e) {
		e.preventDefault();
		const value2 = inputSearch.value;

		for (let i = 0; i < value1; i++) {
			let element = text[i];
			if (element.includes(value2)) {
				text2.push(`<mark>${element}</mark>`);
				btnSearch.disabled = true;
			} else {
				text2.push(element);
			}
		}
		pTag.innerHTML = "";
		pTag.innerHTML = text2.join(" ");
	};
}
