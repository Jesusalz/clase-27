import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <h1>Registro</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <p>ya tenes cuenta? <Link to="/login">Login aca</Link></p>
    </div>
  );
}

export default RegisterPage;
