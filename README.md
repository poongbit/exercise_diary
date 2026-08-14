# Exercise_diary

[운동 일지 사이트 바로가기](https://exercise-diary.rladydgnj.workers.dev)




## 스크린샷

<img width="1067" height="829" alt="스크린샷 2026-08-14 오후 3 58 34" src="https://github.com/user-attachments/assets/6e5c4f30-ecd3-44a8-8fae-7e533c427b0b" />

<img width="1067" height="829" alt="스크린샷 2026-08-14 오후 3 58 39" src="https://github.com/user-attachments/assets/d17f3152-e956-4014-94f7-1bd6c83c61fe" />

<img width="1067" height="829" alt="스크린샷 2026-08-14 오후 3 58 46" src="https://github.com/user-attachments/assets/d3d3fe26-0108-4af6-858c-bb0abb05e34c" />

<img width="1067" height="756" alt="스크린샷 2026-08-14 오후 3 58 57" src="https://github.com/user-attachments/assets/02dedb9d-c1ee-425a-b4ef-0fda31dd371a" />






## 핵심 구현 내용

### 1. LocalStorage를 이용한 운동 기록 저장

사용자가 등록한 운동 데이터를 배열 형태로 관리하고,
JSON.stringify()를 이용해 localStorage에 저장했습니다.

페이지를 새로고침해도 기존 운동 기록을 다시 불러올 수 있도록 구현했습니다.

### 2. 같은 날짜의 운동 기록 묶기

같은 날짜에 새로운 운동을 등록하면 새로운 카드가 생성되는 대신,
기존 날짜의 운동목록 배열에 운동이 추가되도록 구현했습니다.

### 3. 운동 통계

이번 달 운동 기록을 기준으로 운동일, 종목 수, 웨이트 세트 수,
유산소 거리와 부위별 운동 비율을 계산했습니다.

### 4. 날씨 API 활용

브라우저의 Geolocation API로 현재 위치를 가져온 뒤,
Open-Meteo API를 이용해 현재 기온, 습도, 강수량,
미세먼지와 AQI 정보를 화면에 표시합니다.

### 5. 오늘의 운동 추천

최근 운동 기록에서 상대적으로 적게 운동한 부위를 찾고,
날씨와 공기질 정보를 함께 확인해 간단한 운동 추천 문장을 제공합니다.

## 향후 개선할 계획 및 추가 기능

- 운동 기록 수정 기능
- 주간 / 연간 운동 통계
- 운동 목표 설정 기능
- 운동 기록 백업 기능
- 서버 및 데이터베이스 연동
- 운동 기록 일지 X에 자동으로 업로드 구현
