import './RaceList.css'
import {RacesList} from "../../types/races";
import RacesListItem from "../RaceListItem/RacesListItem";
import {Typography} from "@mui/material";

type Props = { races: RacesList[] }


const RaceList  = ({ races }: Props) => {
    return (
        <div data-testid="race-data">
            <div className="header-row" >
                <Typography className="header" variant="h5"> Meeting</Typography>
                <Typography className="header" variant="h5"> Race</Typography>
                <Typography className="header" variant="h5"> Starts In </Typography>
            </div>
            {races.map((race) => <RacesListItem  key={race.raceId} race={race} />)}
        </div>
    );
};

export default RaceList;