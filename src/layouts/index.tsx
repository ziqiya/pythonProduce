import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return <div className={styles.layout}>{props.children}</div>;
};

export default BasicLayout;
