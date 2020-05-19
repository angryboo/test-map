/* global kakao */
import React, { useEffect, useState } from 'react';
import './Map.css';

function TestMap() {
  const [_map, setState] = useState({});
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.544579, 127.056045),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    setState(map);
  }, []);
  return (
    <div>
      <button type="button" onClick={() => console.log(_map.getCenter())}>
        bbbb
      </button>
      <button type="button" onClick={() => console.log(_map.I)}>
        bvvvv
      </button>
      <div id="map" />
    </div>
  );
}

export default TestMap;
