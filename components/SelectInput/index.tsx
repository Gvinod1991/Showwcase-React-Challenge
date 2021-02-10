
import { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../Input';
import { getUniversities } from '../../store/action';
import { debounce } from "../../utilities";

import {
  Loader, Dropdown,
  DropdownContent, DropdownContentSpan,
  Label
} from './selectInput.styles';

interface SelectInputProps {
  handleChange: Function,
  inputValue: string,
}

interface RootState {
  HomeReducer: { userName: string }
  ShowcaseReducer: {
    educationalExperiencesList: any[],
    loading: boolean,
    universitiesList: any[]
  },
}
const DELAY = 1000;
export default function SelectInput({ handleChange, inputValue }: SelectInputProps) {
  const [showSearchList, setShowSearchList] = useState<boolean>(false);
  const [searchInProgress, setSearchInProgress] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState(inputValue);
  const dispatch = useDispatch();
  const { universitiesList, loading } = useSelector(
    ({ ShowcaseReducer: { universitiesList, loading } }: RootState) => ({ universitiesList, loading })
  );

  useEffect(() => {
    setSearchQuery(inputValue);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setSearchInProgress(true);
    setShowSearchList(true);
    setSearchQuery(e.currentTarget.value);
  }

  const handleClick = (name) => {
    setSearchInProgress(false);
    setShowSearchList(false);
    setSearchQuery(name);
    handleChange(name);
  }

  const dispatchWithDebounce = useCallback(debounce(dispatch, DELAY), []);
  useEffect(() => {
    if (searchQuery.length > 0 && searchInProgress) {
      dispatchWithDebounce(getUniversities(searchQuery));
    }
  }, [searchQuery, searchInProgress]);


  return <>
    <Input onChange={(e) => handleInputChange(e)} value={searchQuery} placeholder="School Name" />
    {loading && <Loader />}
    <Dropdown >
      {!loading && showSearchList && universitiesList && (
        <DropdownContent >
          {universitiesList.length > 0 ? (
            universitiesList.map((university, index) => (
              <DropdownContentSpan
                key={index}
                onClick={() => handleClick(university.name)}
              >
                {university.name}
              </DropdownContentSpan>
            ))
          ) : (
              <Label>No results found!</Label>
            )}
        </DropdownContent>
      )}
    </Dropdown>
  </>
}