import axios from 'axios';
import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Registration } from 'components/Registration/Registration';
import { UsersList } from 'components/UsersList/UsersList';
import { useEffect, useState } from 'react';
 
//  const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/'
axios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const App = () => {
  	const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isVisibleShowMoreBtn, setIsVisibleShowMoreBtn] = useState(true);
  const [isAddedUser, setIsAddedUser] = useState(false)
  

  useEffect(() => {
    axios.get(`token`).then(({ data }) => {
  
      axios.defaults.headers.post['Token'] = data.token
 
    }).catch(console.log)

  }, [])
  
	useEffect(() => {
    	axios.get(
			`users?page=${page}&count=6`
      )
        .then(({ data }) => {
            setUsers(prev => [...prev, ...data.users]);
            
            if (page === data.total_pages) {
               setIsVisibleShowMoreBtn(false);
            }
         })
        .catch(err => console.log(err))
        .finally(setIsAddedUser(false));
  }, [page, isAddedUser]);
  
  const getFormValue = (data) => {
    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => formData.append(key, value))
    axios.post(`users`, formData).then(() => {
      setPage(1);
      setUsers([])
      setIsAddedUser(true)
 }).catch(console.log)
}

  return (
    <>
      <Header />
      <Hero />
      <UsersList users={users} isVisibleShowMoreBtn={isVisibleShowMoreBtn} onChangePage={setPage} />
      <Registration getFormValue={getFormValue} />
    </>
  );
};
