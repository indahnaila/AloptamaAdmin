import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'AWS',
    to: '/Aws',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'AWOS',
    to: '/Awos',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'AAWS',
    to: '/Aaws',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ceilometer',
    to: '/Ceilometer',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Radar',
    to: '/Radar',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Seiscomp3',
    to: '/Seiscomp3',
    icon: 'cil-chart-pie',
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Log Out',
  //   to: '/LoginPage',
  //   icon: 'cil-chevron-left',
  // },
]

export default _nav
