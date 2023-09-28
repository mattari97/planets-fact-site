import * as React from 'react';

import styles from './Planet.module.css';
import useStore from '../../data/store';
import { SourceLink, StatDisplay, TabNavigation } from '../../components';
import { Tabs } from '../../types';
import { planetHelpers, textAnimationHelpers } from '../../helpers';

function Planet() {
  const data = useStore((state) => state.data);
  const [tab, setTab] = React.useState<Tabs>('overview');
  const currInfos = React.useMemo(() => data[tab], [data, tab]);

  React.useEffect(() => {
    textAnimationHelpers.animateMovingTitle();
    textAnimationHelpers.animateBodyText();
    planetHelpers.animatePlanet();
  }, [data]);

  return (
    <main className={styles.wrapper}>
      <TabNavigation activeTab={tab} action={setTab} accentClr={data.color} />
      <div className={`${styles.img} planet`}>
        <img
          src={tab === 'structure' ? data.images.structure : data.images.overview}
          style={{ '--planet-scale': data.scale } as React.CSSProperties}
          alt={`${data.name}'s ${tab === 'structure' ? 'structure' : 'overview'}`}
        />
        {tab === 'surface' && (
          <img src={data.images.surface} alt={`${data.name}'s surface`} className={styles.surface} />
        )}
      </div>
      <div className={styles.content}>
        <h1 className="moving-letters">
          <span className="text-wrapper">
            <span className="letters">{data.name}</span>
          </span>
        </h1>
        <p className="body-text">{currInfos.content}</p>
        <SourceLink source={currInfos.source} />
      </div>
      <div className={styles.stats}>
        <StatDisplay label="Rotation Time" stat={data.rotation} />
        <StatDisplay label="Revolution Time" stat={data.revolution} />
        <StatDisplay label="Radius" stat={data.radius} />
        <StatDisplay label="Average Temp." stat={data.temperature} />
      </div>
    </main>
  );
}

export default Planet;
