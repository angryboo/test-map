import React, { useEffect, useState } from 'react';
import './Map.css';

function TestMap() {
  const [map, setState] = useState({});
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(37.544579, 127.056045),
      level: 3,
    };

    const craeteMap = new kakao.maps.Map(container, options);
    kakao.maps.event.addListener(craeteMap, 'dragend', () => {
      console.log(craeteMap.getCenter());
    });

    setState(craeteMap);
  }, [kakao.maps.LatLng, kakao.maps.Map, kakao.maps.event]);

  console.dir(kakao.maps);

  return (
    <div>
      <button type="button" onClick={() => console.log(map.getCenter())}>
        bbbb
      </button>
      <div id="map" />
    </div>
  );
}

export default TestMap;
