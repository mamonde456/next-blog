# Next.js 로 정적 블로그 만들기

firebase와 Next를 사용하여 블로그를 제작해보는 사이드 프로젝트.

- 계속 수정해나가고 있습니다.

- 사이트: https://next-blog-six-amber.vercel.app/

- 기술 스택: Next, TypeScript, Firebase, styled-components
- 배포: vercel

<p align="center">
<img src="https://github.com/mamonde456/next-blog/assets/81732659/06b8adf6-6049-4c56-8e25-403228c0500c" />
</p>

### 로그인 화면

<p align="center">
<img src="https://github.com/mamonde456/next-blog/assets/81732659/37bf99a7-ea92-4dd2-8328-8e081311ed89" />
</p>

### 글작성 화면

<p align="center">
<img src="https://github.com/mamonde456/next-blog/assets/81732659/1661ee0d-d675-4b0c-b2b4-ed7a809bfdf4" />
</p>

## 실행

아래의 커맨드 실행

```
// git clone
git clone https://github.com/mamonde456/next-blog.git

// 설치
npm i

// 실행
npm run dev

```

## 구현

### 블로그 기록

[마크다운 블로그 - md 파일을 이용하여 블로그 구현하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-1)<br/>
[마크다운 블로그 - input을 이용하여 입력값으로 포스팅하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-2)<br/>
[마크다운 블로그 - 임시저장 기능을 만들어보자 & 개선점](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-3)<br/>
[마크다운 블로그 - 추가 기능 덧붙이기 & 개선점](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-3)<br/>

### 구현 목록

- 게시물 리스트
- 게시물 상세 페이지
- 사용자 입력란
- 입력란에 제목과 본문란 분류
- 임시글 리스트
- 임시글 재작성

- 로그인/로그아웃
- 계정 정보 페이지
- 팔로우/언팔로우
- 최신탭/팔로우탭
- 문서 저장/수정/삭제

## 수정 및 추가 사항

#### 23.10.23

- 글작성 시 동일한 id 가 생성되어 이전에 작성하던 글이 보이는 이슈 수정
  - router가 변경될 때, id를 새로 생성
- 스타일 적용 및 수정

#### 23.11.01

- title을 slog로 가공하는 로직에서 replace 조건을 정규식으로 변경
- 게시글 저장 후 상세 페이지 클릭 시 404 에러 수정
  - fallback을 blocking으로 변경하여 완료될 때까지 대기

#### 23.11.02

- 파일 순서 정렬
  - `/__post` 경로에 파일이 저장되면, 자동정렬을 통해 리스트의 순서가 정렬되지 않는 이슈
  - meta 데이터의 created_at을 한국 시간에 맞춰 밀리초까지 저장 후 정렬하여 props로 전달

#### 24.1.16

`firebase 연결`

- 로그인/로그아웃
  - 로그인 상태 유효성 검사 (HOC)
- 계정 정보 페이지
  - 프로필 이미지 업로드(firebase storage)
  - 프로필 이미지 자르기
- 팔로우/언팔로우
- 최신탭/팔로우탭
- 문서 저장 (로컬/DB 저장 함수 분류)
  - firebase DB에 문서 추가/삭제
  - 로컬에 문서 추가
- 신규글 작성/임시글 재작성/수정 분류

#### 24.1.22

- 주석 삭제
- 컴포넌트 분리
  - 프로필 이미지 크롭 컴포넌트
  - BlogNavbar 컴포넌트
  - BlogPostList 컴포넌트
- checkAuthentication 함수 => useAuth 훅으로 대체(중복 제거) & import useAuth로 변경
- saves/index.tsx 파일에 style 추가

#### 24.1.23

- util 함수에 로그인 상태 체크 함수 추가 (리액트 훅 주기와 맞지 않음.)
- matter 데이터에 description 추가
- 로컬 문서 삭제 로직 추가
- HTTP 메서드에 따른 분기 처리
  - 문서 수정 로직 추가
  - 문서 삭제 로직 추가
- 로그인한 상태로 로그인 페이지 접속 시 메인홈으로 이동
- className에 따른 렌더링 이슈 수정
- 주석 삭제
- style css 수정

#### 24.1.24

- 로컬 문서 가져오기 로직 추가
- 로컬 문서 삭제 쿼리 수정
- 로컬 문서 GET API 로직 추가
- slog 대신 id로 대체
- window prop을 DOM 요소가 인식하지 못하는 문제 수정
- babel styled-components plugins 추가

#### 24.1.30

- 컴포넌트 props 타입 변경
- 한국 시간을 구하는 함수 로직 -> common 파일로 이동

#### 24.2.7

- 한국 시간을 구하는 로직 수정 -> 하루 전으로 저장되는 오류 수정
- ui style 변경 (트위터 모방)
- blog 관련 타입을 별도 파일로 분리
- ui 구성을 구역별로 컴포넌트화
  - 메인 메뉴 컴포넌트
  - 메인 포스트 컴포넌트
  - 사이드 영역 컴포넌트
- 오픈 소스 icon 컴포넌트 추가
- like/bookmark 로직 추가(읽기/쓰기/삭제)
- DB 저장 로직을 별도로 분리 (indexedDB/firebase -> utils/blog.ts)

#### 24.3.18

- 방명록 페이지 추가 (방명록 저장/읽기)
- firebase에 포스트 저장/읽기 시 decode/encode
- 쪽지 페이지 추가 (사용자 조회/참여한 채팅방 조회)
- 로그아웃 추가

#### 24.3.19

- 검색 로직 추가

#### 24.6.14

- 기본 프로필 이미지 추가
- 프로필 이미지 설정 추가
- 버그 수정 (게시물 최신순 출력)

#### 24.6.27

- 팔로우/언팔로우 오류 수정
- 채팅방 중복 생성 오류 수정
- 게시글 정렬 오류 수정
- 프로필 이미지 파일 없이 submit 시 오류 수정
- 방명록 ui style 수정

### 개선점

- style css 수정 (작업중)
  - ~~UI 라이브러리 사용하여 개선 필요~~
  - 반응형 작업 필요
- 코드 리팩토링 및 정리
- 프로필 이미지 자르기 기능에서 자르기 영역이 이미지 바깥에서 시작하는 오류 수정
- ~~firebase에 문서 저장시 마크다운 형식으로 저장되지 않는 점 개선 필요~~
- 현재 로그인한 사용자 감지하는 함수 통일 필요
- ~~로컬 파일 삭제 로직~~
- 쪽지 페이지 자동 스크롤 기능 수정 필요

- 버그 수정 필요 (각 페이지 별 테스트 필요)
- 채팅방/ 사용자 프로필 클릭 시 기존에 열린 채팅방으로 이동 기능 추가 필요
