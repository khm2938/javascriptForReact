import '../css/Header.css'
import { memo } from 'react';

const Header = ({count}) => {
  console.log(`헤더 ${count}`);
  return <>
  <div className="Header">
     <h3>오늘은📆</h3> 
     <h1>{new Date().toDateString()}</h1> 
  </div>
  </>
}

export default memo(Header);