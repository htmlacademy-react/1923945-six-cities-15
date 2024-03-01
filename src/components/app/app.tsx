import MainPage from '../../pages/main-page/main-page.tsx';

type AppScreenProps = {
  placesFound: number;
}

function App({placesFound}: AppScreenProps) {
  return (
    <MainPage placesFound={placesFound}/>
  );
}

export default App;
