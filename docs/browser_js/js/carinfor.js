
// loops.js의 for 문돌려서 list.html에 표현하기

// {"YEAR":"2020","CAR_NAME":"소나타","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
// {"YEAR":"2021","CAR_NAME":"코나","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
// {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
// {"YEAR":"2022","CAR_NAME":"3 시리즈","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
// {"YEAR":"2020","CAR_NAME":"캠리","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}];
const cars_inform = [
{YEAR:"2020",CAR_NAME:"소나타",CAR_INFOR_ID:"CI001",COMPANY_ID:"C001"},
{YEAR:"2021",CAR_NAME:"코나",CAR_INFOR_ID:"CI002",COMPANY_ID:"C002"},
{YEAR:"2019",CAR_NAME:"SM6",CAR_INFOR_ID:"CI003",COMPANY_ID:"C003"},
{YEAR:"2022",CAR_NAME:"3 시리즈",CAR_INFOR_ID:"CI004",COMPANY_ID:"C004"},
{YEAR:"2020",CAR_NAME:"캠리",CAR_INFOR_ID:"CI005",COMPANY_ID:"C005"}];

let outListHtml = ``;
for (let car_hashmap of cars_inform) {
    
outListHtml = `${outListHtml}<tr><td> ${car_hashmap.CAR_NAME}</td>
<td> ${car_hashmap.CAR_INFOR_ID}</td>
<td> ${car_hashmap.COMPANY_ID}</td>
<td> ${car_hashmap.YEAR}</td></tr>`;
}

console.log(outListHtml);

// let loops_carname = document.querySelector('#carname');
// let loops_carid = document.querySelector('#carid');
// let loops_companyid = document.querySelector('#companyid');
// let loops_year = document.querySelector('#year');

// loops_carname.innerHTML = outListHtml;
// loops_carid.innerHTML = outListHtml;
// loops_companyid.innerHTML = outListHtml;
// loops_year.innerHTML = outListHtml;
// for (let car_hashmap of cars_inform){
//     // console.log(`YEAR :${car_hashmap.YEAR},
//     // CAR_NAME :${car_hashmap.CAR_NAME},
//     // CAR_INFOR_ID :${car_hashmap.CAR_INFOR_ID},
//     // COMPANY_ID :${car_hashmap.COMPANY_ID}`);

// outListname = `${outListname}<tr><td> ${car_hashmap['CAR_NAME']}</td>`;
// outListinform=`${outListinform}<td> ${car_hashmap['CAR_INFOR_ID']}</td>`;
// outListcompany=`${outListcompany}<td> ${car_hashmap['COMPANY_ID']}</td>`;
// outListyear=`${outListyear}<td> ${car_hashmap['YEAR']}</td></tr>`;
// }

let loops_carinform = document.querySelector('#carname');
loops_carinform.innerHTML= outListHtml;
// let loops_carname = document.querySelector('#carname');
// let loops_carid = document.querySelector('#carid');
// let loops_companyid = document.querySelector('#companyid');
// let loops_year = document.querySelector('#year');


