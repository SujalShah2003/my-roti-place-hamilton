import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const MasterLayout: React.FC = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
};

export default MasterLayout;
