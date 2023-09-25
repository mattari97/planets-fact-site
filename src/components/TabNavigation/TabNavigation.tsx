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
    <div className={styles.wrapper} style={{ '--accent-color': props.accentClr } as React.CSSProperties}>
      {TAB_ITEMS.map((item, index) => (
        <div className={styles.tab} data-active={props.activeTab === item}>
          <button key={index} onClick={() => props.action(item)}>
            {item}
          </button>
          <div aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

export default TabNavigation;
