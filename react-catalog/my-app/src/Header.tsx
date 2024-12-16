import { Outlet, Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full shadow-md px-4 text-white bg-gray-900 text-left">
        <ul>
          <li className="py-2 px-4 inline-block ">
            <Link to="/about" className="text-white">
              About
            </Link>
          </li>
          <li className="inline-block py-2 px-4 ">
            <Link to="/catalog" className="text-white">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      {<Outlet />}
    </div>
  );
}
