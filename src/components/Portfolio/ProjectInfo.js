import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import posed from 'react-pose';
import PlusCircle from 'react-feather/dist/icons/plus-circle';
import MinusCircle from 'react-feather/dist/icons/minus-circle';

import styles from './portfolio.module.css';

const Expandible = posed.div({
  expand: {
    height: '100%',
  },
  collapse: {
    height: '20%',
  },
})

class ProyectExp extends React.Component {
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
        className={styles.overlay}
        onClick={() => {
          const newPose = pose === 'collapse' ? 'expand' : 'collapse';
          this.toggleExpand(newPose);
        }}
      >
        <div className={classNames('flex', 'flex-row', 'justify-space-between')}>
          <h4>{work.title}</h4>
          {pose === 'expand' ? (
            <MinusCircle size={20} />
          ) : (
            <PlusCircle size={20} />
          )}
        </div>
        {pose === 'expand' && (
          <p>{work.description}</p>
        )}
      </Expandible>
    )
  }
}

ProyectExp.propTypes = {
  work: PropTypes.object.isRequired,
};

export default ProyectExp;
