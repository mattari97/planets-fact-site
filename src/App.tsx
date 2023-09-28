import * as React from 'react';
import { Navbar } from './components';
import { backgroundHelpers } from './helpers';
import { Planet } from './layouts';

function App() {
  React.useEffect(() => {
    backgroundHelpers.createStar(30);
    backgroundHelpers.animateStars();
    backgroundHelpers.createCircle(60);
    window.addEventListener('resize', backgroundHelpers.shuffleCircles);

    return () => window.removeEventListener('resize', backgroundHelpers.shuffleCircles);
  }, []);

  return (
    <div>
      <Navbar />
      <Planet />
    </div>
  );
}

export default App;
