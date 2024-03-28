import userData from '../../userData.json';
import Profile from '../Profile/Profile';
import css from './App.module.css'


export default function App() {
  return (
    <>
      <Profile
        className={css.container}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}