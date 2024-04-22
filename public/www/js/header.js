window.addEventListener("load", function () {
  // header에 라인의 css를 적용한다.
  const header = document.querySelector(".header");
  // 변경되는 css 클래스명
  const headerActiveClass = "line-active";
  // 클래스가 적용되는 최소 높이값
  const headerActiveValue = 0;

  /* 스크롤바의 위치에 따라서 css 적용 함수
   * _html: 대상 html 태그
   * _tgY: css가 적용될 위치 값
   * _active: 적용할 css 클래스명
   * _scY: 스크롤바의 위치
   */
  function showLine(_html, _tgY, _active, _scY) {
    // 브라우저의 스크롤바의 위치를 파악해야 함.
    // 현재 스크롤바의 위치값 알아내기
    // scY = window.scrollY;

    // scY 즉 스크롤바의 위치가 0 보다 크면 스크롤 된 것.
    if (_scY > _tgY) {
      // header 객체 즉, DOM에 css 목록에 추가하자 (클래스명)
      _html.classList.add(_active);
    } else {
      // header 객체 즉, DOM에 css 목록에 제거하자 (클래스명)
      _html.classList.remove(_active);
    }
  }

  window.addEventListener("scroll", function () {
    showLine(header, headerActiveValue, headerActiveClass, window.scrollY);
  });
});
