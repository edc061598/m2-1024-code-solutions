type Props = {
  button: string;
};

export function ButtonContainer({ button }: Props) {
  return (
    <div>
      <button>{button}</button>
    </div>
  );
}
