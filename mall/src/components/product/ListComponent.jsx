import { useEffect, useState } from "react";
import { getList } from "../../api/productApi";
import useCustomMove from "../../hooks/useCustomMove";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/todoApi";
import PageComponent from "../common/PageComponent"; 
import useCustomLogin from "../../hooks/useCustomLogin";
import "./ListComponent.css"; 

const host = API_SERVER_HOST;
const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, moveToProductList, moveToProductRead, refresh } = useCustomMove();
  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const { exceptionHandle } = useCustomLogin();

  useEffect(() => {
    // 동기적 상태 변화로 인한 렌더링 충돌 방지
    const timer = setTimeout(() => setFetching(true), 0);

    getList({ page, size })
      .then((data) => {
        setServerData(data);
        setFetching(false);
      })
      .catch((err) => {
        setFetching(false);
        exceptionHandle(err); 
      });

    return () => clearTimeout(timer);
  }, [page, size, refresh, exceptionHandle]);

  return (
    <div className="product-list-container">
      {fetching && <FetchingModal />}

      <div className="product-grid">
        {serverData.dtoList.map((product) => (
          <div
            className="product-card"
            key={product.pno}
            onClick={() => moveToProductRead(product.pno)}
          >
            <div className="product-info">
              <h4>PNO: {product.pno}</h4>
              <h4 className="product-name">NAME: {product.pname}</h4>
              <h4 className="product-price">
                PRICE: {product.price.toLocaleString()}원
              </h4>
            </div>
ㅇ
            <div className="product-img-box">
              {product.uploadFileNames && product.uploadFileNames.length > 0 ? (
                <img
                  alt="product"
                  src={`${host}/api/products/view/s_${product.uploadFileNames[0]}`}
                />
              ) : (
                <img alt="product"  src={`${host}/api/products/view/default.jpg}`} />
              )}
            </div>
          </div>
        ))}
      </div>
      <PageComponent serverData={serverData} moveToList={moveToProductList} />
    </div>
  );
};

export default ListComponent;
