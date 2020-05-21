import React from 'react';
import './App.css';
import TestMap from './Components/Pages/Map';
import useFetch from './Hooks/useFetch';
import { address } from './API/AddressAPI';
import { coordinates } from './API/CoordinatesAPI';
import { transcoord } from './API/TranscoordAPI';

function App() {
  const [state] = useFetch();
  const getAddress = async (keyword) => {
    const { data } = await address.getAddress(keyword);
    console.log(data);
  };

  const obj = {
    admCd: '1120011500',
    bdKdcd: '0',
    bdMgtSn: '1120011500103000001000002',
    bdNm: '성수역',
    buldMnnm: '100',
    buldSlno: '0',
    detBdNmList: '지하철 2호선',
    emdNm: '성수동2가',
    emdNo: '02',
    engAddr: '100, Achasan-ro, Seongdong-gu, Seoul',
    jibunAddr: '서울특별시 성동구 성수동2가 300-1 성수역',
    liNm: '',
    lnbrMnnm: '300',
    lnbrSlno: '1',
    mtYn: '0',
    rn: '아차산로',
    rnMgtSn: '112003000002',
    roadAddr: '서울특별시 성동구 아차산로 100 (성수동2가)',
    roadAddrPart1: '서울특별시 성동구 아차산로 100',
    roadAddrPart2: ' (성수동2가)',
    sggNm: '성동구',
    siNm: '서울특별시',
    udrtYn: '0',
    zipNo: '04782',
  };

  const getCoordinates = async (_data) => {
    const { data } = await coordinates.getCoordinates(_data);
    console.log(data);
  };

  const objb = {
    admCd: '1120011500',
    bdMgtSn: '1120011500103000001000002',
    bdNm: '성수역',
    buldMnnm: '100',
    buldSlno: '0',
    entX: '960785.6226999434',
    entY: '1949556.2109900936',
    rnMgtSn: '112003000002',
    udrtYn: '0',
  };

  const getTranscoord = async (_data) => {
    const { data } = await transcoord.getTranscoord(_data);
    console.log(data);
  };

  const handleClickA = () => {
    console.log(state);
    getAddress('성수역');
    getCoordinates(obj);
    getTranscoord(objb);
  };

  return (
    <div className="App">
      <button type="button" onClick={handleClickA}>
        확인
      </button>
      <TestMap />
    </div>
  );
}

export default App;
