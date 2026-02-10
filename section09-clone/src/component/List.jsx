import StudentItem from "./StudentItem";

const List = ({ students, onClickDelete }) => {
  console.log("✅ List 렌더", students.length);

  return (
    <div>
      <h2>학생 목록</h2>
      <ul>
        {students.map((student, idx) => {
  console.log("✅ map student", idx, student);
  return (
    <StudentItem
      key={idx}
  {...student}
  onClickDelete={onClickDelete}
    />
        );
        })}
      </ul>
    </div>
  );
};

export default List;


