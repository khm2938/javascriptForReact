import Header from "./Header";
import Button from "./Button";

const NotFound = () => {

  const onClickButton = (e) => {
    alert(e.target.innerText);
  }
  return (
    <>
      <Header
        title={"HEADER"}
        leftChild={
          <Button text={"LEFT"} type={"POSITIVE"} onClick={onClickButton} />
        }
        rightChild={
          <Button text={"RIGHT"} type={"NEGATIVE"} onClick={onClickButton} />
        }
      />
      <h1>NotFound</h1>
    </>
  );
};

export default NotFound;
