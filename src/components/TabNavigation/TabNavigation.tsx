import { Tabs } from '../../types';
import styles from './TabNavigation.module.css';

const TAB_ITEMS: Tabs[] = ['overview', 'structure', 'surface'];

interface TabNavigationProps {
  activeTab: Tabs;
  action: React.Dispatch<React.SetStateAction<Tabs>>;
  accentClr: string;
}

function TabNavigation(props: TabNavigationProps) {
  return (
    <div className={styles.wrapper}>
      {TAB_ITEMS.map((item, index) => (
        <div className={styles.tab}>
          <button key={index} onClick={() => props.action(item)}>
            {item}
          </button>
          <div
            aria-hidden="true"
            data-visible={props.activeTab === item}
            style={{ backgroundColor: `hsl(${props.accentClr})` }}
          />
        </div>
      ))}
    </div>
  );
}

export default TabNavigation;
