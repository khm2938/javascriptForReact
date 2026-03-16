import { useEffect, useState } from "react";
import { getOne } from "../../api/productApi";
import { API_SERVER_HOST } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import "./ReadComponent.css";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  uploadFileNames: [],
};

const host = API_SERVER_HOST;

const ReadComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);
  const { moveToProductList, moveToProductModify } = useCustomMove();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // 렌더링 사이클 충돌 방지
    const timer = setTimeout(() => setFetching(true), 0);

    getOne(pno)
      .then((data) => {
        setProduct(data);
        setFetching(false);
      })
      .catch(() => setFetching(false));

    return () => clearTimeout(timer);
  }, [pno]);

  return (
    <div className="read-container">
      {fetching && <FetchingModal />}

      <div className="read-form-wrapper">
        <div className="read-form-group">
          <label className="read-label">PNO</label>
          <input
            className="read-control"
            value={pno}
            type="text"
            readOnly
            disabled
          />
        </div>

        <div className="read-form-group">
          <label className="read-label">PNAME</label>
          <input
            className="read-control"
            value={product.pname}
            type="text"
            readOnly
            disabled
          />
        </div>

        <div className="read-form-group">
          <label className="read-label">PRICE</label>
          <input
            className="read-control"
            value={`${product.price.toLocaleString()}원`}
            type="text"
            readOnly
            disabled
          />
        </div>

        <div className="read-form-group">
          <label className="read-label">DESCRIPTION</label>
          <input
            className="read-control"
            value={product.pdesc}
            type="text"
            readOnly
            disabled
          />
        </div>

        {/* 상품 이미지 목록 */}
        <div className="image-list-wrapper">
          {product.uploadFileNames.map((imgFile, i) => (
            <img
              alt={`product-${i}`}
              key={i}
              className="product-read-img"
              src={`${host}/api/products/view/s_${imgFile}`}
            />
          ))}
        </div>
      </div>

      {/* 하단 제어 버튼 */}
      <div className="read-button-group">
        <button
          className="btn-read btn-modify-nav"
          type="button"
          onClick={() => moveToProductModify(pno)}
        >
          수정하기
        </button>
        <button
          className="btn-read btn-list-nav"
          type="button"
          onClick={() => moveToProductList()}
        >
          리스트보기
        </button>
      </div>
    </div>
  );
};

// 가독성을 위해 내부 컴포넌트로 분리 (첫 글자 대문자)
const MakeDiv = ({ title, value }) => (
  <div className="read-row">
    <div className="read-wrapper">
      <div className="read-label">{title}</div>
      <div className="read-value">{value}</div>
    </div>
  </div>
);

export default ReadComponent;
