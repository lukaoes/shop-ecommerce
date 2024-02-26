import { Link } from 'react-router-dom'
import { AuthButtons, AuthInput, AuthInside, AuthPath } from '../styled'
import SecondHeaderArrow from '../../../assets/images/SecondHeaderArrow.png'

const Register = () => {
  return (
    <AuthInside>
      <AuthPath>
        <h1>Register</h1>
        <div>
          <Link to="/">Home</Link>
          <img src={SecondHeaderArrow} alt="arrow" />
          <Link to="../register">Register</Link>
        </div>
      </AuthPath>
      <div>
        <h2>Register Now</h2>
        <p>Welcome! Please register your account.</p>
      </div>
      <AuthInput>
        <h3>Username</h3>
        <input type="text" name="text" placeholder="Username" />
      </AuthInput>
      <AuthInput>
        <h3>Email Address</h3>
        <input type="text" name="text" placeholder="Email Address" />
      </AuthInput>
      <AuthInput>
        <h3>Password</h3>
        <input type="password" name="password" placeholder="Password" />
      </AuthInput>
      <AuthButtons>
        <div>REGISTER</div>
        <Link to="/auth/login">SIGN IN</Link>
      </AuthButtons>
    </AuthInside>
  )
}

export default Register
