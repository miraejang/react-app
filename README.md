# Flower Order Manager
주문을 카드형태로 등록하여 관리하는 앱입니다.    
　
 
### 이 과정을 통해 얻은 것
- Firebase의 Authentication을 사용하여 로그인 기능을 구현할 수 있습니다.
- Firebase의 Realtime Database에 데이터를 실시간으로 저장하고 사용할 수 있습니다.
- Cloudinary를 사용하여 이미지를 저장할 수 있습니다.
- PostCSS를 사용하여 공통으로 사용되어지는 것을 변수로 지정할 수 있습니다.
- 구현할 기능을 계획하고 그것을 구현할 수 있습니다.
- memo를 사용하여 불필요한 업데이트를 방지할 수 있습니다.    
　
 
### 사용한 기술
- React
- React Router
- Firebase
- Cloudinary
- PostCSS    
　
 
## 구현한 기능 설명
### 로그인 / 로그아웃
Firebase의 Authentication을 이용하여 로그인 / 로그아웃 기능을 구현할 수 있습니다.

### 주문 카드 등록 / 관리 페이지
Router을 이용하여 로그인이 완료되면 주문 카드를 등록하고 관리할 수 있는 페이지로 이동합니다.   
주문 카드는 로그인 되어진 아이디에 따라 실시간으로 Firebase의 Realtime Database에 저장되고 보입니다.   

### 주문 카드
카드를 등록하면 Firebase의 Realtime Database에 저장이 됩니다.   
등록된 내용대로 Card가 생성됩니다.    
카드의 내용을 수정하면 State 업데이트가 되고, 실시간으로 Firebase에 저장된 내용도 함깨 수정됩니다.   
카드를 삭제하면 Firebase의 데이터도 삭제됩니다.   

### 이미지 등록
Dependency Injection을 이해하고 할 수 있습니다.   
Cloudinary를 통해 이미지를 등록하고, 불필요하게 큰 이미지를 축소하여 저장할 수 있습니다.   
이미지가 등록되는 동안에는 로딩되는 이미지를 보여주어 사용자가 등록되고 있음을 알 수 있도록 표현했습니다.    
　
