import {
  avatar,
  name,
  tag,
  location,
  stats,
} from '../src/components/userProfile/user.json';
import statData from '../src/components/statisticsSection/statistical-data.json';
import friends from '../src/components/friends/friends.json';
import { UserProfile } from 'components/userProfile/userProfile';
import { Statistics } from 'components/statisticsSection/statisticsSection';
import { FriendList } from 'components/friends/friends';

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
      <Statistics stats={statData} />
      <FriendList friends={friends} />
    </div>
  );
}
