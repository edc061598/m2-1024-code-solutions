import { Outlet } from 'react-router-dom';

type Props = {
  text: string;
};
export function Header({ text }: Props) {
  return (
    <div className="container m-4">
      <h1 className="mb-4">{text}</h1>
      <Outlet />
    </div>
  );
}
