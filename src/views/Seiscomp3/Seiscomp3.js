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

function Seiscomp3() {
  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="7" lg="12" className="d-none d-md-block">
              <CCardHeader style={{ fontWeight: "500", textAlign: 'center', fontSize: 16}}>
                Hasil Laporan Seiscomp3
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

export default Seiscomp3;
