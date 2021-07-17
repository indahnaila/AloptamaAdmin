import React from 'react';
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Awos = React.lazy(() => import('./views/Awos/Awos'));
const Aws = React.lazy(() => import('./views/Aws/Aws'));
const Aaws = React.lazy(() => import('./views/Aaws/Aaws'));
const Radar = React.lazy(() => import('./views/Radar/Radar'));
const Ceilometer = React.lazy(() => import('./views/Ceilometer/Ceilometer'));
const Seiscomp3 = React.lazy(() => import('./views/Seiscomp3/Seiscomp3'));
const HasilLaporan = React.lazy(() => import('./views/HasilLaporan/HasilLaporan'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/LoginPage', name: 'Login Page', component: LoginPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/Awos', name: 'AWOS', component: Awos },
  { path: '/Aws', name: 'AWS', component: Aws },
  { path: '/Aaws', name: 'AAWS', component: Aaws },
  { path: '/Radar', name: 'Radar', component: Radar },
  { path: '/Ceilometer', name: 'Ceilometer', component: Ceilometer },
  { path: '/Seiscomp3', name: 'Seiscomp3', component: Seiscomp3 },
  // Disini ditambah parameter :alat
  { path: '/HasilLaporan/:alat/:id/:date', name: 'Hasil Laporan', component: HasilLaporan },
];

export default routes;