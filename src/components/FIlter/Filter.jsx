import React from 'react';
import './Filter.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/contacts/contacts-operations';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    const target = e.target;
    dispatch(getFilterValue(target.value));
  };

  return (
    <div className="filterWrapper">
      <h3>Find number by name</h3>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
