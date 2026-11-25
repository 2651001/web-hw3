// app.js : 실습과제 #3 보드 렌더링, 검색·필터·정렬, 찜 저장 및 상세 모달 / 강동현(2651001)

// liked : 브라우저 localStorage에서 불러온 찜 영화 제목 배열
const liked = JSON.parse(localStorage.getItem("liked") || "[]");
const detailDialog = document.getElementById("detail");

// saveLiked : 없음 ⇒ 현재 liked 배열을 localStorage에 저장
function saveLiked() {
  localStorage.setItem("liked", JSON.stringify(liked));
}

// posterUrl : 포스터 경로(문자열 또는 null), 이미지 크기(문자열) ⇒ TMDB 포스터 URL 문자열
function posterUrl(path, size) {
  if (!path) {
    return "";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
}

// search : 영화 배열, 검색어(문자열) ⇒ 제목에 검색어가 포함된 새 배열
function search(list, keyword) {
  const normalized = keyword.trim().toLowerCase();
  return list.filter((item) => item.title.toLowerCase().includes(normalized));
}

// sortBy : 영화 배열, 정렬 키(문자열), 내림차순 여부(불리언) ⇒ 정렬된 새 배열(원본 불변)
function sortBy(list, key, desc) {
  const direction = desc ? -1 : 1;
  return [...list].sort((first, second) => {
    if (typeof first[key] === "string") {
      return first[key].localeCompare(second[key]) * direction;
    }
    return (first[key] - second[key]) * direction;
  });
}

// getView : 없음 ⇒ 검색, 보기 필터, 정렬을 순서대로 적용한 새 배열
function getView() {
  const keyword = document.getElementById("q").value;
  const filterType = document.querySelector('input[name="type"]:checked').value;
  const sortField = document.getElementById("sort").value;

  const afterSearch = search(movies, keyword);
  const afterFilter =
    filterType === "all"
      ? afterSearch
      : afterSearch.filter((item) => item.type === filterType);

  return sortBy(afterFilter, sortField, sortField !== "title");
}

// buildCardElement : 영화 객체 ⇒ 카드 <article> DOM 요소
function buildCardElement(movie) {
  const article = document.createElement("article");
  article.className = "card";
  article.setAttribute("data-type", movie.type);
  article.setAttribute("data-title", movie.title);

  const rankBadge =
    movie.type === "boxoffice" && movie.rank !== null
      ? `<span class="rank">${movie.rank}</span>`
      : "";

  const scoreClass = movie.rating >= 8 ? "badge hot" : "badge";
  const scoreBadge = `<span class="${scoreClass}">${movie.rating}</span>`;

  let mediaMarkup = "";
  if (!movie.poster) {
    article.classList.add("no-poster");
    mediaMarkup = `<div class="poster-fallback">${movie.title[0]}</div>`;
  } else {
    mediaMarkup = `<img src="${posterUrl(movie.poster, "w342")}" alt="${movie.title}">`;
  }

  const heartClass = liked.includes(movie.title) ? "like liked" : "like";

  article.innerHTML = `
    ${rankBadge}
    ${scoreBadge}
    ${mediaMarkup}
    <div class="info">
      <h3>${movie.title}</h3>
      <p class="year">${movie.year}</p>
    </div>
    <button class="${heartClass}" type="button">♥</button>
  `;

  return article;
}

// renderCards : 영화 배열 ⇒ 보드 목록 렌더링 및 개수·찜 수·빈 상태 갱신
function renderCards(list) {
  const boardEl = document.getElementById("board");
  const countEl = document.getElementById("count");
  const likeCountEl = document.getElementById("likeCount");

  boardEl.replaceChildren(...list.map(buildCardElement));
  countEl.textContent = `${list.length}편`;
  likeCountEl.textContent = liked.length;

  if (list.length === 0) {
    boardEl.classList.add("is-empty");
  } else {
    boardEl.classList.remove("is-empty");
  }
}

// refresh : 없음 ⇒ getView() 결과를 renderCards()로 다시 그림
function refresh() {
  renderCards(getView());
}

// openDetail : 영화 제목(문자열) ⇒ 일치하는 영화의 상세 내용을 dialog에 채워 열기
function openDetail(title) {
  const target = movies.find((item) => item.title === title);
  if (!target) {
    return;
  }

  const detailBodyEl = document.getElementById("detailBody");
  const posterMarkup = target.poster
    ? `<img src="${posterUrl(target.poster, "w500")}" alt="${target.title}">`
    : `<div class="poster-fallback">${target.title[0]}</div>`;

  detailBodyEl.innerHTML = `
    ${posterMarkup}
    <h2>${target.title}</h2>
    <p>개봉일: ${target.date}</p>
    <p>평점: ${target.rating}</p>
    <p>${target.overview}</p>
  `;

  detailDialog.showModal();
}

// 초기 화면 렌더링
refresh();

// ===== 이벤트 리스너 (렌더 함수 밖 맨 아래에 한 번씩만 등록) =====
document.getElementById("q").addEventListener("input", refresh);
document.getElementById("sort").addEventListener("change", refresh);
document.getElementById("typeFilter").addEventListener("change", refresh);

document.getElementById("board").addEventListener("click", (event) => {
  const cardEl = event.target.closest(".card");
  if (!cardEl) {
    return;
  }

  const title = cardEl.getAttribute("data-title");

  if (event.target.closest(".like")) {
    const pos = liked.indexOf(title);
    if (pos === -1) {
      liked.push(title);
    } else {
      liked.splice(pos, 1);
    }
    saveLiked();
    refresh();
    return;
  }

  openDetail(title);
});

document.getElementById("closeDetail").addEventListener("click", () => {
  detailDialog.close();
});
