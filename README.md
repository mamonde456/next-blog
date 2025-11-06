# Next.js 개인 블로그

<p align="center">
  <img width="1524" height="814" alt="메인 화면" src="https://github.com/user-attachments/assets/0c53b0f7-57c9-4431-92a5-ad1313fb7857" />
 <img width="1524" height="814" alt="검색 화면" src="https://github.com/user-attachments/assets/4a3f9600-f7b9-4ab7-8e05-bec5ce839b0b" />
<img width="1524" height="814" alt="게시글 상세 화면" src="https://github.com/user-attachments/assets/1e2bc0de-58f8-4968-9f0d-b8b63be46303" />

</p>
<p align="center">
  <a href="https://next-blog-six-amber.vercel.app/">🔗 Live Demo</a>
  ·
  <a href="#주요-기능">Features</a>
  ·
  <a href="#기술-스택">Tech Stack</a>
</p>

## 프로젝트 개요

Notion API를 활용한 개인 기술 블로그 플랫폼입니다.
학습 내용을 효율적으로 정리하고 공유하기 위해 개발했으며, 
**성능 최적화와 사용자 경험** 개선에 중점을 두고 지속적으로 발전시키고 있습니다.

**🔗 배포 URL**: https://next-blog-six-amber.vercel.app/

### 기술 스택
**Frontend**
- Next.js 14 (App Router)
- TypeScript
- styled-components
- MDX (콘텐츠 렌더링)

**Backend & Database**
- Notion API (콘텐츠 관리)
- Firebase Realtime Database (조회수)

**Development & Deployment**
- Vercel (자동 배포)
- Git (버전 관리)

---

## 주요 기능

###  콘텐츠 관리
- **Notion 연동**: Notion에서 글을 작성하면 자동으로 블로그에 게시
- **카테고리 분류**: 기술/회고/일상 3가지 카테고리 + 전체보기
- **검색 기능**: 제목 통합 검색
- **읽기 시간 표기**: 한국어/영어 혼합 텍스트 자동 계산 (350자/분, 225단어/분)

###  사용자 참여
- **실시간 조회수**: Firebase Cloud Firestore 기반 조회수 트래킹

### ⚡ 성능 최적화
- **94% 로딩 속도 개선**: 15초 → 0.28초
- **정적 캐싱**: 파일 기반 로컬 캐시 시스템
- **ISR(Incremental Static Regeneration)**: 60초 주기 백그라운드 갱신

---

##  핵심 구현 사항

### 1. Notion API + MDX 렌더링 최적화

####  문제 상황
- **콜드 스타트** 시 최대 16초, 평균 5초 로딩 시간 발생
- 구글 통계상 "3초 초과 시 이탈률 32% 이상" → 심각한 UX 저해

#### 🔍 병목 구간 분석
```
Notion API 호출 
  → notion-to-md 변환 
  → MDX 컴파일 (rehype-pretty-code)
  → 렌더링
```
- Notion API: 블록 단위 데이터 전송으로 페이지 블록 수에 비례한 지연
- MDX 컴파일: 코드 하이라이팅 처리로 추가 지연
- Cold Start: 서버 재시작 시 15초 이상 소요

#### 💡 해결 과정

**실패한 시도들**
- ❌ Next.js Image 최적화 → 근본 원인 아니어서 효과 미미
- ❌ 클라이언트 파싱 분할 → next-mdx-remote가 Node.js 전용
- ❌ 다른 MDX 라이브러리 교체 → MDX 자체가 무거워 차이 없음

**단계별 최적화**
1. **1차 (ISR 도입)**: `revalidate: 60` 설정
   - 결과: 15초 → 10.45초 (30% 개선)
   
2. **2차 (이미지 최적화)**: Next.js Image 컴포넌트
   - 결과: 약 1초 추가 단축
   
3. **3차 (정적 캐시)**: 파일 기반 캐시 시스템 구축
   - 결과: **0.28초 달성** ⭐

#### 🎯 캐시 시스템 설계

**캐시 전략**
- Redis 대신 **파일 기반 로컬 캐시** 선택
- 이유: 개인 블로그 특성상 비용 절감, 네트워크 통신 없이 즉시 로딩

**캐시 구조**
```
public/cache/
├── slugMap.json          # 제목 → ID 매핑
├── metaData.json         # meta 데이터 → ID 매핑
└── mdx/
    ├── {id}.js           # MDX 컴파일 결과
    └── ...
```

**생명주기 관리**
- 페이지 생성/수정/삭제/복원 4가지 시나리오별 로직 구현
- 24시간 주기 갱신 (Notion 이미지 URL 만료 대응)

#### 📈 성과
- **Before**: 평균 15초 (콜드 스타트), 일반 5초
- **After**: 평균 0.28초 (개발자 도구 Network 탭 측정)
- **개선율**: **94% 향상** (5초 기준)

---


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

---

## 💭 배운 점

### "왜?"라는 질문에서 시작하는 기술 선택
기술 선택을 할 때, "새로워서", "좋아 보여서"가 아니라 
**문제 해결에 직접 기여할 수 있을지**를 기준으로 판단해야 한다는 점을 깨달았습니다.

예를 들어, next-mdx-remote는 예제를 따라 쉽게 도입할 수 있었지만, 
실제 빌드 환경에서 _jsxDev 오류가 발생했고, 해결까지 많은 시간을 소모했습니다. 
결국 mdx-js/mdx로 교체하면서 문제를 해결했습니다.

### 증명 가능한 최적화
"로딩이 빨라진 것 같다"는 주관적 판단은 성능 개선의 근거가 되지 못합니다.
**가설 → 구현 → 측정 → 검증**의 사이클을 반복하며 정량적 수치로 입증되는 최적화를 수행했습니다.

Chrome DevTools, Lighthouse를 통해 실제 로딩 시간과 Performance 지표를 수치로 비교했고,
이를 통해 어떤 변경이 실제로 이득인지 객관적으로 판단할 수 있었습니다.

---
## 배포

**Production**: https://next-blog-six-amber.vercel.app  
**GitHub**: https://github.com/mamonde456/next-blog

---

## 개발 블로그 기록

개발 과정을 블로그에 기록하고 있습니다:
- [마크다운 블로그 - md 파일을 이용하여 블로그 구현하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-1)
- [마크다운 블로그 - input을 이용하여 입력값으로 포스팅하기](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-2)
- [마크다운 블로그 - 임시저장 기능을 만들어보자 & 개선점](https://velog.io/@mamonde456/Next로-마크다운-블로그를-만들어보자-3)
