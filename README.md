### React Hook

* 개념

  - eject : <br>
    babel, wapack 등의 설정들을 모두 꺼낸다. 하지만 한번 꺼내면 다시 넣을 수 없다. <br>
    즉, 함부로 쓰면 안됨

  - npm start / npm run build
    npm start <br>
      : compoile & bundling 2) .env.development 실행됨

    npm run build <br>
      : compoile & bundling 2) .env.production 실행됨

<br>

* 자동완성 

  - rsc : 함수형 컴포넌트 자동완성

<br>

* 기타

  - 객체 key값 동적으로 설정

    <br>
    
    `
    ex>  
    let name = "myName"
    let obj = {
        [name]: "리액트"
    }
    `

    - onKeyDown / onKeyPress
      onKeyPress는 사용 중단됨. 이제 onKeyDown으로 쓰면됨

          <br>
          `
          onKeyPress={handleEnter} (X)
          onKeyDown={handleEnter} (O)
          `

    - component Props
      컴포넌트 하단에 Props에 대한 설정

        <br>
        `
            // props를 해당 컴포넌트에서 선언 해줄수 있음
            MyComponentFunc.defaultProps = {
                name: "리액트JS",
            };

            // props의 type을 주면 warning을 막을수 있다.
            // 빌드 시, warning은 지우고 빌드해야 한다.
            MyComponentFunc.propTypes = {
                name: PropTypes.string,
                age: PropTypes.number.isRequired,
            };

      `

    - reduxjs/toolkit 으로 변경
      redux, redux-thunk => reduxjs/toolkit

        <br>
        `
            1) package.json에서 삭제
            "devDependencies": {
                "redux-devtools-extension": "^2.13.9"
            }
            는 composeWithDevTools 때문에 사용한 것이므로 삭제
            
            2) 
            "redux": "^4.1.1",
            "redux-thunk": "^2.3.0",
            도 삭제

            3) reduxjs/toolkit 설치
                $  npm i @reduxjs/toolkit

            4) configureStore 사용

      `

    - 클래스 컴포넌트 생명주기 (Life Cycle)
      componentDidMount : <br>
      hook useEffect()
      <br><br>
      shouldComponentUpdate : <br>
      return 값이 true면 재렌더링(render) / false면 렌더링(X)

<br><br>
[강의] <br>
주최 : 한국소프트웨어기술진흥협회 & HRD
기관 : 한국소프트웨어교육원
유형 : 국가인적자원개발컨소시엄
