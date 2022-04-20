import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'about',
    Svg: require('@site/static/img/about/man1.svg').default,
    description: (
      <>
        Who am I. <a href="/docs/about">about</a> 
      </>
    ),
  },
  {
    title: 'Tutorial',
    Svg: require('@site/static/img/about/man2.svg').default,
    description: (
      <>
        My knowledge. <a href="/docs/intro">Tutorial</a>
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/about/man3.svg').default,
    description: (
      <>
        My blogs. <a href="/blog">Blog</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
