import React from "react";
import {CListGroupItem,} from '@coreui/react'
import moment from 'moment';


function TabLaporan({onClick, Email, catatan, waktu}) {

  // nilai.waktu dibah jadi waktu, karena propsnya waktu
  const tanggal = moment(waktu).format('ddd, YYYY/MM/DD, HH:mm');
  

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