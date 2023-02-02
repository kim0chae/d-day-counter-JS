'use strict';

let inputDate = '';
function calDiff() {
  // input의 입력값 받아오기
  const inputYear = document.querySelector('#year');
  const inputMonth = document.querySelector('#month');
  const inputDay = document.querySelector('#day');
  const dDay = document.querySelector('#dDay');

  // 받아온 입력값을 계산 가능한 ms로 바꾸기
  inputDate = (new Date(`${inputYear.value}-${inputMonth.value}-${inputDay.value}`)).getTime();
  console.log(inputDate);
  // 오늘 날짜를 ms로 바꾸기
  const today = (new Date()).getTime();
  
  //입력받은 날짜와 오늘 날짜 사이의 시간차 출력
  const diff = inputDate - today; 

  if (inputMonth.value > 12 || inputDay.value > 31 || !inputYear.value || !inputMonth.value || !inputDay.value) {
    dDay.innerHTML = "유효하지 않은 시간대입니다.";
    // 월, 일 input이 유효하지 않은 경우
  } else if (diff <= 0) {
    dDay.innerHTML = "타이머가 종료되었습니다.";
    // 현재 시점보다 과거의 날짜를 입력한 경우
  } else {
    // ms를 년, 월, 일, 시간, 분, 초 단위로 변환하기
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor(diff / (1000*60*60) % 24);
    const diffMin = Math.floor(diff / (1000*60) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    // 남은 시간 출력하기
    dDay.innerHTML = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
  }
}


