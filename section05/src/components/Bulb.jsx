import { use, useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState('ON');

  const onLightClick = (e) => {
    setLight(light === 'ON' ? 'OFF' : 'ON');
  }

  return (
    <>
      <div>
        {light === 'ON' ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>

        ) : (

          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
        
        <p>랜더 발생{console.log('render')}</p>
        <button type="button" onClick={onLightClick}>
          {light === 'ON' ? 'OFF' : 'ON'}</button>
      </div>
    </>
  )
}

export default Bulb;