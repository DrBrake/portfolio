import React from 'react';
import { withRouter } from 'react-router-dom';

import { ROUTES } from '../../constans';
import { ArrowLeft } from '../../images';

class TopNav extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div style={{ marginTop: '24px' }}>
        <ArrowLeft onClick={() => history.push(ROUTES.WORKS)} style={{ cursor: 'pointer' }} />
      </div>
    );
  }
};

export default withRouter(TopNav);