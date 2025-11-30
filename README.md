# Calendar All Select Button 📅

Google Calendar에서 왼쪽 사이드바의 모든 캘린더를 한 번에 선택/해제할 수 있는 버튼을 추가하는 Chrome 확장 프로그램입니다.

## 기능

- ✅ "My calendars" 헤더에 체크마크(✓) 아이콘 추가
- 🔄 모든 캘린더를 한 번에 선택/해제
- 🎯 기존 UI에 자연스럽게 통합

## 설치 방법

### 개발자 모드로 로드하기

1. Chrome 브라우저를 엽니다
2. 주소창에 `chrome://extensions/` 입력
3. 오른쪽 상단의 **개발자 모드** 토글을 활성화
4. **Load unpacked** (압축해제된 확장 프로그램을 로드합니다) 클릭
5. 이 프로젝트 폴더 선택: `/Users/type/Dev Projects/google-calendar-calendar-all-select-button`
6. Google Calendar (https://calendar.google.com) 방문

## 파일 구조

```
calendar-all-select-button/
├── manifest.json       # 확장 프로그램 설정
├── content.js         # 메인 로직
└── README.md         # 이 파일
```

## 사용 방법

1. Google Calendar를 엽니다
2. 왼쪽 사이드바 "My calendars" 텍스트 옆에 **✓** 아이콘이 나타납니다
3. **✓** 아이콘을 클릭하면 모든 캘린더가 선택되거나 해제됩니다

## 기술 스택

- Manifest V3
- Vanilla JavaScript
- Chrome Extensions API

## 주의사항

- Google Calendar의 DOM 구조가 변경되면 작동하지 않을 수 있습니다
- 첫 로드 시 아이콘이 나타나지 않으면 페이지를 새로고침해주세요
- 확장 프로그램은 Chrome 기본 아이콘을 사용합니다

## 라이선스

MIT

## 개발자

확장 프로그램 수정 및 개선 환영합니다!

