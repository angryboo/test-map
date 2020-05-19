import React from 'react';
import { Map } from 'react-kakao-maps';
import './Map.css';

function TestMap() {
  return (
    <div className="Map">
      <Map
        options={{
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        }}
      />
    </div>
  );
}

export default TestMap;
