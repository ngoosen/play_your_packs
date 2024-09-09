import Title from './Title';
import Introduction from './Introduction';
import PackSelection from './PackSelection';
import RulesIntro from './RulesIntro';

function Home() {
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

export default Home;
