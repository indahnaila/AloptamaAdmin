import React, { useEffect } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react'
import { useHistory } from 'react-router-dom';
import TabLaporan from "../TabLaporan/TabLaporan";
import { Fire } from '../../config'

function ToolReport() {
    const history = useHistory();
    const {
        location,
    } = history;

    console.log('history location', location);
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
            Fire.database().ref(location.pathname).on('value', snapshot => {
                if (snapshot.val()) {
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
                }
            });
        })
    }, []);

    return (
        <div>
            <CCard>
                <CCardBody>
                    <CRow>
                        <CCol sm="7" lg="12" className="d-none d-md-block">
                            <CCardHeader style={{ fontWeight: "500", textAlign: 'center', fontSize: 16 }}>
                                {`Hasil Laporan ${location.pathname.substring(1)}`}
                            </CCardHeader>
                            {nilai.map(item => {
                                console.log(item)
                                return (
                                    <TabLaporan
                                        key={item.id}
                                        catatan={item.catatan}
                                        waktu={item.waktu}
                                        Email={item.Email}
                                        onClick={() => handleClick(item.uid, item.id)} />
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

export default ToolReport;
