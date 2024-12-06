type Props = {
  descs: string;
  onDescriptionClick: () => void;
};

export function ImageDescription({ descs, onDescriptionClick }: Props) {
  return (
    <div>
      <p onClick={onDescriptionClick}>{descs}</p>
    </div>
  );
}
