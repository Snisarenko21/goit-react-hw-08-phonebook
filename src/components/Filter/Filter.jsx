import { nanoid } from 'nanoid';
import { Field } from './Filter.styled';
import { setFilter, getFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const inputIdGenerate = nanoid();

  return (
    <>
      <label htmlFor={inputIdGenerate}>Find contacts by name</label>
      <Field
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={inputIdGenerate}
      />
    </>
  );
};