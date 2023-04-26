import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';
import user from 'data/user.json';
import stats from 'data/stats.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
    </Container>
  );
};
