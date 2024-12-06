type Props = {
  captions: string;
  onCaptionClick: () => void;
};

export function ImageCaption({ captions, onCaptionClick }: Props) {
  return (
    <div>
      <h3 onClick={onCaptionClick}>{captions}</h3>
    </div>
  );
}
