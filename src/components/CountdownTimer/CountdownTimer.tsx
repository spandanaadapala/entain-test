import './CountdownTimer.css'
import { useEffect, useState } from "react";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
type Props = { advertisedStart: Date };

const CountdownTimer = ({ advertisedStart }: Props) => {
  const [countdownString, setCountdownString] = useState<string>();

  const getCountdownString = (): string => {
    let secondsFromNow = Math.floor((advertisedStart.getTime() - (new Date()).getTime()) / 1000);
    const prefix = secondsFromNow < 0 ? '-' : '';
    secondsFromNow = Math.abs(secondsFromNow);

    if (Math.abs(secondsFromNow) < 60) {
      return `${prefix}${secondsFromNow}s`;
    }

    const hours = Math.floor(secondsFromNow / (60 * 60));
    let secondsRemainder = secondsFromNow  - hours * 60 * 60;

    const minutes = Math.floor(secondsRemainder / 60);
    secondsRemainder = secondsRemainder  - minutes * 60 ;

    if(hours === 0 ){
        return `${prefix}${minutes}m ${secondsRemainder}s`;
    }
    return `${prefix}${hours}h ${minutes}m ${secondsRemainder}s`;
  }

  useEffect(() => {
    setCountdownString(getCountdownString());
    setInterval(() => {
      setCountdownString(getCountdownString());
    }, 1000);
  }, [advertisedStart]);

  return (
      <div className="timer-container">
        <AccessTimeOutlinedIcon/>
        <span data-testid="countdown-display" className="timer"> {countdownString}</span>
      </div>

  )
}

export default CountdownTimer;
