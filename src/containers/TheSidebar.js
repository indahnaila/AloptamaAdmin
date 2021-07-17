import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CButton,
} from '@coreui/react'
import aloptama from '../assets/gambar/logoaloptama.png'
import logobmkg from '../assets/gambar/logobmkg.png'
import { useHistory } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import Fire from '../config/Fire'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  const signOut = () => {
    Fire.auth()
      .signOut()
      .then(() => {
        history.replace('LoginPage');
      })
      .catch(err => {
        // showMessage({
        //   message: err.message,
        //   type: 'default',
        //   backgroundColor: 'red',
        //   color: 'white',
        // });
      });
      console.log('cek', signOut)
  };

  return (
    <CSidebar
      style={{backgroundColor: '#334752'}}
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          Img src={aloptama}
          name=""
          height={40}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          Img src={logobmkg}
          name=""
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
        <CButton style={{backgroundColor: '#018A83', color: 'white', marginLeft: 50, marginRight: 50, marginTop: 100}} className="px-4" onClick={signOut}>Log Out</CButton>
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
