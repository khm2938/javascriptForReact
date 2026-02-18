import { useReducer, useRef } from "react";
import { boardReducer } from "../reducer/boardReducer";
import { data } from "react-router-dom";

const mockData = [
  {
    id: 1,
    title: "첫 글",
    content: "내용입니다",
    category: "React",
    level: "입문",
    summary: "요약",
    createdAt: new Date("2026-02-17").getTime(),
  },
  {
    id: 2,
    title: "리액트 - 구조분해할당",
    content: "구조분해할당",
    category: "React",
    level: "입문",
    summary: "구조분해할당 요약",
    createdAt: new Date("2026-02-18").getTime(),
  },
];

export function useBoard() {
  const [state, dispatch] = useReducer(boardReducer, mockData);
  const idRef = useRef(3);

  const onCreate = ({ title, content, category, level, summary }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        content,
        category,
        level,
        summary,
        createdAt: Date.now(),
      },
    });
  };

  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  const onUpdate = (id, { title, content, category, level, summary }) => {
    dispatch({
      type: "UPDATE",
      data: { id, title, content, category, level, summary },
    });
  };

  return { state, onCreate, onDelete, onUpdate };
}
