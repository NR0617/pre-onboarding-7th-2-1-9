## 👨‍👩‍👧‍👦 9팀

## **Demo Page**

# [💙배포링크](https://assignment-03-alitimobility.herokuapp.com)

> pre-onboarding-7th-2-1-9

![리액트아이콘](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white '리액트아이콘') <br/>
![JS아이콘](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white 'JS아이콘') <br/>
![html5아이콘](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white 'html아이콘') <br/>
![스타일컴포넌트아이콘](https://img.shields.io/badge/styled-components-DB7093?style=flat&logo=styled-components&logoColor=white '스타일컴포넌트아이콘') <br/>
![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)

## **🖥 프로젝트 실행 방법**

```sh
git clone git@github.com:Wanted-07-team-9/wanted_assignment_02.git

cd wanted-pre-onboarding-frontend

npm install

npm start

open http://localhost:3000
```

## **📝 디렉토리 구조 공사중.....🛠**

```
📂src
┣ 📂api
┃   ┗ 📄axiosInstance.js
┗ 📄 index.js
```

## ✏ 토의 내용 및 선정

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/1)
[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/1)

[🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/1)

## 🔒 팀 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

➕ 제목 끝에 마침표 금지
➕ 무엇을 했는지 명확하게 작성

</div>
</details>

<details>
<summary>코딩 컨벤션 규칙</summary>
<div markdown="1">

## **코딩 컨벤션**

- 컴포넌트의 ID사용은 지양한다.
- react의 state는 여러개 사용시 최소 집합을 찾아 사용한다.
- 컴포넌트의 이벤트에서 불필요한 익명함수를 사용하지 않는다. (예시: 함수의 인자가 event 하나인 경우)
- 코드를 설명하는 주석은 가급적 사용하지 않는다.
- 상수는 영문 대문자 스네이크 표기법(Snake case)를 사용한다.(예시: SYMBOLIC_CONSTANTS)
- 반환 값이 불린인 함수는 'is'로 시작한다
- const와 let은 사용 시점에 선언 및 할당한다.
- 함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.
- 이벤트 핸들러는 'on'으로 시작한다.
- 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

</div>
</details>

<details>
<summary>Lint, Format 규칙</summary>
<div markdown="1">

## **Prettier, ESLint 규칙 **

##### prettier

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

##### ESLint

```
  printWidth: 100, // printWidth default 80 => 100 으로 변경
  singleQuote: true, // "" => ''
  arrowParens: 'avoid', // arrow function parameter가 하나일 경우 괄호 생략
```

- </div>
  </details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- react-router-dom
- axios

### dev

- tailwindcss
</div>
</details>

## **Description**

B2C 차량대여 서비스

## **Assignment 1**

- Figma 상의 디자인 및 기능 구현
  - 모바일 웹 기준으로 제작
  - **450px ~ 360px**까지 고려해서 제작
- 필수 요구 사항
  - Figma 상의 디자인 및 기능 구현

## Desktop

![desktop](https://user-images.githubusercontent.com/104307213/199716091-8417f490-c068-41b4-8207-0fcf9ddaa34c.gif)

## Mobile

![mobile](https://user-images.githubusercontent.com/104307213/199716148-f4c5632b-e84e-41ed-b57c-f9dfbbb95614.gif)

## **Assignment 2**

- 차량 리스트

  |                                                           차량이 없을 때 처리                                                            |                                                           차량 불러오는 중 처리                                                            |
  | :--------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |
  | <p align="center">![no-data](https://user-images.githubusercontent.com/104307213/199716339-b98222ce-5dfc-4190-b54a-24713e4b53cc.gif)</p> | <p align="center"> ![loading](https://user-images.githubusercontent.com/104307213/199716296-709ae1f4-4120-4640-acc4-19a6b159c59a.gif) </p> |

- 차량이 없을 때 처리
- 차량 불러오는 중 처리

## 💡 logic

https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/24df00642e63ba2360578e433b127ed894303bd8/src/components/CarList/CarList.js#L13-L31

## **Assignment 3**

- 차랑 상세

![detail](https://user-images.githubusercontent.com/104307213/199718568-de023c01-31f1-4fbc-b48c-e28fcfcecc05.gif)

## 💡 logic

https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/24df00642e63ba2360578e433b127ed894303bd8/src/components/CarDetail/CarDetailInfo.js#L6-L33

## **Assignment 4 (추가 구현 사항)**

- **SEO 구현**
- 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
  - 제목: car.brand + car.name
  - 내용: 월 car.amount 원
  - 사진: 차량 사진

| SEO 구현 |
| :------: |
|          |

## 💡 logic

https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/24df00642e63ba2360578e433b127ed894303bd8/src/components/CarDetail/CarDetail.js#L17-L26
