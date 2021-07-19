import { RecentGames, Games, NewBet, Arrow } from './styles';

import { Header } from '../../components/UI/Header';
import { Footer } from '../../components/UI/Footer';

export function Dashboard() {
  return (
    <>
      <Header />
      <main>
        <RecentGames>
          <div>
            <h2>Recent Games</h2>
            <span>Filters</span>
            <Games></Games>
          </div>
          <NewBet to="/new_bet">
            New Bet
            <Arrow />
          </NewBet>
        </RecentGames>
      </main>
      <Footer />
    </>
  );
};


