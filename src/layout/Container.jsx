import React from 'react';
import styles from './Container.module.css';

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children} <span></span>
    </div>
  );
}

export default Container;
