import Header from "../../include/Header";
import { useParams } from "react-router-dom";
import ReadComponent from "../../components/product/ReadComponent";
import './ReadPage.css';

const ReadPage = () => {
  const {pno} = useParams();
  
   return ( 
    <div className="list-page-container"> 
      <Header /> 
 
      <main className="list-content-area"> 
        <div className="list-wrapper"> 
          <ReadComponent pno={pno} /> 
        </div> 
      </main> 
    </div> 
  ); 
};
export default ReadPage;
