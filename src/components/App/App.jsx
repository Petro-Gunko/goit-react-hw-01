import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../transactions/TransactionHistory';
import css from './App.module.css';

export default function App() {
  return (
    <>
      <div className={css.container}>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className={css.friendsWidth}>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
}
