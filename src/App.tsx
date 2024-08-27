import './App.css';

import Title from './components/Title';
import Introduction from './components/Introduction';
import PackSelection from './components/RulesIntro';

function App() {
  return (
    <>
      <Title />
      <main>
        <Introduction />
        <PackSelection />
      </main>
    </>
  );
}

export default App;
