import './CategorySelection.css';
import {GREYHOUND_CATEGORY_ID, HARNESS_CATEGORY_ID, THOROUGHBRED_CATEGORY_ID} from '../../types/constants'
import {Checkbox, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const CATEGORIES: {
  name: string,
  categoryId: string
}[] = [
  {
    name: 'Thoroughbred',
    categoryId: THOROUGHBRED_CATEGORY_ID,
  },
  {
    name: 'Greyhound',
    categoryId: GREYHOUND_CATEGORY_ID,
  },
  {
    name: 'Harness',
    categoryId: HARNESS_CATEGORY_ID,
  },
];

type Props = { selectedCategories: Array<string>, onFilterChange: (category: string, checked: boolean) => void };



const CategorySelection = ({ selectedCategories, onFilterChange }: Props) => {

  const [categories, setCategories] = useState<Array<string>>(selectedCategories);

  useEffect(() => {
    setCategories(selectedCategories);
  }, [selectedCategories]);

  const isChecked = (categoryId: string): boolean => {
    return categories.includes(categoryId);
  }
  return (
    <div className="category-selections" >
      {CATEGORIES.map((selection) => (
        <div className="category-selection" key={selection.categoryId}>
          <input type="checkbox" className="filter-checkbox" data-testid="category-selection"
                 checked={selectedCategories.includes(selection.categoryId)}
                 onChange={(event:  React.ChangeEvent<HTMLInputElement>) => onFilterChange(selection.categoryId, event.target.checked)} />
          <Typography variant="h6">{selection.name}</Typography>
        </div>
      ))}
    </div>
  );
}

export default CategorySelection;
