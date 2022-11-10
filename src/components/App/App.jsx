import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { Registration } from 'components/Registration/Registration';
import { UsersList } from 'components/UsersList/UsersList';


export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <UsersList />
      <Registration/>
    </>
  );
};
