import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import styles from './Accordion.module.scss';

const Accordion = () => {
  const [opened, setOpened] = useState(0);

  function setActive(index) {
    if (opened === index) {
      setOpened(null);
    } else {
      setOpened(index);
    }
  }
  return (
    <div className={classNames(styles.accordion)}>
      {accordionData.map((item, index) => (
        <div
          className={classNames(styles.item)}
          onClick={() => setActive(index)}
          key={index}
        >
          <h3 className={classNames(styles.title)}>
            {item.title}{' '}
            <span className={styles['toggle-icon']}>
              {opened === index ? '-' : '+'}
            </span>
          </h3>

          <p
            className={classNames(styles.content, {
              [styles.open]: opened === index,
            })}
          >
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
};

const accordionData = [
  {
    title: 'Question 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
  },
  {
    title: 'Question 2',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: 'Question 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
  },
];

export { Accordion };
