import { useState } from "react";

const Editor = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [mat, setMat] = useState("");

  const onSubmit = (e) => {
    // ✅ form submit(새로고침/리셋) 방지
    e.preventDefault();

    const _name = name.trim();
    if (!_name) {
      alert("이름을 입력하세요");
      return;
    }

    // ✅ 숫자 변환(빈칸이면 0)
    const _kor = Number(kor) || 0;
    const _eng = Number(eng) || 0;
    const _mat = Number(mat) || 0;

    // ✅ 부모(App)의 함수 호출
    addStudent(_name, _kor, _eng, _mat);

    // ✅ 입력칸 초기화
    setName("");
    setKor("");
    setEng("");
    setMat("");
  };

  return (
    <section className="editor">
      <h2>학생 등록</h2>

      <form onSubmit={onSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          value={kor}
          onChange={(e) => setKor(e.target.value)}
          placeholder="국어"
          inputMode="numeric"
        />
        <input
          value={eng}
          onChange={(e) => setEng(e.target.value)}
          placeholder="영어"
          inputMode="numeric"
        />
        <input
          value={mat}
          onChange={(e) => setMat(e.target.value)}
          placeholder="수학"
          inputMode="numeric"
        />

        <button type="submit">추가</button>
      </form>
    </section>
  );
};

export default Editor;
