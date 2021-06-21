import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Awos = React.lazy(() => import('./views/Awos/Awos'));
const Aws = React.lazy(() => import('./views/Aws/Aws'));
const Aaws = React.lazy(() => import('./views/Aaws/Aaws'));
const Radar = React.lazy(() => import('./views/Radar/Radar'));
const Ceilometer = React.lazy(() => import('./views/Ceilometer/Ceilometer'));
const Seiscomp3 = React.lazy(() => import('./views/Seiscomp3/Seiscomp3'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const HasilLaporan = React.lazy(() => import('./views/HasilLaporan/HasilLaporan'));
const ToolReport = React.lazy(() => import('./views/ToolReport'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/AWOS', name: 'AWOS', component: ToolReport },
  { path: '/AWS', name: 'AWS', component: ToolReport },
  { path: '/AAWS', name: 'AAWS', component: ToolReport },
  { path: '/Radar', name: 'Radar', component: ToolReport },
  { path: '/Ceilometer', name: 'Ceilometer', component: ToolReport },
  { path: '/Seiscomp3', name: 'Seiscomp3', component: ToolReport },
  { path: '/LoginPage', name: 'Login Page', component: ToolReport },
  { path: '/HasilLaporan/:id/:date', name: 'Hasil Laporan', component: HasilLaporan },
];

export default routes;
