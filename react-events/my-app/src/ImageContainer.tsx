import './ImageContainer.css';

type Props = {
  srcs: string;
  onContainerClick: () => void;
};

export function ImageContainer({ srcs, onContainerClick }: Props) {
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
