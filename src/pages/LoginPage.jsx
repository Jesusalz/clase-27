import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>contraseña:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>No tenes cuenta? <Link to="/register">Registrate</Link></p>
    </div>
  );
}

export default LoginPage;
