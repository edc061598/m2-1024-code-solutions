type Props = {
  text: string;
};

export function Header({ text }: Props) {
  return <h1>{text}</h1>;
}
