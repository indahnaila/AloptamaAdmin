import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-primary"
          header="22"
          text="AWS"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '40px'}}
              dataPoints={[55, 39, 60, 62, 51, 55, 40]}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-info"
          header="18"
          text="AWOS"
          footerSlot={
            <ChartBarSimple
            className="mt-3 mx-3"
            style={{height: '40px'}}
            backgroundColor="#AEE1F1"
            label="Members"
            labels="months"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-warning"
          header="15"
          text="AAWS"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{height: '40px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[78, 81, 80, 45, 34, 12, 40]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-danger"
          header="10"
          text="Ceilometer"
          footerSlot={
            <ChartLineSimple
            pointed
            className="mt-3 mx-3"
            style={{height: '40px'}}
            dataPoints={[1, 18, 9, 17, 23, 22, 11]}
            pointHoverBackgroundColor="rgb(250, 152, 152)"
            options={{ elements: { line: { tension: 0.00001 }}}}
            label="Members"
            labels="months"
          />

          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-success"
          header="11"
          text="Radar"
          footerSlot={
            <ChartLineSimple
            className="mt-3"
            style={{height: '40px'}}
            backgroundColor="rgba(255,255,255,.2)"
            dataPoints={[78, 81, 80, 45, 34, 12, 40]}
            options={{ elements: { line: { borderWidth: 2.5 }}}}
            pointHoverBackgroundColor="warning"
            label="Members"
            labels="months"
          />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="2">
        <CWidgetDropdown
          color="gradient-warning"
          header="12"
          text="Seiscomp3"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '40px'}}
              backgroundColor="#E9E7C6"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
