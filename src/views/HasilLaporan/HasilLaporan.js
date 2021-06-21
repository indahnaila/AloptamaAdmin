import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CImg,
} from "@coreui/react";
import Logobmkg from "../../assets/gambar/logobmkg.png";
import { Fire } from "../../config";
import { useParams } from "react-router-dom";
import moment from "moment";

function HasilLaporan() {

  // dsini alat diambil dari params
  let { id, date, alat } = useParams();
  const [nilai, setNilai] = React.useState({});
  const [image, setImage] = useState();
  const parseArray = (listObject) => {
    const data = [];
    Object.keys(listObject).map((key) => {
      data.push({
        id: key,
        data: listObject[key],
      });
    });
    return data;
  };
  const waktu = moment(nilai.waktu).format("ddd, YYYY/MM/DD, HH:mm");

  useEffect(() => {
    Fire.auth().onAuthStateChanged((user) => {
      Fire.database()
      // ref diganti jadi alat, toUpperCase itu biar alatnya jadi kapital semua
        .ref(`${alat.toUpperCase()}/${id}/${date}`)
        .on("value", (snapshot) => {
          const dataRes = snapshot.val();
          console.log(`dataRes ==> `, dataRes);
          setNilai(dataRes);
        });
    });
  }, []);

  return (
    <div>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="7" lg="12" className="d-none d-md-block">
              <CCardHeader
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: 18,
                  marginBottom: 10,
                }}
              >
                <CImg
                  src={Logobmkg}
                  style={{ width: 35, height: 35, marginRight: 10 }}
                  className="c-avatar-img"
                  alt="logobmkg"
                />
                Laporan Harian Status Peralatan Operasional Utama (ALOPTAMA)
              </CCardHeader>
              <CCardBody>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Alat</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.alat}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Waktu</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {waktu}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Lokasi</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.lokasi}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Merk</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.merk}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Tahun</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.tahun}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Kondisi</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.kondisi}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Catatan</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.catatan}
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 144,
                    }}
                  >
                    <p>Foto</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    <CImg
                      src={{ uri: image }}
                      style={{ width: 120, height: 120 }}
                      className="c-avatar-img"
                      alt="alat"
                    />
                  </CListGroupItem>
                </CListGroup>
                <CListGroup style={{ flexDirection: "row" }}>
                  <CListGroupItem
                    style={{
                      width: 300,
                      flexDirection: "row",
                      display: "flex",
                      justifyContent: "space-between",
                      height: 50,
                    }}
                  >
                    <p>Petugas</p>
                    <p>:</p>
                  </CListGroupItem>
                  <CListGroupItem style={{ width: 650 }}>
                    {nilai.petugas}
                  </CListGroupItem>
                </CListGroup>
              </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default HasilLaporan;