import './ToggleSwitch.css';

type Props = {
  isOn: boolean,
  onClick: () => void,
}
export function ToggleSwitch({isOn, onClick}: Props){


  return (
      <div className="toggle-switch" onClick={onClick}>
        <input type="checkbox" checked={isOn} readOnly />
    <div className={`slider-background ${isOn ? 'on': 'off'}`}>
      <div className={`switch ${isOn ? 'right': 'left'}`}></div>
    </div>
    <span className="state-label"> {isOn ? 'ON': 'OFF' } </span>
  </div>
  )
  }
