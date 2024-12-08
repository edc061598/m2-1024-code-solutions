import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex">
      <div className="flex-1 py-12 text-center">
        <h2>WE COULD NOT FIND THE PAGE YOU WERE LOOKING FOR!!</h2>
        <Link to={'/'} className="text-gray-700 cursor-pointer">
          {' '}
          Return to Catalog
        </Link>
      </div>
    </div>
  );
}
