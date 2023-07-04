import {GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID, THOROUGHBRED_CATEGORY_ID} from "./constants";

export type NextRacesCategoryGroupResponse = {
    category_race_map: any;
    race_summaries: {
        [race_id: string]: {
            advertised_start: AdvertisedStart;
            category_id: RacingCategory;
            meeting_id: string;
            meeting_name: string;
            race_form: any;
            race_id: string;
            race_name: string;
            race_number: number;
            venue_country: string;
            venue_id: string;
            venue_name: string;
            venue_state: string;
            video: any;
        };
    };
};

export type AdvertisedStart = {
    seconds: number;
}

export type RacingCategory =
    | typeof THOROUGHBRED_CATEGORY_ID
    | typeof GREYHOUND_CATEGORY_ID
    | typeof HARNESS_CATEGORY_ID;

export type CategoryFilters = {
    [THOROUGHBRED_CATEGORY_ID]: boolean;
    [GREYHOUND_CATEGORY_ID]: boolean;
    [HARNESS_CATEGORY_ID]: boolean;
};

export type RacesList = {
    raceId: string;
    meetingName: string;
    raceNumber: number;
    advertisedStart: Date;
    categoryId: RacingCategory;
};
