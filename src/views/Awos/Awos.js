import React, {useEffect} from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
  } from '@coreui/react'
import { useHistory } from 'react-router-dom';
import TabLaporan from "../TabLaporan/TabLaporan";
import {Fire} from '../../config'

function Awos() {
    const history = useHistory();
    console.log('history data', history);
    function handleClick(uid, date) {
      history.push(`/HasilLaporan/${uid}/${date}`);
    }
    const [nilai, setNilai] = React.useState([]);
    const parseArray = listObject => {
      const data = [];
      Object.keys(listObject).map(key => {
        return data.push({
          // id: key,
          ...listObject[key],
        });
      });
      return data;
    };

  useEffect(() => {
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
                {nilai.map(item => {
                  console.log(item)
                  return (
                    <TabLaporan 
                    key={item.id}
                    catatan={item.catatan}
                    waktu={item.waktu}
                    Email={item.Email}
                    onClick={() => handleClick(item.uid, item.id)}/>
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
