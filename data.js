// data.js : 실습과제 #3 영화 10건 데이터 / 강동현(2651001)

const movies = [
  {
    title: "인터스텔라",
    year: 2014,
    date: "2014-11-06",
    rating: 8.4,
    audience: 0,
    poster: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    type: "mine",
    rank: null,
    overview: "인류의 생존을 위협하는 식량 위기 속에서 새로운 거주 가능 행성을 찾아 웜홀을 통과하는 심우주 탐사대의 여정을 그립니다."
  },
  {
    title: "기생충",
    year: 2019,
    date: "2019-05-30",
    rating: 8.5,
    audience: 0,
    poster: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    type: "mine",
    rank: null,
    overview: "전원 백수인 기택 가족이 IT기업 CEO 박사장네 집에 차례로 발을 들이면서 걷잡을 수 없는 사건에 휘말리는 이야기입니다."
  },
  {
    title: "쇼생크탈출",
    year: 1994,
    date: "1995-02-04",
    rating: 8.7,
    audience: 0,
    poster: "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    type: "mine",
    rank: null,
    overview: "억울하게 종신형을 선고받은 은행원 앤디가 쇼생크 교도소에서 희망과 우정을 잃지 않고 자유를 향해 나아가는 드라마입니다."
  },
  {
    title: "어벤져스 앤드게임",
    year: 2019,
    date: "2019-04-24",
    rating: 8.3,
    audience: 0,
    poster: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    type: "mine",
    rank: null,
    overview: "절반의 생명체가 사라진 이후, 남은 어벤져스 멤버들이 과거로 돌아가 스톤을 되찾고 최후의 반격에 나서는 작품입니다."
  },
  {
    title: "너의 이름은",
    year: 2016,
    date: "2017-01-04",
    rating: 8.5,
    audience: 0,
    poster: "/q719jXXEzOoYaps6babgKnONONX.jpg",
    type: "mine",
    rank: null,
    overview: "이사 가던 길에 신비한 세계로 들어선 소녀 치히로가 부모를 구하고 원래 세계로 돌아가기 위해 성장해 나가는 이야기입니다."
  },
 {
    title: "군체",
    year: 2026,
    date: "2026-05-21",
    rating: 8.2,
    audience: 5212855,
    poster: "/hDPGsJxo8xX0OyqcMB8xI3RdaF3.jpg",
    type: "boxoffice",
    rank: 1,
    overview: "서울 도심의 초고층 빌딩에서 정체불명의 집단 감염사태가 발생한다. 건물은 순식간에 봉쇄되고, 그 안에 있던 사람들은 그대로 고립된다."
  },
  {
    title: "마이클",
    year: 2026,
    date: "2026-04-22",
    rating: 8.5,
    audience: 1589035,
    poster: "/piMZqtd0gGS7OgkhDwiQ7vVViBQ.jpg",
    type: "boxoffice",
    rank: 2,
    overview: "어린 나이에 형제들과 ‘잭슨 파이브’ 그룹의 막내로 데뷔하자마자 음악적 천재성과 스타성으로 주목을 받은 ‘마이클 잭슨’. 전세계적인 스타로 성공하지만, 그는 가족에 대한 책임감과 자신의 음악적 정체성 사이에서 고민에 빠지게 된다."
  },
  {
    title: "백룸",
    year: 2026,
    date: "2026-05-27",
    rating: 7.0,
    audience: 5212855,
    poster: "/tcqLtpb8EUDqbct2YFl8ZGNfP2p.jpg",
    type: "boxoffice",
    rank: 3,
    overview: "그곳은 대체 무엇인가? 낯설지만 익숙한 세계, 출구도 입구도 찾을 수 없다. 당신도 입장하시겠습니까?"
  },
  {
    title: "와일드 씽",
    year: 2026,
    date: "2026-06-03",
    rating: 6.2,
    audience: 869723,
    poster: "/s4IUDzLZJb4CosgEXcmouY32Jfg.jpg",
    type: "boxoffice",
    rank: 4,
    overview: "한때 가요계를 휩쓸었지만 예기치 못한 사건에 휘말려 하루아침에 해체된 3인조 혼성 댄스 그룹 트라이앵글. 20년 만에 리더 현우에게 재기의 발판이 될 트라이앵글 공연 제안이 들어오고, 인생의 마지막 기회를 잡기 위해 멤버들을 찾아 나선다."
  },
  {
    title: "싱 스트리트",
    year: 2016,
    date: "2016-03-11",
    rating: 7.9,
    audience: 589440,
    poster: "/kUYfLv9V5mKPb2lJadzgOI67AFt.jpg",
    type: "boxoffice",
    rank: 5,
    overview: "‘코너’는 전학을 가게 된 학교에서 모델처럼 멋진 ‘라피나’를 보고 첫 눈에 반해 사랑에 빠진다. ‘라피나’에게 잘 보이고 싶은 마음에 덜컥 밴드를 하고 있다는 거짓말을 한 ‘코너’는 급기야 뮤직비디오 출연까지 제안하고 승낙을 얻는다."
  }
];
