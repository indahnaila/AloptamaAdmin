import React from "react";
import {CListGroupItem,} from '@coreui/react'
import moment from 'moment';


function TabLaporan({onClick, Email, catatan, waktu, kondisi}) {

  // nilai.waktu dibah jadi waktu, karena propsnya waktu
  const tanggal = moment(waktu).format('ddd, YYYY/MM/DD, HH:mm');
  

  return (
    <div>
        <CListGroupItem 
        className="justify-content-between" 
        style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', height: 46, backgroundColor: 'light-grey'}} 
        onClick={onClick}>
            <p>{Email}</p>
            <p style={{maxWidth: 500, display: '-webkit-box', WebkitBoxOrient : 'vertical', WebkitLineClamp: 1, whiteSpace: 'nowrap', msOverflowStyle: '-ms-autohiding-scrollbar', overflowY: 'hidden', height: 40}}>{catatan}</p>
            <p>{tanggal}</p> 
        </CListGroupItem>
    </div>
  );
}

export default TabLaporan;