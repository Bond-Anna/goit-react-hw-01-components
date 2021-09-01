import {
  avatar,
  name,
  tag,
  location,
  stats,
} from '../src/components/userProfile/user.json';
import statData from '../src/components/statisticsSection/statistical-data.json';
import transactions from 'components/transactions/transactions.json';
import friends from '../src/components/friends/friends.json';
import { UserProfile } from 'components/userProfile/userProfile';
import { Statistics } from 'components/statisticsSection/statisticsSection';
import { FriendList } from 'components/friends/friendsList';
import { TransactionHistory } from 'components/transactions/trans';

export function App() {
  return (
    <div className="App">
      <UserProfile
        avatar={avatar}
        name={name}
        tag={tag}
        location={location}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics stats={statData} title="Upload stats" />
      <FriendList friendList={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
