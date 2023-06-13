import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel } from './FilterContacts.styled';
import { FilterInput } from './FilterContacts.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
