import { defineConfig } from "vite"; // node.js의 확장 모듈 중 vite를 쓰겠다.
import { resolve } from "path"; // node.js의 기본 모듈 중 path에서, resolve라는 함수를 import

export default defineConfig({
  build: {
    rollupOptions: {
      // 빌드할 때 찾아낼 폴더들의 경로
      input: {
        // __dirname : 현재 폴더를 의미(모듈 변수)
        index: resolve(__dirname, "index.html"), // 기본 index.html
        login: resolve(__dirname, "src/pages/auth/login.html"), // 추가 HTML 파일
        list: resolve(__dirname, "src/pages/board/list.html"), // 추가 HTML 파일
        // 필요한 다른 HTML 파일을 여기에 추가
      },
    },
  },
});
