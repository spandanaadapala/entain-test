/* eslint-disable testing-library/no-node-access */
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, screen} from "@testing-library/react";
import RaceList from "../RaceList/RacesList";
import {THOROUGHBRED_CATEGORY_ID} from "../../types/constants";

test('CountdownTimer Should display mins when advertisedStart is minutes apart from current time', () => {
  const races = [{
    raceId: '123',
    meetingName: 'Test Meeting',
    raceNumber: '1',
    advertisedStart: new Date(),
    categoryId: THOROUGHBRED_CATEGORY_ID,
  }]
  render(<RaceList races={races} />)
  const element = screen.getByTestId('race-data');
  expect(element.firstChild.hasChildNodes()).toBeTruthy()
  expect(element.lastChild.hasChildNodes()).toBeTruthy()

})