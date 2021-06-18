import React from "react";
import {
    CBadge,
    CDataTable,
    CListGroupItem,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'
import { useHistory } from 'react-router-dom';
import TabLaporan from "../TabLaporan/TabLaporan";

function Aaws() {
    const history = useHistory();
    function handleClick() {
      history.push("/HasilLaporan");
    }

  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="7" lg="12" className="d-none d-md-block">
              <CCardHeader style={{ fontWeight: "500", textAlign: 'center', fontSize: 16}}>
                Hasil Laporan AAWS
              </CCardHeader>
              <CCardBody>
                <TabLaporan onClick={handleClick}/>
              </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Aaws;
