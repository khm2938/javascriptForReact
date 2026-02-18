import { useReducer, useRef } from "react";
import { boardReducer } from "../reducer/boardReducer";
import { makeSummary } from "../utils/makeSummary";

const mockData = [
  {
    id: 1,
    title: "리액트 - useState 기본 개념",
    content: "useState는 리액트에서 상태를 관리하기 위한 훅입니다. 상태가 변경되면 컴포넌트가 다시 렌더링됩니다.",
    category: "React",
    level: "입문",
    createdAt: new Date("2026-02-10").getTime(),
  },
  {
    id: 2,
    title: "자바스크립트 배열 내장 함수 정리",
    content: "forEach, map, filter, find 등의 배열 내장 함수 사용법과 차이점을 정리했습니다.",
    category: "JavaScript",
    level: "초급",
    createdAt: new Date("2026-02-12").getTime(),
  },
  {
    id: 3,
    title: "스프링부트 JPA 기본 설정",
    content: "Spring Boot에서 JPA를 사용하기 위한 기본 설정 방법과 application.yml 구성 방법을 정리했습니다.",
    category: "Spring",
    level: "중급",
    createdAt: new Date("2026-02-14").getTime(),
  },
  {
    id: 4,
    title: "리액트 - useEffect 이해하기",
    content: "useEffect는 컴포넌트가 렌더링될 때 특정 작업을 수행하도록 도와주는 훅입니다.",
    category: "React",
    level: "초급",
    createdAt: new Date("2026-02-15").getTime(),
  },
  {
    id: 5,
    title: "비동기 처리 Promise vs async/await",
    content: "Promise와 async/await의 차이점과 각각의 사용 예제를 비교 정리했습니다.",
    category: "JavaScript",
    level: "중급",
    createdAt: new Date("2026-02-16").getTime(),
  },
  {
    id: 6,
    title: "데이터베이스 인덱스란 무엇인가?",
    content: "DB 인덱스의 개념과 왜 성능에 중요한지, 언제 사용하는지 정리했습니다.",
    category: "DB",
    level: "입문",
    createdAt: new Date("2026-02-18").getTime(),
  },
  {
    id: 7,
    title: "CS - HTTP 요청과 응답 구조",
    content: "HTTP 요청(Request)과 응답(Response)의 구조와 헤더, 바디 구성 요소를 정리했습니다.",
    category: "CS",
    level: "초급",
    createdAt: new Date("2026-02-20").getTime(),
  },
];


export function useBoard() {
  const [state, dispatch] = useReducer(boardReducer, mockData);
  const idRef = useRef(8);

  const onCreate = ({ title, content, category, level }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        content,
        category,
        level,
        createdAt: Date.now(),
      },
    });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const onUpdate = (id, { title, content, category, level }) => {
    dispatch({
      type: "UPDATE",
      data: { id, title, content, category, level, summary: makeSummary(content) },
    });
  };

  return { state, onCreate, onDelete, onUpdate };
}
