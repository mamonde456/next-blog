# Next.js 개인 블로그 📝
### 🚀 프로젝트 개요
- 사이트: https://next-blog-six-amber.vercel.app/

학습 내용을 체계적으로 정리하고 공유하기 위해 개발한 개인 블로그 플랫폼입니다.
개발 과정에서 렌더링 최적화, 데이터베이스 설계, 성능 개선 등 다양한 기술적 도전을 해결했습니다.

### 기술 스택
- Next.js, TypeScript, MDX, Firebase, styled-components 
- Deployment: Vercel
- CI/CD: Vercel 자동배포

<p align="center">
<img width="1389" alt="화면" src="https://github.com/user-attachments/assets/f9ea577a-c806-49bf-9c02-5cb6f0832bce" />
</p>

## 구현
**주요 내용**
- 성능 최적화: 15초 -> 0.3초 (정적 파일을 이용한 캐싱 전략)
- 렌더링 전략: SSG -> CSR -> SSR(ISR)
> 관련 글: [추후 입력]

### 주요 기능
- 블로그 게시물: 노션 연동을 통한 학습 내용 출력
- ~~마크다운 에디터: 실시간 프리뷰 지원~~
- ~~임시 저장: IndexedDB + firebase 기반 지원~~
- ~~실시간 소통: 방명록, 쪽지, 팔로잉 시스템~~
- ~~소셜 로그인: GitHub Authentication 연동~~

### 향후 추가될 기능
- 좋아요 (로그인 상관없이)
- 방문자 수 및 조회수
- 댓글
- 블로그 플랫폼 자동 업로드



### 프로젝트 구조
```
next-blog/
├── src/
├── ├── feature/          # 기능별 로직들(컴포넌트, 함수 등)
│   ├── pages/            # 페이지 라우팅
│   ├── components/       # 재사용 컴포넌트(레거시)  
│   ├── utils/            # 유틸리티 함수
│   ├── hooks/            # 커스텀 훅(레거시)
│   └── styles/           # 스타일 파일
├── public/
│   ├── cache/            # 정적 캐시 파일
│   └── ├── mdx/          # MDX 캐시
│   └── ├── metaData.json # meta 데이터 캐시 파일
│   └── ├── slugMap.json  # slug 데이터 캐시 파일
└── __post/              # 마크다운 포스트(레거시)
```


### 블로그 기록

[마크다운 블로그 - md 파일을 이용하여 블로그 구현하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-1)<br/>
[마크다운 블로그 - input을 이용하여 입력값으로 포스팅하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-2)<br/>
[마크다운 블로그 - 임시저장 기능을 만들어보자 & 개선점](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-3)<br/>
[마크다운 블로그 - 추가 기능 덧붙이기 & 개선점](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-3)<br/>

