import Header from "../../include/Header"; 
import AddComponent from "../../components/todo/AddComponent";
import "./AddPage.css"; 
 
const AddPage = () => { 
  return ( 
    <div className="main-container"> 
      <Header /> 
      <main className="list-content-area"> 
        <div className="list-wrapper"> 
          <AddComponent /> 
        </div> 
      </main> 
    </div> 
  ); 
}; 
export default AddPage; 