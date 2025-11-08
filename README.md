# 📈 Stock AI - Mock Trading Platform

AI 기반 모의 주식 투자 플랫폼으로, 초보 투자자들이 안전하게 투자 경험을 쌓고 투자 지식을 향상시킬 수 있도록 돕습니다.

## 🎯 프로젝트 목표

- 초보 투자자를 위한 안전하고 사용하기 쉬운 모의 투자 플랫폼 제공
- MZ세대 투자자를 위한 맞춤형 투자 정보 및 분석 제공
- 직장인을 위한 빠르고 편리한 주식 거래 환경 제공

## 👥 타겟 사용자

- 주식 투자를 처음 시작하는 초보 투자자
- 트렌디한 투자에 관심 있는 MZ세대 투자자
- 부업으로 투자를 하고 싶은 직장인

## ✨ 주요 기능

### 📊 실시간 주식 시세
- 실시간 주식 가격 정보 제공
- 주요 지표 및 차트 시각화

### 💰 모의 거래
- 가상 자금을 활용한 안전한 투자 연습
- 실제와 동일한 거래 환경 제공
- 매수/매도 주문 및 거래 내역 관리

### 📈 투자 분석 리포트
- AI 기반 투자 분석
- 개인 맞춤형 투자 리포트 제공

### 📰 실시간 뉴스 피드
- 실시간 주식 시장 뉴스 제공
- 관심 종목 관련 뉴스 알림

### ⭐ 관심 종목 등록 및 알림
- 관심 종목 등록 및 관리
- 가격 변동 알림 기능

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui, Lucide React
- **State Management**: @tanstack/react-query
- **Utilities**: es-toolkit, date-fns, zod

### Backend
- **Database**: Supabase (예정)
- **AI/ML**: AI 기반 분석 기능 (예정)

## 📁 프로젝트 구조

```
/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── dashboard/          # 대시보드 페이지
│   │   ├── trade/              # 거래 페이지
│   │   ├── reports/            # 리포트 페이지
│   │   └── login/              # 로그인 페이지
│   ├── components/             # 공통 컴포넌트
│   │   ├── layout/             # 레이아웃 컴포넌트
│   │   └── ui/                 # UI 컴포넌트
│   ├── features/               # 기능별 모듈
│   │   └── mock-trading/       # 모의 거래 기능
│   │       ├── components/     # 거래 관련 컴포넌트
│   │       ├── hooks/          # 커스텀 훅
│   │       ├── lib/            # 비즈니스 로직
│   │       ├── api.ts          # API 호출
│   │       ├── schema.ts       # 데이터 스키마
│   │       ├── constants.ts    # 상수
│   │       ├── types.ts        # 타입 정의
│   │       └── utils.ts        # 유틸리티 함수
│   └── lib/                    # 공통 라이브러리
│       ├── data/               # 더미 데이터
│       ├── design/             # 디자인 토큰
│       └── utils.ts            # 유틸리티 함수
├── public/                     # 정적 파일
└── vooster-docs/              # 프로젝트 문서
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 20.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/juno-ryu/stock-ai.git

# 프로젝트 디렉토리로 이동
cd stock-ai

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 린트

```bash
npm run lint
```

## 📱 주요 페이지

- `/` - 랜딩 페이지
- `/login` - 로그인 페이지
- `/dashboard` - 대시보드 (포트폴리오 요약, 시장 동향)
- `/trade` - 거래 페이지 (주식 검색, 매수/매도)
- `/reports` - 투자 분석 리포트

## 🎨 UI/UX 특징

- **초보자 친화적**: 간단하고 직관적인 인터페이스
- **모던한 디자인**: MZ세대를 위한 트렌디한 디자인
- **빠른 네비게이션**: 직장인을 위한 빠르고 쉬운 탐색

## 🔮 향후 계획

- [ ] 소셜 트레이딩 기능 추가 (다른 투자자 포트폴리오 팔로우)
- [ ] 자동 거래 기능 추가 (자동 거래 규칙 설정)
- [ ] 투자 상품 확대 (주식, 펀드, 기타 자산)
- [ ] Supabase 연동 및 실제 데이터베이스 구축
- [ ] AI 기반 투자 분석 고도화

## 📄 라이선스

이 프로젝트는 개인 프로젝트입니다.

## 👨‍💻 개발자

Juno Ryu - [@juno-ryu](https://github.com/juno-ryu)

---

**Note**: 이 프로젝트는 현재 개발 중이며, 모의 투자 목적으로만 사용됩니다. 실제 금융 거래와는 무관합니다.

