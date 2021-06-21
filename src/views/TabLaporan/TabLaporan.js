import React from "react";
import {CListGroupItem,} from '@coreui/react'
import moment from 'moment';

function TabLaporan({onClick, Email, catatan, waktu}) {
  return (
    <div>
        <CListGroupItem className="justify-content-between" style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', height: 46}} onClick={onClick}>
            <p>{Email}</p>
            <p>{catatan}</p>
            <p>{moment(waktu).format('ddd, DD/MM/YYYY')}</p> 
        </CListGroupItem>
    </div>
  );
}

export default TabLaporan;
