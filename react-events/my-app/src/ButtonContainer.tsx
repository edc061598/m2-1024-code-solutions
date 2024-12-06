type Props = {
  label: string[];
  onButtonClick: () => void;
};

export function ButtonContainer({ label, onButtonClick }: Props) {
  return (
    <div>
      <button onClick={onButtonClick}>{label}</button>
    </div>
  );
}
