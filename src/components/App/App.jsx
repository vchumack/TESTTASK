import { Header } from 'components/Header/Header';
import { Hero } from 'components/Hero/Hero';
import { UsersList } from 'components/UsersList/UsersList';


export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <UsersList/>
    </>
  );
};
