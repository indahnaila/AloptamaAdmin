import React from "react";
import {
    CBadge,
    CDataTable,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'
import TabLaporan from "../TabLaporan/TabLaporan";

function Radar() {
  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="7" lg="12" className="d-none d-md-block">
              <CCardHeader style={{ fontWeight: "500", textAlign: 'center', fontSize: 16}}>
                Hasil Laporan Radar
              </CCardHeader>
              <CCardBody>
                <TabLaporan/>
              </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Radar;
