import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <Link to="/" className="text-white">Landing</Link>
        </li>
        <li>
          <Link to="/home" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/login" className="text-white">Login</Link>
        </li>
        <li>
          <Link to="/register" className="text-white">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
