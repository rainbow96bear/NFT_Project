# NFTProject

## 초기 기획

- 일반 회원가입 혹은 카카오 로그인을 통하여 회원 가입
  - 회원가입 후 추후에 정할 컨텐츠를 통하여 보상 획득
    - 보상은 기본 NFT, NFT 합성 기회, NFT를 거래할 수 있는 코인 혹은 게임머니 지급
  - 조합 기회를 통하여 가지고 있는 NFT를 조합하여 새로운 NFT 획득
  - 획득한 NFT는 연결된 MetaMask 계좌에 지급
- 소통이 가능한 커뮤니티(글을 쓰고 댓글을 달 수 있는 공간)를 구현
- NFT를 거래할 수 있도록 구현

  - 특정 가격에 올릴 수 있는 거래소
  - 경매를 통한 입찰 거래소

## 진행과정 기록

### 03/15

- 리덕스 툴킷을 통한 화면의 어두운 모드 밝은 모드 기본 설정

### 03/16

- style-components를 이용하여 GlobalStyle로 어두운 모드 밝은 모드 설정
- cookie를 이용하여 새로고침 혹은 브라우저를 껏다가 들어가도 모드가 유지되도록 구현

#### 오류 수정

- cookie 생성시 expires를 설정하지 않아서 브라우저를 끄면 쿠키가 사라짐
  - 해결방안 : expires를 1년으로 설정 후 모드를 위한 cookie를 확인 시 expires를 1년으로 재설정

### 03/17

- customComponent를 만들어 클릭 시 이동하는 컴포넌트를 만들어 로그인 화면으로 전환 되도록 구현
- react-kakao-login를 이용하여 카카오 로그인 구현

#### 오류 수정

- 카카오 로그인 구현 시 window.Kakao의 type에 대한 설정 오류가 있어 react-app-env.d.ts파일에 global로 Kakao의 type을 any로 설정하여 오류를 잡아둠 - 추후에 type을 알아내면 수정할 계획

### 03/18

- 메인 화면을 반응형으로 구현하여 desktop 크기의 화면에서 사이드바, tablet 혹은 mobile의 경우 header가 뜨도록 구현
  - header의 경우 추후에 자세히 구현
- js로 생성한 express server를 ts로 변경

#### 오류 수정

- 사이드바에서 pramas 설정에 의하여 홈의 경우 경로를 인식하지 못하는 오류
  - 해결방안 : home은 router를 따로 설정하여서 해결
