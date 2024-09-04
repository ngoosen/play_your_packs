import './App.scss';

import Title from './components/Title';
import Introduction from './components/Introduction';
import RulesIntro from './components/RulesIntro';
import PackSelection from './components/PackSelection';

function App() {
  return (
    <>
      <Title />
      <main>
        <Introduction />
        <RulesIntro />
        <PackSelection />
      </main>
    </>
  );
}

export default App;
