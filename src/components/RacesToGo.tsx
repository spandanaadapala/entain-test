import './RacesToGo.css'
import {useNextRaces} from "../hooks/useNextRaces";
import {GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID, THOROUGHBRED_CATEGORY_ID} from "../types/constants";
import {useState} from "react";
import {Container, Typography} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import RacesList from "./RaceList/RacesList";
import CategorySelection from "./CategorySelection/CategorySelection";

const INITIAL_STATE: Array<string> = [THOROUGHBRED_CATEGORY_ID, GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID]

const RacesToGo = () => {
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>(INITIAL_STATE);

    const onFilterChange = (category: string, checked: boolean) => {
        if(checked){
            setSelectedCategories(prevState => [...prevState, category]);
        }else{
            setSelectedCategories(prevState => {
              const filtered =   prevState.filter(cg => cg !== category)
                if(filtered.length === 0){
                    return INITIAL_STATE;
                }
                return filtered;
            });
        }
    }

    const { races, isLoading } = useNextRaces(selectedCategories);
    return (
        <Container maxWidth="xl" className="container">
            <Typography variant="h3"> Next to go </Typography>
            <CategorySelection selectedCategories={selectedCategories} onFilterChange={onFilterChange}></CategorySelection>
            { isLoading ? <Skeleton width="90%" /> : <RacesList races={races} /> }
        </Container>
    );
};

export default RacesToGo;