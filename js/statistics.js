/* 이번 달 운동 기록을 간단하게 계산해요. */
      function 통계그리기() {
        const 이번달 = 통계기준월;
        let 운동일수 = 0;
        let 종목수 = 0;
        let 세트수 = 0;
        let 유산소거리 = 0;
        let 가슴 = 0;
        let 등 = 0;
        let 어깨 = 0;
        let 이두 = 0;
        let 삼두 = 0;
        let 하체 = 0;
        let 코어 = 0;
        let 유산소 = 0;
        let 종목횟수 = {};

        운동일지.map(function (하루) {
          if (하루.날짜.slice(0, 7) !== 이번달) return;

          운동일수 = 운동일수 + 1;

          하루.운동목록.map(function (운동) {
            종목수 = 종목수 + 1;

            if (운동.유형 === "웨이트") 세트수 = 세트수 + 운동.세트수;
            if (운동.유형 === "유산소") 유산소거리 = 유산소거리 + 운동.거리;

            if (운동.부위 === "가슴") 가슴 = 가슴 + 1;
            if (운동.부위 === "등") 등 = 등 + 1;
            if (운동.부위 === "어깨") 어깨 = 어깨 + 1;
            if (운동.부위 === "이두") 이두 = 이두 + 1;
            if (운동.부위 === "삼두") 삼두 = 삼두 + 1;
            if (운동.부위 === "하체") 하체 = 하체 + 1;
            if (운동.부위 === "코어") 코어 = 코어 + 1;
            if (운동.부위 === "유산소") 유산소 = 유산소 + 1;

            if (종목횟수[운동.종목] === undefined) 종목횟수[운동.종목] = 0;
            종목횟수[운동.종목] = 종목횟수[운동.종목] + 1;
          });
        });

        const 년월 = 이번달.split("-");
        document.getElementById("월제목").innerText =
          년월[0] + "년 " + Number(년월[1]) + "월";

        document.getElementById("운동일수").innerText = 운동일수 + "일";
        document.getElementById("종목수").innerText = 종목수 + "개";
        document.getElementById("세트수").innerText = 세트수 + "세트";
        document.getElementById("유산소거리").innerText =
          유산소거리.toFixed(1) + "km";

        const 전체 = 가슴 + 등 + 어깨 + 이두 + 삼두 + 하체 + 코어 + 유산소;
        부위막대그리기("가슴", 가슴, 전체);
        부위막대그리기("등", 등, 전체);
        부위막대그리기("어깨", 어깨, 전체);
        부위막대그리기("이두", 이두, 전체);
        부위막대그리기("삼두", 삼두, 전체);
        부위막대그리기("하체", 하체, 전체);
        부위막대그리기("코어", 코어, 전체);
        부위막대그리기("유산소", 유산소, 전체);

        let 가장많이한종목 = "기록 없음";
        let 가장많은횟수 = 0;

        Object.keys(종목횟수).map(function (종목) {
          if (종목횟수[종목] > 가장많은횟수) {
            가장많은횟수 = 종목횟수[종목];
            가장많이한종목 = 종목;
          }
        });

        document.getElementById("자주한운동").innerText = 가장많이한종목;
      }

      /* 화살표 버튼을 누르면 통계에서 보는 달을 바꿔요. */
      function 월바꾸기(이동값) {
        const 년월 = 통계기준월.split("-");
        const 날짜 = new Date(Number(년월[0]), Number(년월[1]) - 1 + 이동값, 1);

        const 년 = 날짜.getFullYear();
        const 월 = String(날짜.getMonth() + 1).padStart(2, "0");

        통계기준월 = 년 + "-" + 월;
        통계그리기();
      }

      function 부위막대그리기(부위, 개수, 전체) {
        let 퍼센트 = 0;
        if (전체 > 0) 퍼센트 = Math.round((개수 / 전체) * 100);

        document.getElementById(부위 + "퍼센트").innerText = 퍼센트 + "%";
        document.getElementById(부위 + "막대").style.width = 퍼센트 + "%";
      }
