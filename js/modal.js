/* 운동 카드를 클릭하면 그 날짜의 상세 내용을 보여 줘요. */
      function 상세보기열기(번호) {
        const 하루 = 운동일지.find(function (기록) {
          return 기록.번호 === 번호;
        });

        if (하루 === undefined) return;

        document.getElementById("상세날짜").innerText = 하루.날짜;

        if (하루.메모 === "") {
          document.getElementById("상세메모").style.display = "none";
        } else {
          document.getElementById("상세메모").style.display = "block";
          document.getElementById("상세메모").innerText = 하루.메모;
        }

        let 운동HTML = "";

        하루.운동목록.map(function (운동, 순서) {
          운동HTML = 운동HTML + `
            <div class="상세종목">
              <div class="상세종목이름">${순서 + 1}. ${운동.종목} · ${운동.부위}</div>
              <div class="상세종목설명">${운동설명만들기(운동)}</div>
              ${운동.메모 ? `<div class="상세종목설명">메모 · ${운동.메모}</div>` : ""}
            </div>
          `;
        });

        document.getElementById("상세운동목록").innerHTML = 운동HTML;
        document.getElementById("상세보기모달").style.display = "flex";
        document.body.style.overflow = "hidden";
      }

      function 상세보기닫기() {
        document.getElementById("상세보기모달").style.display = "none";
        document.body.style.overflow = "";
      }

      /* 운동 등록 모달을 열어요. */
      function 모달열기() {
        document.getElementById("운동등록모달").style.display = "flex";
        document.getElementById("날짜입력").value = 오늘날짜가져오기();
        document.getElementById("유형입력").value = "웨이트";
        document.getElementById("부위입력").value = "가슴";
        운동유형바꾸기();
        document.body.style.overflow = "hidden";
      }

      function 모달닫기() {
        document.getElementById("운동등록모달").style.display = "none";
        document.body.style.overflow = "";
      }

      /* 저장 완료 모달을 보여 줘요. */
      function 완료모달열기() {
        document.getElementById("저장완료모달").style.display = "flex";
        document.body.style.overflow = "hidden";
      }

      function 완료모달닫기() {
        document.getElementById("저장완료모달").style.display = "none";
        document.body.style.overflow = "";
      }
