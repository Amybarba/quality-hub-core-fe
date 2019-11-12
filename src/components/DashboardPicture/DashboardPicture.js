import React from 'react';
import './DashboardPicture.scss';

import Avatar from '../Avatar';

export default function UserPicture() {
  return (
    <div className='picture-wrapper'>
      <h2 className='dash-heading'>Picture</h2>
      <Avatar />
    </div>
  );
}