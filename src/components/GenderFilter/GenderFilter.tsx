import * as React from "react"

import { useDispatch } from "react-redux";


import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import {ToggleButton, ToggleButtonGroup } from '@mui/material';


import { GenderProps } from "./GenderFilter.types";
import { setGender } from "store/users/users.actions";


const ButtonsForFiter: React.FC<GenderProps> = ({gender}) => {

  const dispatch = useDispatch();

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newGender: string,
  ) => {
    if (newGender) {
      dispatch(setGender(newGender))
    };
  };

  return (
    <ToggleButtonGroup
      value={gender}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="female">
        <FemaleIcon />
      </ToggleButton>
      <ToggleButton value="male">
        <MaleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ButtonsForFiter;