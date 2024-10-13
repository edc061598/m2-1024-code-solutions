type Props = {
  label: string;
};

export function ButtonContainer({ label }: Props) {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}
