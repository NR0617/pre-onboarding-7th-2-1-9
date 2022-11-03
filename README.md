# B2C 차량대여 서비스

![badge](https://img.shields.io/badge/React-61dafb?logo=React&logoColor=white&style=flat-square)
![badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![badge](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)

> pre-onboarding-7th-2-1-9

## **Description**

차량 대여를 위해 차량 목록을 불러와서 표시해주는 서비스입니다.  
NEXT.js를 사용하여 제작하였습니다.

## **Demo Page**

[데모 페이지](https://pre-onboarding-7th-2-1-9.vercel.app)

## **Assignment 1**

- Figma 상의 디자인 및 기능 구현
  - 모바일 웹 기준으로 제작
  - **450px ~ 360px**까지 고려해서 제작
- 필수 요구 사항
  - Figma 상의 디자인 및 기능 구현

|                                                   <h2>Google Chrome</h2>                                                    |                                                   <h2>iPhone Safari</h2>                                                    |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/74575497/199493615-50c635bf-175b-4bad-9698-7a97cd7b451d.gif" width=300> | <img src="https://user-images.githubusercontent.com/74575497/199493644-a9460d6b-9c18-444d-af08-bcd2b7667159.gif" width=200> |

## **Assignment 2**

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

## **Assignment 3**

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

## **Assignment 4 (추가 구현 사항)**

- **SEO 구현**
- 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
  - 제목: car.brand + car.name
  - 내용: 월 car.amount 원
  - 사진: 차량 사진

|                                                                     Discord                                                                     |                                                                     Kakao                                                                     |Facebook|
| :---------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |:--:|
| <img width="250" alt="seo_discord" src="https://user-images.githubusercontent.com/74575497/199489718-9a3c3bad-0183-448e-8ac2-f295021e5146.png"> | <img width="271" alt="seo_kakao" src="https://user-images.githubusercontent.com/74575497/199489727-04f6dd93-312d-4ee6-bb69-1f42ecb21fd7.png"> |<img width="250" alt="seo_face" src="https://user-images.githubusercontent.com/74575497/199501362-dd45f033-8a46-46af-9745-001b061cc9d8.png"/>|

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
## **Assignment 5 (추가 구현 사항)**
 - 페이지 전환시 부드러운 애니메이션 효과 추가

## **Getting Started**

## Installation

> kyunghun branch를 Clone 합니다.

```sh
git clone -b kyunghun --single-branch https://github.com/Wanted-07-team-9/pre-onboarding-7th-2-1-9.git

# npm으로 설치 진행
pre-onboarding-7th-2-1-9 %  % npm install
```

## Usage

- 프로젝트 실행 및 빌드 방법

```sh
# Local Dev Server 실행
pre-onboarding-7th-2-1-9 % npm run dev

# Build
pre-onboarding-7th-2-1-9 % npm build
```

## commit msg 규칙

### 1. 커밋 유형 지정하기

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋
