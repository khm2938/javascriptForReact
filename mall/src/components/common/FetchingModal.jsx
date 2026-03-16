import "./FetchingModal.css";
 
export default function FetchingModal() { 
  return ( 
    <div className="fetching-overlay"> 
      <div className="fetching-content"> 
        <div className="fetching-header"> 
          {/* 필요 시 헤더 추가 가능, 현재는 메시지만 표시 */} 
        </div> 
        <div className="fetching-body"> 
          <p className="fetching-message">API Server Loading....</p> 
        </div> 
      </div> 
    </div> 
  ); 
}