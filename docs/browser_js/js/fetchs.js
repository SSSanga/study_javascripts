// 정부공공데이터포털 대구의료기기판매점
function fetchDatagokr() {
    let url = 'https://apis.data.go.kr/3450000/medicalDevSalesPlasService/getMedicalDevSalesPlas?serviceKey=BoygPZjC27pxm92hSposjnSob2u36vziS1rzIzxkrL9QxmlhB0SMARwLfNlBE3wrE7nnw34zLmmv0a6amvW4xg%3D%3D&currentPage=1&perPage=10&SN=1'
    let request = fetch(url)
        .then((result) => {
            result.json();
        }) //입력받기
        .then((data) => {
            console.log(data);
        }) //실제 결과 값 (콘솔창) 
        .catch(errorMeg => {
            console.log(errorMeg);
        });// 에러 났을때 
}

// db_cars 자동차 정보 상세 standard
// url+header or body값 seting을 같이 넘길때 
function fetchCarInforDetail() {
    let url = 'http://127.0.0.1:8080/selectAll/CI002';
    let request = fetch(url)
        .then((result) => {
            return result.json();
        }) //입력받기
        .then((data) => {
            console.log(data);
        }) //실제 결과 값 (콘솔창) 
        .catch((errorMeg) => {
            console.log(errorMeg);
        });// 에러 났을때 
}
// 자동차정보수정_기존은 fetch(url)여기의 url을 변경..?
function fetchCarInforUpdate() {
    // 192.168.0.224:8080/update
    // Header의 Content-Type: application/json
    //potstman의 body:
    // { 
    //     "CAR_NAME": "yojulab",
    //     "CAR_INFOR_ID": "CI002"
    // }
    let url = 'http://127.0.0.1:8080/update';
    let option = {
        method :"PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "CAR_NAME": "yojulab", "CAR_INFOR_ID": "CI002" })
    }
    let request = fetch(url,option)
        .then((result) => {
            return result.json();
        }) //입력받기
        .then((data) => {
            console.log(data);
        }) //실제 결과 값 (콘솔창) 
        .catch(errorMeg => {
            console.log(errorMeg);
        });// 에러 났을때 
} 