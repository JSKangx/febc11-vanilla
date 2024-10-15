import axios from "axios";

// (1) API 서버에서 게시물 목록 조회
async function getList() {
  const response = await axios.get("https://11.fesp.shop/posts", {
    // 문서를 참고해서 파라미터를 보내면 된다.
    // 이렇게 하드코딩하는 것이 아니라, 사용자 입력에 반응하는 방식으로 만들면 된다.
    params: { type: "test", page: 1, limit: 10 },
  });
  return response.data;
}

// (2) 조회한 게시물 목록을 화면에 출력
async function renderList() {
  const list = await getList();
  console.log(list);
  const liLists = list.item.map((post) => {
    return `
    <li>
      <h2>[${post._id}] ${post.title}</h2>
      <span>조회수 : ${post.views}</span>
      <span>날짜 : ${post.createdAt}</span>
      <p>내용 : ${post.content}</p>
    </li>
    <hr />`;
  });
  // 배열을 문자열로 변환하면, 배열의 모든 요소, 즉 콤마까지도 변환되어서 넣어진다.
  // 그래서 join을 넣어서 배열을 문자열로 변환할 때의 연결자를 빈문자열로 지정해준다.
  document.querySelector("#postList").innerHTML = liLists.join("");
}
renderList();
