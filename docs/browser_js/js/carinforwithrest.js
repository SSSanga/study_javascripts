let outHtml = ``; //테이블열기
function carTableBody(data){
    let carinfor_obj = data;
      
  for (let car_hashmap of carinfor_obj) {   
    // 각 자동차의 정보를 콘솔에 출력(올바르게 액세스하고 있는지 확인용)
    console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
     // 동적으로 생성된 HTML 테이블 행을 추가
    outHtml = `${outHtml}<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
  }
  outHtml += ``; //테이블 닫기 </table>태그
// "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
  let carTableBody = document.querySelector('#carTableBody'); // list.html에서 이 id 넣음 <tbody id="carTableBody"> 
  carTableBody.innerHTML = outHtml; //outHtml 변수에 저장된 동적으로 생성된 HTML이 선택된 <tbody> 요소의 내부 HTML로 할당됨

}

// carTableBody();

// add keydown Event
let keydownObject = document.querySelector("#keydownEnter");
//위의 구문은 commons의 <input>을 동일한 id를 통해 가져온것. 
// keydownObject가 
keydownObject.addEventListener("keydown",(event)=>{
if (event.code == 'Enter')
    {console.log(`key down : ${event.code}`)};
    getSelectAllFromREST();
});

//quest_carinforlist html
//selectall CI002 
getSelectAllFromREST
let  outResult = ``;
function getSelectAllFromREST(){
//value잡아내기
  let getInputObject = document.querySelector("#keydownEnter");
let inputValue=getInputObject.value;
//CI002를 변수로 넣을 수 있게.... 응용: selectorSearch할때?
let url = `http://localhost:8080/selectAll/${inputValue}`;
let request = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    carTableBody(data);
    // for (car_inform of data){
    //   outResult=`${outResult}<tr><td>${car_inform.YEAR}</td><td>${car_inform.CAR_NAME}</td><td>${car_inform.CAR_INFOR_ID}</td><td>${car_inform.COMPANY_ID}</td></tr>`;
    // }
    // let TotalResult=document.querySelector('#totalBody');
    // TotalResult.innerHTML=outResult;

  })
  .catch((data) => {
    console.log(data)
  });

}
