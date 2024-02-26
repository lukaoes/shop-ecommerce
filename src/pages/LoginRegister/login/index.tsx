import { Link } from 'react-router-dom'
import {
  AuthButtons,
  AuthInput,
  AuthInside,
  AuthPath,
  AuthRemember,
} from '../styled'
import SecondHeaderArrow from '../../../assets/images/SecondHeaderArrow.png'

const Login = () => {
  return (
    <AuthInside>
      <AuthPath>
        <h1>Sign In</h1>
        <div>
          <Link to="/">Home</Link>
          <img src={SecondHeaderArrow} alt="arrow" />
          <Link to="../login">Sign In</Link>
        </div>
      </AuthPath>
      <div>
        <h2>Welcome Back</h2>
        <p>Welcome! Please login to your account.</p>
      </div>
      <AuthInput>
        <h3>Email Address</h3>
        <input type="text" name="text" placeholder="Email Address" />
      </AuthInput>
      <AuthInput>
        <h3>Password</h3>
        <input type="password" name="password" placeholder="Password" />
        <AuthRemember>
          <div>
            <input
              type="checkbox"
              name="remember"
              value="value"
              id="remember"
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <span>Forgot Password</span>
        </AuthRemember>
      </AuthInput>
      <AuthButtons>
        <div>SIGN IN</div>
        <Link to="/auth/register">REGISTER</Link>
      </AuthButtons>
    </AuthInside>
  )
}

export default Login
