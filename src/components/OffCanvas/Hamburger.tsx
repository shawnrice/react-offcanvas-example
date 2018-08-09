import * as React from 'react';
import { connect } from 'react-redux';
import { open, close } from 'src/redux/modules/ui';

class Hamburger extends React.PureComponent<any, any> {
  toggle = () => {
    const { isOpen, open, close } = this.props;
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  render() {
    const { isOpen } = this.props;
    console.log('isOpen', isOpen);
    return (
      <span
        onClick={this.toggle}
        className={['hamburger', isOpen && 'isOpen'].filter(Boolean).join(' ')}
      >
        <svg width={30} height={30} viewBox="0 0 50 50">
          <line x1="0" y1="3" x2="50" y2="3" />
          <line x1="0" y1="23" x2="50" y2="23" />
          <line x1="0" y1="43" x2="50" y2="43" />
        </svg>
      </span>
    );
  }
}

const ConnectedHamburger = connect(
  (state: any) => ({
    isOpen: state.ui.offCanvas,
  }),
  { open, close }
)(Hamburger);

export default ConnectedHamburger;
