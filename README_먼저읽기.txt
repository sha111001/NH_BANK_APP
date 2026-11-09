내일 발표용: Figma 프로토타입을 별도 URL로 보여주는 PWA 껍데기

이 파일은 원본 피그마 프로토타입을 웹페이지에 iframe으로 표시합니다.
실제 웹앱 코드로 변환한 것이 아니며, 피그마 인터넷 연결 및 접근 권한이 필요합니다.

[5분 설정]
1. 원본 Figma Design 파일 → Present(▶) → Share prototype → Copy link.
2. 이 폴더의 config.js 파일을 메모장으로 엽니다.
3. prototypeUrl: "" 의 따옴표 사이에 위 링크를 그대로 붙여넣습니다.
4. config.js 저장 후, index.html / config.js / sw.js / manifest.webmanifest / icons 폴더가 들어있는
   'nh_prototype_pwa' 폴더 전체를 Netlify Drop (https://app.netlify.com/drop)에 드래그해 배포합니다.
5. 발급된 https://...netlify.app 주소를 휴대폰 브라우저에서 엽니다.
6. iPhone: Safari > 공유 > 홈 화면에 추가 > 웹 앱으로 열기(표시되는 경우) > 추가
   Android: Chrome > 메뉴(⋮) > 앱 설치/홈 화면에 추가.
7. 앱 아이콘으로 실행합니다. 일반 브라우저에서 그냥 링크를 누르면 주소창이 보일 수 있습니다.

[config.js 편집 없이 테스트]
Netlify에 폴더를 그대로 올리고 열린 웹사이트의 안내 화면에 피그마 URL을 붙여넣어도
현재 휴대폰에서 바로 시연 가능합니다. 단, 다른 사람에게 URL을 공유하면 그 사람도 설정해야 합니다.
공유용 발표 URL을 만들려면 config.js에 URL을 설정한 후 배포하세요.

[주의]
- Figma Share에서 시연자에게 열람 권한이 있어야 합니다.
- Figma의 /proto/ 링크만 사용하세요. /design/ 링크는 안 됩니다.
- iframe 안의 피그마 인터페이스/로그인 제한/브라우저 호환성이 다를 수 있습니다.
- 터치, 스크롤, 오버레이, 화면 크기를 반드시 실제 휴대폰에서 테스트하세요.
- 앱 화면은 오프라인으로 동작하지 않습니다. 서비스 워커는 껍데기 파일만 캐싱합니다.
- 발표 1순위 백업은 Figma 모바일 앱 > View prototypes로 원본을 직접 여는 것입니다.
- PC에서 미리보면 검정 배경 중앙에 최대 500px 폭으로 표시됩니다. 모바일에선 기존처럼 전체 폭 사용.

[이번 수정사항]
- PC 바깥 배경을 순수 검정색(#000000)으로 변경.
- PC용 앱 프레임 최대 너비를 430px → 500px으로 확대. 중앙 정렬.
- 모바일 크기 및 Figma 프로토타입 연결 기능은 유지.
- 이미 본인 config.js에 링크를 입력했다면 새 파일로 덮어쓰지 말고 기존 config.js를 보존하세요.
- Netlify 재배포 시 기존 사이트의 Deploys 화면에서 업데이트하면 URL을 유지할 수 있습니다.
