import * as React from "react"

import { useDispatch } from "react-redux";


import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { GenderProps } from "./GenderFilter.types";


import { setGender } from "store/users/users.actions";


const ButtonsForFiter: React.FC<GenderProps> = ({gender}) => {

  const dispatch = useDispatch();

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    changeGender: string,
  ) => {
    dispatch(setGender(changeGender));
  };


  return (
    <ToggleButtonGroup
      value={gender}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="female," aria-label="bold">
        <FemaleIcon />
      </ToggleButton>
      <ToggleButton value="male" aria-label="italic">
        <MaleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ButtonsForFiter;