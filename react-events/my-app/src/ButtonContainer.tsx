type Props = {
  label: string[];
  onButtonClick: () => void;
};

export function ButtonContainer({ label, onButtonClick }: Props) {
  /* function handleClick(){
    console.log('The button was clicked');
  }*/
  return (
    <div>
      <button onClick={onButtonClick}>{label}</button>
    </div>
  );
}
