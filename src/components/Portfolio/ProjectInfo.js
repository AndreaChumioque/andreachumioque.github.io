import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import posed from 'react-pose';
import PlusCircle from 'react-feather/dist/icons/plus-circle';
import MinusCircle from 'react-feather/dist/icons/minus-circle';
import Code from 'react-feather/dist/icons/code';
import Coffee from 'react-feather/dist/icons/coffee';

import styles from './portfolio.module.css';

const Expandible = posed.div({
  expand: {
    height: 'calc(100% - 30px)',
    backgroundColor: 'rgba(255, 255, 255, .9)',
  },
  collapse: {
    height: 55,
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
})

class ProyectExp extends Component {
  state = {
    pose: 'collapse',
  }

  toggleExpand = pose => this.setState({ pose });

  render() {
    const { work } = this.props;
    const { pose } = this.state;
    return (
      <Expandible
        pose={pose}
        className={classNames(styles.overlay, 'flex', 'flex-col')}
      >
        <div
          className={classNames('flex', 'flex-row', 'justify-space-between', 'p20')}
          onClick={() => {
            const newPose = pose === 'collapse' ? 'expand' : 'collapse';
            this.toggleExpand(newPose);
          }}
        >
          <h4>{work.title}</h4>
          {pose === 'expand' ? (
            <MinusCircle size={20} />
          ) : (
            <PlusCircle size={20} />
          )}
        </div>
        {pose === 'expand' && (
          <div className={classNames('p20', 'pt0', 'flex', 'flex-col', 'flex1', 'justify-space-between')}>
            <p>{work.description}</p>
            <div className={classNames('flex', 'justify-space-between')}>
              <a
                className={styles.link}
                href={work.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Coffee size={16} className={styles.icon} /> Demo
              </a>
              <a
                className={styles.link}
                href={work.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code size={16} className={styles.icon} /> Github
              </a>
            </div>
          </div>
        )}
      </Expandible>
    )
  }
}

ProyectExp.propTypes = {
  work: PropTypes.object.isRequired,
};

export default ProyectExp;
