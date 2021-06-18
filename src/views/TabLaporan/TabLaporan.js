import React from "react";
import {CListGroupItem,} from '@coreui/react'

function TabLaporan({onClick, Email, catatan, waktu}) {
  return (
    <div>
        <CListGroupItem className="justify-content-between" style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between', height: 46}} onClick={onClick}>
            <p>{Email}</p>
            <p>{catatan}</p>
            <p>{waktu}</p> 
        </CListGroupItem>
    </div>
  );
}

export default TabLaporan;
