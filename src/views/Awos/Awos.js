import React, {useEffect} from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'
import TabLaporan from "../TabLaporan/TabLaporan";
import { useHistory } from 'react-router-dom';
import {Fire} from '../../config'

function Awos() {
    const history = useHistory();

    // sama kaya di AAWS
    function handleClick(alat, uid, date) {
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
      Fire.database().ref(`AWOS`).on('value', snapshot => {
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
                Hasil Laporan AWOS
              </CCardHeader>
              <CCardBody></CCardBody>
                {nilai
                .sort((a,b) => b.waktu - a.waktu)
                .map(item => {
                  console.log(item)
                  return (
                    <TabLaporan 
                    key={item.id}
                    catatan={item.catatan}
                    waktu={item.waktu}
                    Email={item.Email}
                    onClick={() => handleClick(item.alat, item.uid, item.id)}/>
                  )
                })}
              <CCardBody>
              </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default Awos;
