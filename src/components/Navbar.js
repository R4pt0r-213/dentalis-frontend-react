import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-primary text-2xl font-poppins font-bold">Dentalis</h1>
      <div>
        <Link to="/login" className="text-dark px-4 hover:text-primary">Connexion</Link>
        <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-600">
          Inscription
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
