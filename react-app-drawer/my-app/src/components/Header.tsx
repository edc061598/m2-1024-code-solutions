import { Link, Outlet } from 'react-router-dom';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function Header({ menuItems }: Props) {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-4">
              <Link to={menu.path} className="text-white">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
