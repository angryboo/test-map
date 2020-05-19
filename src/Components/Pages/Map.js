/* global kakao */
import React, { useEffect } from 'react';
import './Map.css';

function TestMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    console.log(map);
  }, []);
  return <div id="map" />;
}

export default TestMap;
