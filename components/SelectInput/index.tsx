
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Input from '../Input';
import { debounce } from '../../utilities';
import { getUniversities } from '../../store/action';

interface SelectInputProps {
  handleChange: Function,
  inputValue: string
}

interface RootState {
  HomeReducer: { userName: string }
  ShowcaseReducer: {
    educationalExperiencesList: any[],
    loading: boolean,
    universitiesList: any[]
  },
}
const DELAY = 500;
export default function SelectInput({ handleChange, inputValue }: SelectInputProps) {

  const [showSearchList, setShowSearchList] = useState<boolean>(false);
  const [searchInProgress, setSearchInProgress] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState(inputValue);
  const dispatch = useDispatch();
  const { universitiesList, loading } = useSelector(
    ({ ShowcaseReducer: { universitiesList, loading } }: RootState) => ({ universitiesList, loading })
  );

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

  useEffect(() => {
    const debounceFetchUniversities = debounce(dispatch, DELAY);
    if (searchQuery.length > 0 && searchInProgress) {
      debounceFetchUniversities(getUniversities(searchQuery));
    }
  }, [searchQuery, searchInProgress]);

  return <>
    <Input onChange={(e) => handleInputChange(e)} value={searchQuery} placeholder="School Name" />
    <Dropdown>
      {loading && <p>loading....</p>}
      {showSearchList && universitiesList && (
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
              <span>No Results found</span>
            )}
        </DropdownContent>
      )}
    </Dropdown>
  </>
}

export const Dropdown = styled.div`
  position: relative;
  display:  block;
`;

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  background-color: ${({ theme }) => (theme.colors.grey)};
  width: 100%;
  overflow: auto;
  border-radius: 0 0 0.4rem 0.4rem;
  z-index: 1;
  max-height: 40vh;
  cursor: pointer;
  margin-top: -0.1rem;
`;

export const DropdownContentSpan = styled.div`
  color: black;
  padding: 0.4rem;
  text-decoration: none;
  display: block;
  &:hover{
    background-color: #f6f6f6;
  }
`;

export const Label = styled.p`
  font-size:1rem;
  color:${({ theme }) => (theme.colors.text)}
`;