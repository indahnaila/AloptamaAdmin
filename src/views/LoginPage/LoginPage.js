import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import logoaloptama from '../../assets/gambar/logoaloptama.png'
import Fire from '../../config/Fire'
import {useForm, storeData} from '../../utils'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const onContinue = () => {
    Fire.auth()
      .signInWithEmailAndPassword(form.username, form.password)
      .then(res => {
        console.log('success:', res);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              history.replace('/dashboard');
            }
          });
      })
      .catch(err => {
        console.log('error:', err);
        // showMessage({
        //   message: err.message,
        //   type: 'default',
        //   backgroundColor: 'red',
        //   color: 'white',
        // });
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8" >
            <CCardGroup >
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" 
                      placeholder="Username" 
                      autoComplete="username" 
                      event={form.username}
                      onChange={event => setForm('username', event.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" 
                      placeholder="Password" 
                      autoComplete="current-password"
                      event={form.password}
                      onChange={event => setForm('password', event.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton style={{backgroundColor: '#334752', color: 'white'}} className="px-4" to='/dashboard' onClick={onContinue}>Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard style={{ width: '44%', backgroundColor: '#334752' }} className="text-white py-5 d-md-down-none" >
                <CCardBody className="text-center" >
                  <div style={{alignItems: 'center'}}>
                    <img src={logoaloptama} alt='' style={{width: '140px', height: '60px'}}/>
                    <h2 style={{marginTop: '20px', color:"#ced2d8"}}>Administrator</h2>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default LoginPage
