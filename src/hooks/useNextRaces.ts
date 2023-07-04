import {useEffect, useState} from "react";

import {API_ENDPOINT, RACE_CATEGORIES} from "../types/constants";
import {NextRacesCategoryGroupResponse, RacesList} from "../types/races";

export const useNextRaces = (selectedCategories: Array<string>): { races: RacesList[], isLoading: boolean } => {
  const LIMIT = 5 * 60 * 1000; // TIME LIMIT 5 mins
  const [unfilteredRaces, setUnfilteredRaces] = useState<RacesList[]>([]);
  const [races, setRaces] = useState<RacesList[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const filterRaces = (races: RacesList[]): RacesList[] => {
    const currentTime = new Date().getTime();
    return races.filter((race) =>  {
      return selectedCategories.includes(race.categoryId) && race.advertisedStart.getTime() - currentTime > - LIMIT;
    }).slice(0, 5);
    return races;
  }

  const sortRaces = (races: RacesList[]): RacesList[] => races.sort((a, b) => a.advertisedStart.getTime() - b.advertisedStart.getTime());

  const fetchRaces = async (): Promise<void> => {
    const encodedCategoryIds = encodeURIComponent(JSON.stringify(RACE_CATEGORIES));
    const url = `${API_ENDPOINT}`;

    const requestInfo = {
      headers: new Headers({ 'Content-Type': 'application/json' }),
    };

    const response = await (await fetch(url, requestInfo)).json(); /*as NextRacesCategoryGroupResponse;*/
    const data = response.data as NextRacesCategoryGroupResponse;
    const listRaces = Object.values(data.race_summaries).map<RacesList>((rawRace) => ({
      raceId: rawRace.race_id,
      meetingName: rawRace.meeting_name,
      raceNumber: rawRace.race_number,
      advertisedStart: new Date(rawRace.advertised_start.seconds * 1000),
      categoryId: rawRace.category_id,
    }));

    const sortedRaces = sortRaces(listRaces);
    setUnfilteredRaces(sortedRaces);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchRaces();
    setInterval(async () => {
      await fetchRaces();
    }, 15000);
  }, []);

  useEffect(() => {
    setRaces(filterRaces(unfilteredRaces));
  }, [selectedCategories, unfilteredRaces]);

  return { races, isLoading };
}