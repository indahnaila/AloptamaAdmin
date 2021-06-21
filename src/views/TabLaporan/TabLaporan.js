import React, {useEffect} from "react";
import {CListGroupItem,} from '@coreui/react'
import moment from 'moment';
import {Fire} from '../../config'
import { useParams } from "react-router-dom";


function TabLaporan({onClick, Email, catatan, waktu}) {
  // let {id, date} = useParams();
  const [nilai, setNilai] = React.useState({});
  // console.log('cek', nilai)
  // const parseArray = listObject => {
  //   const data = [];
  //   Object.keys(listObject).map(key => {
  //     data.push({
  //       id: key,
  //       data: listObject[key],
  //     });
  //   });
  //   return data;
  // };
  const tanggal = moment(nilai.waktu).format('ddd, YYYY/MM/DD, HH:mm');
  // useEffect(() => {
  //   Fire.auth().onAuthStateChanged(user => {
  //     Fire.database()
  //     .ref(`AWOS/${id}/${date}`)
  //     .on('value', snapshot => {
  //       const dataRes = snapshot.val()
  //       console.log(dataRes)
  //       setNilai(dataRes);
  //     });
  //   })
  // }, []);
  

  return (
    <div>
        <CListGroupItem 
        className="justify-content-between" 
        style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', height: 46, backgroundColor: 'light-grey'}} 
        onClick={onClick}>
            <p>{Email}</p>
            <p>{catatan}</p>
            <p>{tanggal}</p> 
        </CListGroupItem>
    </div>
  );
}

export default TabLaporan;
