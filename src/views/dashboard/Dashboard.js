import React, { lazy, useEffect, useState } from 'react'
import {
  CBadge,
  CDataTable,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  
} from '@coreui/react'
import usersData from '../users/UsersData'
import { Fire } from '../../config'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Tanggal','Email','AWS', 'AWOS', 'AAWS', 'CEILOMETER', 'RADAR', 'SEISCOMP3', ]

const Dashboard = () => {
  const [dataAdmin, setDataAdmin] = useState();

  const fetchDatas = async () =>{
    const datas = await Fire.database().ref('Admin').on('value', (snapshot) =>{
      setDataAdmin(Object.values(snapshot.val()));
    });
  }
  
  useEffect(() =>{
    fetchDatas();
  }, [])

  console.log(dataAdmin);

  return (
    <div>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="7" lg='12' className="d-none d-md-block">
            <CCardHeader style={{fontWeight:'500'}}>
              Data Laporan Harian Alat
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={dataAdmin}
              fields={fields}
              striped
              itemsPerPage={20}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Dashboard
