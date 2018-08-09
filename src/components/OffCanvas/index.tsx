import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { close } from 'src/redux/modules/ui';

import './OffCanvas.css';

interface List {
  url: string;
  name: string;
}

interface Props {
  isOpen: boolean;
  close(): void;
  links: List[];
}

export class OffCanvas extends React.PureComponent<Props, {}> {
  componentDidMount() {
    if (this.props.isOpen) {
      document.addEventListener('keydown', this.escapeToClose);
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { isOpen } = this.props;
    if (isOpen) {
      if (prevProps.isOpen !== isOpen) {
        document.addEventListener('keydown', this.escapeToClose);
      }
    } else {
      if (prevProps.isOpen !== isOpen) {
        document.removeEventListener('keydown', this.escapeToClose);
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escapeToClose);
  }

  escapeToClose = (event: any) => {
    const { close } = this.props;

    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      close();
    }
  };

  render() {
    const { isOpen, links, close } = this.props;

    return (
      <>
        <nav className={['offCanvas', isOpen && 'isOpen'].filter(Boolean).join(' ')}>
          <ul>
            {links.map(({ name, url }: { name: string; url: string }, index: number) => (
              <li key={url} data-index={index} style={{ transitionDelay: `${0.3 + 0.1 * index}s` }}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={['overlay', isOpen && 'isOpen'].filter(Boolean).join(' ')}
          onClick={close}
        />
      </>
    );
  }
}

const ConnectedOffCanvas = connect(
  (state: any) => ({
    isOpen: state.ui.offCanvas,
  }),
  { close }
)(OffCanvas);

export default ConnectedOffCanvas;
