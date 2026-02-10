const Viewer = ({count}) => {
  console.log(`Viewer 리렌더링 ${count}`);
  return (
    <>
      <section className="viewer">
        <div>
          <h1>현재 카운트</h1>
          <h2>{count}</h2>
        </div>
      </section>
    </>
  );
};
export default Viewer;
