import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, screen} from '@testing-library/react'
import CategorySelection from "../CategorySelection/CategorySelection";
import {GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID, THOROUGHBRED_CATEGORY_ID} from "../../types/constants";

test('CategorySelection should be render with 3 categories default checked', async () => {
  const CATEGORIES =  [THOROUGHBRED_CATEGORY_ID, GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID]
  const onFilterChange = jest.fn();

  render(<CategorySelection selectedCategories={CATEGORIES} onFilterChange={onFilterChange}/>)
  const abc = screen.getAllByTestId('category-selection');
  expect(abc.length).toBe(3);
  expect(abc[0].checked).toBeTruthy();
  expect(abc[1].checked).toBeTruthy();
  expect(abc[2].checked).toBeTruthy();
})