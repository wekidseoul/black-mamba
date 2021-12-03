notion://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6242d844-bc7f-4000-8799-e4dd7a898e5d%2Fexport_2.png?table=block&id=1756ad30-bff1-4d1f-b003-250eae80e022&spaceId=7d812c0b-5efe-4a14-80bb-1d541c573480&width=250&userId=d2fa2844-feff-4618-a734-a857e1401d4f&cache=v2
# BLACK MAMBA

- 목표
    - Black Mamba 피하기 게임을 구현하며 JavaScript에 익숙해지기

- 게임 설명
    - 뱀(Black Mamba)이 랜덤한 방향으로 스스로 돌아다닌다.
    - User는 방향키를 사용해 뱀을 피해 이동한다.
    - 필드에 랜덤하게 등장하는 보석을 7개 모아야한다.
    - 일정 시간이 주어지고 시간 안에 모두 모으면 성공.
    
- commit type
    - feat : 새로운 기능
    - fix : 버그 수정
    - perf : 성능 개선
    - refactor : 코드 리팩토링
    - style : 코드 의미에 영향을 주지 않는 변경사항
    - build : 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm 레벨)

- 전체 구성 : 오프닝 → 게임 → 엔딩
    - 오프닝
    - 게임
        - 유저, 뱀, 보석 관련 초기화
        - 필드, 보드 초기화
        - 타이머 초기화
        - 승리 조건 → 시간안에 보석을 7개 모으면 승리
        - 패배 조건 → 뱀에 닿거나 30초가 지나면 패배
    - 엔딩
        - 승리 엔딩
        - 패배 엔딩

- 화면 구성
    - 오프닝 : 필드
    - 게임 : 타이머, 보석 획득 현황, 필드, 버튼
    - 엔딩 : 필드 → 성공 엔딩 → 결과, 버튼

https://be-kid.github.io/blackmamba/