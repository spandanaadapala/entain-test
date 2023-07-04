import './RaceListItem.css'
import {RacesList} from "../../types/races";
import {Typography} from "@mui/material";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

type Props = { race: RacesList }


const RacesListItem  = ({ race }: Props) => {
    return (
        <div className="data-row">
            <Typography className="data-item" variant="body1"> {race.meetingName}</Typography>
            <Typography className="data-item" variant="body1"> {race.raceNumber}</Typography>
            <div className="data-item"> <CountdownTimer advertisedStart={race.advertisedStart}/></div>
         </div>
    );
};

export default RacesListItem;