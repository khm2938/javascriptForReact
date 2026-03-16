import { useEffect, useState, useRef } from "react";
import { getOne, putOne, deleteOne } from "../../api/productsApi";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/todoApi";
import "./ModifyComponent.css";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  delFlag: false,
  uploadFileNames: [],
};
const host = API_SERVER_HOST;

const ModifyComponent = ({ pno, moveToList, moveToRead }) => {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const uploadRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setFetching(true), 0);
    getOne(pno).then((data) => {
      setProduct(data);
      setFetching(false);
    });
    return () => clearTimeout(timer);
  }, [pno]);
  const handleChangeProduct = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const deleteOldImages = (imageName) => {
    const resultNames = product.uploadFileNames.filter(
      (name) => name !== imageName,
    );
    setProduct({ ...product, uploadFileNames: resultNames });
  };

  const handleClickModify = () => {
    /* putOne 로직 구현 */
  };
  const handleClickDelete = () => {
    /* deleteOne 로직 구현 */
  };

  return (
    <div className="modify-container">
      {fetching && <FetchingModal />}

      <div className="modify-form">
        <div className="modify-form-group">
          <label className="modify-label">PNAME</label>
          <input
            className="modify-control"
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PRICE</label>
          <input
            className="modify-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DESCRIPTION</label>
          <textarea
            className="modify-control"
            name="pdesc"
            rows={5}
            value={product.pdesc}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DELETE (Flag)</label>
          <select
            className="modify-select"
            name="delFlag"
            value={product.delFlag}
            onChange={handleChangeProduct}
          >
            <option value={false}>사용 (Keep)</option>
            <option value={true}>삭제 (Delete)</option>
          </select>
        </div>

        <div className="modify-form-group">
          <label className="modify-label">New Files</label>
          <input
            className="modify-control"
            ref={uploadRef}
            type="file"
            multiple={true}
          />
        </div>
      </div>

      {/* 기존 이미지 목록 */}
      <div className="modify-image-grid">
        {product.uploadFileNames.map((imgFile, i) => (
          <div className="modify-image-card" key={i}>
            <button
              className="btn-img-delete"
              type="button"
              onClick={() => deleteOldImages(imgFile)}
            >
              DELETE
            </button>
            <img alt="product" src={`${host}/api/products/view/s_${imgFile}`} />
          </div>
        ))}
      </div>

      <div className="modify-button-group">
        <button
          className="btn-modify-action btn-del"
          type="button"
          onClick={handleClickDelete}
        >
          DELETE
        </button>
        <button
          className="btn-modify-action btn-mod"
          type="button"
          onClick={handleClickModify}
        >
          MODIFY
        </button>
        <button
          className="btn-modify-action btn-list"
          type="button"
          onClick={moveToList}
        >
          LIST
        </button>
      </div>
    </div>
  );
};

export default ModifyComponent;
