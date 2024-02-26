import {
  AuthContainer,
  AuthDoor,
  AuthH1,
  AuthImg,
  AuthLayout,
  AuthLeft,
  AuthRight,
} from './styled'
import AuthImage from '../../assets/images/AuthImage.jpg'
import { Outlet } from 'react-router-dom'

const LoginRegister = () => {
  return (
    <AuthLayout>
      <AuthLeft>
        <AuthDoor></AuthDoor>
        <AuthImg src={AuthImage} alt="auth" />
      </AuthLeft>
      <AuthRight>
        {window.location.pathname == '/auth' ? (
          <AuthH1>
            <a href="auth/login">login</a> or{' '}
            <a href="auth/register">register</a>
          </AuthH1>
        ) : (
          <AuthContainer>
            <Outlet />
          </AuthContainer>
        )}
      </AuthRight>
    </AuthLayout>
  )
}

export default LoginRegister
