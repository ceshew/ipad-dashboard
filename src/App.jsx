import CalendarList from './components/Calendar/CalendarList';
import ClockCard from './components/ClockCard';
import HeaderClock from './components/HeaderClock';
import IssuesList from './components/Issues/IssuesList';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
import './styles.css';

export default function App() {
  const { mode, setMode } = useTheme();

  return (
    <div style={{height:'100%', display:'flex', flexDirection:'column'}}>
      <header className="header">
        <HeaderClock />
        <ThemeToggle mode={mode} setMode={setMode} />
      </header>

      <main className="container">
        <section className="col">
          <ClockCard />
          <IssuesList />
        </section>

        <section className="col">
          <CalendarList />
        </section>
      </main>
    </div>
  );
}