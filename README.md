# B2C 차량대여 서비스 (👨‍👩‍👧‍👦 9팀)

> pre-onboarding-7th-2-1-9

| <img src="https://avatars.githubusercontent.com/u/58911113?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/74575497?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/72599761?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           👑 권준                                           |                                           김경훈                                            |                                           김수정                                           |
|                            [@jun-05](https://github.com/jun-05)                             |                          [@tirhande](https://github.com/tirhande)                           |                        [@crystal993](https://github.com/crystal993)                        |

| <img src="https://avatars.githubusercontent.com/u/104307213?v=4" width="120" height="120"/> | <img src="https://avatars.githubusercontent.com/u/94212747?v=4" width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/77476348?v=4"  width="120" height="120" /> | <img src="https://avatars.githubusercontent.com/u/76990149?v=4" width="120" height="120"/> |
| :-----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
|                                           송슬기                                            |                                           오나래                                            |                                            이창훈                                            |                                           전이진                                           |
|                          [@songseul](https://github.com/songseul)                           |                            [@NR0617](https://github.com/NR0617)                             |                 [@anotheranotherhoon](https://github.com/anotheranotherhoon)                 |                          [@pongdang](https://github.com/pongdang)                          |

## **✨ 배포링크**

## [데모 페이지 바로가기](https://pre-onboarding-7th-2-1-9.vercel.app)

## 📝 목차

- [📰 프로젝트 설명](#📰-프로젝트-설명)
- [🛠️ Dev Tools](#🛠️-dev-tools)
- [🖥 프로젝트 실행 방법](#🖥-프로젝트-실행-방법)

## **📰 프로젝트 설명**

차량 대여를 위해 차량 목록을 불러와서 표시해주는 서비스입니다.

## **🛠️ Dev Tools**

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square) ![badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white) ![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)

## **🖥 프로젝트 실행 방법**

```sh
### Installation
# Repositorie Clone
git clone https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9.git

# npm으로 설치 진행
pre-onboarding-7th-2-1-9 %  % npm install

### Usage
# Local Dev Server 실행
pre-onboarding-7th-2-1-9 % npm run dev

# Build
pre-onboarding-7th-2-1-9 % npm build
```

## **✏ 토의 내용 및 선정**

[🖍 1차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/1)

[🖍 2차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/2)

[🖍 3차 토의결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/discussions/8)

[🥇 선정 결과](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/pull/23#issue-1435416747)

## **📝 디렉토리 구조**

```sh
📂 pre-onboarding-7th-2-1-9
┣ 📂 page
┃   ┣ 📂 api  # SSR api 호출 (미사용)
┃   ┗ 📂 car  # 차량상세 페이지를 위한 디렉토리입니다.
┣ 📂 public
┣ 📂 src
┃   ┣ 📂 api  # axios 호출 관련
┃   ┣ 📂 components  # 재사용성 높은 컴포넌트들 모음
┃   ┣ 📂 container  # 페이지별 컴포넌트, 스타일 모음
┃   ┣ 📂 stores  # context api 저장소
┃   ┣ 📂 styles  # global style
┃   ┗ 📂 utils  # 재사용성 높은 함수 모음
┗ 📄 README.md
```

## **💡 Assignment 목차**

- [1️⃣ Assignment](#1️⃣-assignment)
- [2️⃣ Assignment](#2️⃣-assignment)
- [3️⃣ Assignment](#3️⃣-assignment)
- [4️⃣ Assignment](#4️⃣-assignment-추가-구현-사항)
- [5️⃣ Assignment](#5️⃣-assignment-추가-구현-사항)

### **1️⃣ Assignment**

- Figma 상의 디자인 및 기능 구현
  - 모바일 웹 기준으로 제작
  - **450px ~ 360px**까지 고려해서 제작
- 필수 요구 사항
  - Figma 상의 디자인 및 기능 구현

|                                                   <h2>Google Chrome</h2>                                                    |                                                   <h2>iPhone Safari</h2>                                                    |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/74575497/199493615-50c635bf-175b-4bad-9698-7a97cd7b451d.gif" width=300> | <img src="https://user-images.githubusercontent.com/74575497/199493644-a9460d6b-9c18-444d-af08-bcd2b7667159.gif" width=200> |

### **2️⃣ Assignment**

- 차량 리스트

  |                                                                차량이 없을 때 처리                                                                |                                                               차량 불러오는 중 처리                                                               |
  | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
  | <p align="center"><img src="https://user-images.githubusercontent.com/74575497/199498073-2eb2b5c9-7c87-4587-8a75-a1934135e9de.png" width=200></p> | <p align="center"><img src="https://user-images.githubusercontent.com/74575497/199497026-f4102819-acba-4fd8-b179-9b51750a17c9.gif" width=200></p> |

- 차량이 없을 때 처리

```js
//carList가 비어있을때 Empty 컴포넌트 리턴
const { carList } = useCar();
if (!carList.length) return <Empty text={'차량이 없습니다.'} />;
```

- 차량 불러오는 중 처리

```js
// 로딩중이면 로딩카 컴포넌트 소환
{
  isLoading && <LoadingCar />;
}
```

### **3️⃣ Assignment**

- 차랑 상세

<p align="center">
<img src="https://user-images.githubusercontent.com/74575497/199497550-ca9526b3-9b09-4102-af71-f275c743153b.png" width=200>
</p>

```js
const { isLoading } = useCarDetail();

if (isLoading) {
  return <LoadingCar />;
}
return (
  <>
    {isLoading && <LoadingCar />}
    <DetailSection>
      <Summary />
      <SubDecription />
      <Blank />
    </DetailSection>
  </>
);
```

[Summary 컴포넌트 링크](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/efe77d1b4737c8a1c2eabcb54631a652fee4d1b4/src/container/Detail/component/Summary.jsx)

[SubDescription 컴포넌트 링크](https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9/blob/efe77d1b4737c8a1c2eabcb54631a652fee4d1b4/src/container/Detail/component/SubDescription.jsx)

### **4️⃣ Assignment (추가 구현 사항)**

- **SEO 구현**
- 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
  - 제목: car.brand + car.name
  - 내용: 월 car.amount 원
  - 사진: 차량 사진

|                                                                     Discord                                                                     |                                                                     Kakao                                                                     |                                                                   Facebook                                                                    |
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="250" alt="seo_discord" src="https://user-images.githubusercontent.com/74575497/199489718-9a3c3bad-0183-448e-8ac2-f295021e5146.png"> | <img width="271" alt="seo_kakao" src="https://user-images.githubusercontent.com/74575497/199489727-04f6dd93-312d-4ee6-bb69-1f42ecb21fd7.png"> | <img width="250" alt="seo_face" src="https://user-images.githubusercontent.com/74575497/199501362-dd45f033-8a46-46af-9745-001b061cc9d8.png"/> |

```js
// next-seo 라이브러리를 사용하여 meta 태그 작성
<NextSeo
  title={`${data[0].attribute.brand} ${data[0].attribute.name}`}
  description={curreny}
  canonical="https://pre-onboarding-7th-2-1-9.vercel.app/"
  openGraph={{
    type: 'website',
    url: `https://pre-onboarding-7th-2-1-9.vercel.app/car/${data[0].id}`,
    title: `${data[0].attribute.brand} ${data[0].attribute.name}`,
    description: curreny,
    images: [{ url: data[0].attribute.imageUrl }],
    site_name: 'B2C 차량대여 서비스',
  }}
/>
```

### **5️⃣ Assignment (+추가 구현 사항)**

- 페이지 전환시 부드러운 애니메이션 효과 추가

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

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

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
<summary>Lint, Formatter 규칙</summary>
<div markdown="1">

## **Prettier, ESLint 규칙**

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

 </div>
  </details>

## 📚 사용 Library

<details>
<summary>Lib List</summary>
<div markdown="1">

### 공통 Lib

- eslint
- eslint-config-prettier
- husky
- prettier

### production

- nextjs
- @mui/material
- framer-motion
- next-seo
- styled-components
- axios
</div>
</details>
