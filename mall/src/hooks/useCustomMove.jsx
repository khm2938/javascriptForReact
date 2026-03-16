import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams, useLocation } from "react-router-dom";

// "param" 존재하면 "param"리턴, 없으면 defaultValue 리턴
const getNum = (param, defaultValue) => {
  return (!param) ? (defaultValue) : parseInt(param);
};
const useCustomMove = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [refresh, setRefresh] = useState(false);
  
  // 현재 경로에 따라 basePath 결정
  const basePath = location.pathname.startsWith('/product') ? 'product' : 'todo';
  
  //const queryDefault = ?page=2&size=10
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1); //page값이 있으면 해당 page값을 리턴, 없으면 1page리턴
  const size = getNum(queryParams.get("size"), 10);
  const queryDefault = createSearchParams({ page, size }).toString(); //새로 추가

  // ***** TODO LIST로 이동하는 함수 추가 *****
  //http://~~~/todo/list?page=1&size=10
  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({ page: pageNum,size: sizeNum }).toString();
    } else {
      queryStr = queryDefault;
    }
    //`../todo/list?page=1&size=10`
    navigate({ pathname: `../${basePath}/list`, search: queryStr });
    setRefresh(!refresh);
  };

  //http://~~~/todo/modify/10?page=1&size=10
  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../${basePath}/modify/${num}`,
      search: queryDefault, //수정시 기존의 쿼리 스트링 유지를 위해
    });
  };

  //http://~~~/todo/read/10?page=1&size=10
  const moveToRead = (num) => {
    navigate({
      pathname: `../${basePath}/read/${num}`,
      search: queryDefault, //수정시 기존의 쿼리 스트링 유지를 위해
    });
  };
  
  // ***** PRODUCT LIST로 이동하는 함수 추가 *****
  //http://~~~/product/list?page=1&size=10
  const moveToProductList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({ page: pageNum,size: sizeNum }).toString();
    } else {
      queryStr = queryDefault;
    }
    //`../product/list?page=1&size=10`
    navigate({ pathname: `../${basePath}/list`, search: queryStr });
    setRefresh(!refresh);
  };

  //http://~~~/product/read?page=1&size=10
  const moveToProductRead = (pno) => {
    navigate({
      pathname: `../product/read/${pno}`,
      search: queryDefault,
    });
  };

  //http://~~~/product/modify/10?page=1&size=10
  const moveToProductModify = (num) => { 
    console.log(queryDefault); 
    navigate({ 
      pathname: `../product/modify/${num}`, 
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해 
    }); 
  }; 

  return { moveToList, moveToModify, moveToRead, moveToProductList, moveToProductRead, moveToProductModify, page, size, refresh }; 
};

export default useCustomMove;
