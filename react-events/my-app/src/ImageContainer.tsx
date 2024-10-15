import './ImageContainer.css';

type Props = {
  srcs: string;
  onContainerClick: () => void;
};

export function ImageContainer({ srcs, onContainerClick }: Props) {
  /* const [imageIndex, setImageIndex] = useState(0);

  function handleClick() {
    if (imageIndex >= srcs.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }
*/
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={onContainerClick}
          className="image-fill"
          src={srcs}
          alt="space-image"
        />
      </div>
    </div>
  );
}
