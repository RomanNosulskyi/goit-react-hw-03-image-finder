import React from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';

export class Searchbar extends React.Component {
  state = {
    searchImg: ``,
  };
  onInputChange = e => {
    this.setState({ searchImg: e.currentTarget.value.toLowerCase() });
  };
  onSubmitForm = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchImg);
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            onChange={this.onInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
