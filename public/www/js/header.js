// 상단 영역
window.addEventListener("load", function () {
  // header 에 라인의 css 를 적용한다.
  const header = document.querySelector(".header");
  // 변경되는 css 클래스명
  const headerActiveClass = "line-active";
  // 클래스가 적용되는 최소 높이값
  const headerActiveValue = 0;

  /*
   * 스크롤바의 위치에 따라서 css 적용 함수
   *  _html : 대상 html 태그
   *  _tgY : css 가 적용될 위치 값
   *  _active : 적용할 css 클래스명
   *  _scY : 스크롤바의 위치
   */
  function showLine(_html, _tgY, _active, _scY) {
    // 브라우저의 스크롤바의 위치를 파악해야함.
    // 현재 스크롤바의 위치값 알아내기
    // scY = window.scrollY;
    // scY 즉, 스크롤바의 위치가 0 보다 크면 스크롤된거다
    if (_scY > _tgY) {
      // header 객체, 즉, DOM 에 css 목록에  추가하자 (클래스명)
      _html.classList.add(_active);
    } else {
      // header 객체, 즉, DOM 에 css 목록에  제거하자 (클래스명)
      _html.classList.remove(_active);
    }
  }

  showLine(header, headerActiveValue, headerActiveClass, window.scrollY);

  window.addEventListener("scroll", function () {
    showLine(header, headerActiveValue, headerActiveClass, window.scrollY);
  });
});

// 모바일 메뉴관련
window.addEventListener("load", function () {
  // 1. 필요로 한 DOM 요소를 보관한다.
  // 버튼
  const mbBt = document.querySelector(".mobile-menu a");
  // 배경
  const mbBg = document.querySelector(".mb-header-bg");
  // 메뉴
  const mbMenu = document.querySelector(".mb-header-menu");

  // 현재 모바일 메뉴 펼쳐진 상태를 보관
  let mbMenuOpen = false;

  // 2. 버튼 기능
  // 2.1. 클릭하면 아이콘을 바꾼다.
  // 2.2. 클릭하면 모바일 메뉴 및 배경을 보여준다.
  mbBt.addEventListener("click", function (event) {
    // a 태그 이므로 웹브라우저가 갱신 된다.
    // a 태그가 작동이 안되도록 기능을 막는다.
    event.preventDefault();
    // 아이콘 바꾸기
    if (mbMenuOpen) {
      mbBt.classList.remove("mobile-menu-open");
      mbBg.classList.remove("mb-header-bg-show");
      mbMenu.classList.remove("mb-header-menu-show");
      mbMenuOpen = false;
    } else {
      // 메뉴가 펼침이 아닌데 사용자가 클릭하면 메뉴를 펼침.
      mbBt.classList.add("mobile-menu-open");
      mbBg.classList.add("mb-header-bg-show");
      mbMenu.classList.add("mb-header-menu-show");
      mbMenuOpen = true;
    }
  });

  // 반응형 코드
  window.addEventListener("resize", function () {
    // 브라우저의 너비를 알아낸다.
    const winWidth = window.innerWidth;

    if (winWidth > 1024) {
      if (mbMenuOpen) {
        mbBt.classList.remove("mobile-menu-open");
        mbBg.classList.remove("mb-header-bg-show");
        mbMenu.classList.remove("mb-header-menu-show");
        mbMenuOpen = false;
      }
    }
  });
});
