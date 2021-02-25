import React, {useEffect, useState, Fragment} from 'react';
import {getUsers, searchUsers} from '../../services/Users.service';
import UserCard from '../user-card/UserCard';
import {Box, Grid, InputAdornment, TextField} from '@material-ui/core';
import './AppBody.css';
import UsersPagination from '../pagination/Pagination';
import {FiSearch} from 'react-icons/fi';
import Loading from '../loading/Loading';

const inputProps = {
  step: 300,
  placeholder: 'Search',
  color: 'secondary'
};

/**
 * Main component, holds the state of the app
 */

export default function AppBody() {

  useEffect(() => {
    fetchData(1);
  }, []);

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [loading, setLoading] = useState(false);

  const choosePage = (chosen) => {
    setPage(chosen);
    fetchData(chosen);
  };

  /**
   * fetches users by page number
   */
  const fetchData = async (pageNumber) => {
    setLoading(true);
    const response = await getUsers(pageNumber);
    if (response.data) {
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
      setTotalUsers(response.data.total);
    }
    setLoading(false);
  };

  /***
   * Searches users by username if search string is longer than 3 characters
   * fetches default data if the user deletes characters
   */
  const search = async (searchStringInput) => {
    setSearchString(searchStringInput);
    if (searchStringInput.length > 3) {
      setLoading(true);
      const response = await searchUsers(searchStringInput);
      if (response.data) {
        setUsers(response.data.data);
      }
      setLoading(false);
    } else if (searchStringInput.length < 3 && searchString.length === 2) {
      fetchData(1);
    }

  };

  return (
      <Fragment>
        <Box className='search-container' justifyContent={'space-between'}>
          <TextField id="search"
                     type="search"
                     inputProps={inputProps}
                     onInput={(e) => search(e.target.value)}
                     onBlur={() => searchString === '' ? fetchData(1) : ''}
                     InputProps={{
                       startAdornment:
                           (<InputAdornment position="start">
                             <FiSearch />
                           </InputAdornment>)
                     }}
          />
          <Box>
            <span>Total users: {totalUsers}</span>
          </Box>
        </Box>
        <Grid container direction="column" justify="space-around" className='body-wrapper'>
          {
            users && users.length ? users.map(user => <UserCard key={user.id} user={user}/>) : <span>No data</span>
          }
          {users.length > 0 && <UsersPagination current={page} total={totalPages} callback={choosePage}/>}
        </Grid>
        <Loading show={loading}/>
      </Fragment>);
}