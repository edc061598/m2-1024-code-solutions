type Props = {
  description: string;
};

export function ImageDescription({ description }: Props) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}
