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
import {Fire} from '../../config'

function Aaws() {
  const history = useHistory();

  // disini alatnya diterima
    function handleClick(alat, uid, date) {
      // terus dikirim ke Hasil Laporan
      history.push(`/HasilLaporan/${alat}/${uid}/${date}`);
    }
    const [nilai, setNilai] = React.useState([]);
    const parseArray = listObject => {
      const data = [];
      Object.keys(listObject).map(key => {
        data.push({
          // id: key,
          ...listObject[key],
        });
      });
      return data;
    };

  React.useEffect(() => {
    Fire.auth().onAuthStateChanged(user => {
      Fire.database().ref(`AAWS`).on('value', snapshot => {
        const semuaUser = parseArray(snapshot.val());
        const newData = [];
        semuaUser.forEach(data => {
          Object.keys(data).forEach(key => {
            newData.push({
              id: key,
              ...data[key],
            })
          });
        })
        setNilai(newData);
      });
    })
  }, []);

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
                {nilai
                .sort((a,b) => b.waktu - a.waktu)
                .map(item => {
                   return (
                    <TabLaporan 
                      key={item.id}
                      catatan={item.catatan}
                      kondisi={item.kondisi}
                      waktu={item.waktu}
                      Email={item.Email}
                      // di sini ditambah item.alat buat ngirim nama alatnya
                      onClick={() => handleClick(item.alat, item.uid, item.id)}/>
                    )
                  })}
              </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Aaws;