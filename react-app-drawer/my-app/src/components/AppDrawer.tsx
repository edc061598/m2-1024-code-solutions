import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [open, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`transition-all text-white p-4 ${
          open ? 'w-64' : 'w-16'
        } flex-shrink-0`}
        style={{ minWidth: open ? '16rem' : '4rem' }}>
        <div className="flex justify-between items-center mb-8">
          <button onClick={toggleDrawer} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
        <nav className=" text-white">
          <h1 className={`text-xl font-bold mb-4 ${open ? 'block' : 'hidden'}`}>
            Hylian Shopping
          </h1>
          <ul className="space-y-6">
            {menuItems.map((menu) => (
              <li key={menu.name} className="flex items-center space-x-4">
                <img src={menu.iconUrl} alt={menu.name} className="w-6 h-6" />
                <span className={`transition-all ${open ? 'block' : 'hidden'}`}>
                  <Link to={menu.path} className="text-white">
                    {menu.name}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`flex-grow transition-all ${open ? 'ml-64' : 'ml-16'}`}>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
