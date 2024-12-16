import { FaChevronRight } from 'react-icons/fa';

type Props = {
  onClick: () => void;
};

export function NextButton({ onClick }: Props) {
  return (
    <button className="next-button" onClick={onClick}>
      <FaChevronRight />{' '}
    </button>
  );
}
