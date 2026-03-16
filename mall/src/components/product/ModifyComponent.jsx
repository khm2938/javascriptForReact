import { useEffect, useState } from "react";
import { getOne, putOne, deleteOne } from "../../api/productApi"; // 필요한 API 함수 가정
import useCustomMove from "../../hooks/useCustomMove";
import InfoModal from "../common/InfoModal";
import "./ModifyComponent.css";

//초기값
const initState = {
  pno: 0,
  pname: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ pno, moveToList, moveToRead }) => {
  const [product, setProduct] = useState({ ...initState });
  const [infoModalOn, setInfoModalOn] = useState(false);
  const [result, setResult] = useState(null); //모달 창을 위한 상태

  //수정컴포넌트가 마운트될때 해당pno를 api서버로부터 가져온다
  useEffect(() => {
    getOne(pno).then((data) => setProduct(data));
  }, [pno]);

  //데이터변경이 될때 product 수정
  const handleChangeProduct = (e) => {
    setProduct({
      ...product, //기존 데이터
      [e.target.name]: e.target.value, // 수정 데이터
    });
  };

  const handleClickModify = () => {
    // 실제 수정 로직 호출 (예시)
    putOne(product).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
      moveToRead(pno);
    });
  };

  const handleClickDelete = () => {
    // 실제 삭제 로직 호출 (예시)
    deleteOne(pno).then((data) => {
      setResult(data.RESULT);
      setInfoModalOn(true);
      moveToList();
    });
  };

  //모달창을 close 
  const closeModal = () => { 
    setInfoModalOn(false); 
    moveToList(); 
  };


  return (
    <div className="modify-container">
      <InfoModal
        show={infoModalOn}
        title={`RESULT`}
        content={`${result}`}
        callbackFn={closeModal}
      />
      <div className="form-group">
        <label className="form-label">PNO</label>
        <input className="form-control" value={pno} type="text" disabled />
      </div>

      <div className="form-group">
        <label className="form-label">PNAME</label>
        <input
          className="form-control"
          type="text"
          name="pname"
          value={product.pname}
          onChange={handleChangeProduct}
        />
      </div>

      <div className="form-group">
        <label className="form-label">PRICE</label>
        <input
          className="form-control"
          name="price"
          value={product.price}
          type="number"
          onChange={handleChangeProduct}
        />
      </div>

      <div className="form-group">
        <label className="form-label">PDESC</label>
        <textarea
          className="form-control"
          name="pdesc"
          value={product.pdesc}
          onChange={handleChangeProduct}
        />
      </div>
      <div className="button-group">
        <button
          className="btn btn-modify"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="btn btn-delete"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="btn btn-list"
          type="button"
          onClick={() => moveToList()}
        >
          목록가기
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
