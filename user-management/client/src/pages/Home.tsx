import { useNavigate } from 'react-router-dom';
import { Todos } from '../components/Todos';
import { useUser } from '../components/useUser';

export function Home() {
  const { user, handleSignOut } = useUser();
  const navigate = useNavigate();

  return (
    <div className="container m-4">
      <div className="flex flex-wrap mb-4">
        {!user && (
          <>
            <div className="relative flex-grow flex-1 px-4">
              <button
                className="inline-block align-middle text-center border rounded py-1 px-3 bg-blue-600 text-white"
                onClick={() => navigate('sign-up')}>
                Sign Up
              </button>
            </div>
            <div className="relative flex-grow flex-1 px-4">
              <button
                className="inline-block align-middle text-center border rounded py-1 px-3 bg-blue-600 text-white"
                onClick={() => navigate('sign-in')}>
                Sign In
              </button>
            </div>
          </>
        )}
        {user && (
          <div className="relative flex-grow flex-1 px-4">
            <button
              className="inline-block align-middle text-center border rounded py-1 px-3 bg-blue-600 text-white"
              onClick={() => {
                handleSignOut();
                navigate('/');
              }}>
              Sign Out
            </button>
          </div>
        )}
      </div>
      {user && (
        <p className="py-2">
          Signed in as {user.username} with ID: {user.userId}
        </p>
      )}
      {!user && <p>Not signed in</p>}
      {user && <Todos />}
    </div>
  );
}
