// String = String
// 숫자 = Number
// ArrayList = Array []
// HashMap = Object {}

// let animals = ["dog","cat","bird","fish","lizard"];
// // 선언한 순간 animals는 Class 속성 (or Object의 속성)을 가짐. 
// // 고로 length로 뽑아낸다. 
// // javascript에 Object 최상위?
// console.log(`DONE`);

// for(let i = 0; i < animals.length; i = i+1){
//     console.log(`${i+1}: ${animals[i]}`);
// } 

// // for (String animal : animals) for each문과 동일
// // let animal에서 let은 animal을 변수로 사용한다는 뜻
// for (let animal of animals){
// console.log(`${animal}`);
// }
const animals_obj = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" },
  ];
  let outHtml =``;
  for (let animal_hashmap of animals_obj){
    // for문이 돌면서 console에서 표현하기
    console.log(`name : ${animal_hashmap.name}, species : ${animal_hashmap['species']}`);
// 완성되고 for문이 끝나면 html로 표현하기
  outHtml = `${outHtml}<div> name : ${animal_hashmap.name}, species : ${animal_hashmap['species']}</div>`; 
}
console.log(outHtml);
// browser의 자원 중에 docs
// document로 변수 선언 해준다. 여기엔 html, css, 또 뭐였드라. 이 3가지 포함
let loops_source = document.querySelector('#loops');//js의 id를 얘기할땐 #으로 표시해준다.

// loops_source
// <div id ="loops"> inner text </div>
loops_source.innerHTML = outHtml;
