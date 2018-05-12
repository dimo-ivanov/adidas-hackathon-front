import React from 'react'

import Banner from './Banner'
import Schedule from './Schedule'
import Notifications from './Notifications'
import Teams from './Teams'
import Players from './Players'
import Chat from './chat/Chat'

const Dashboard = (props) => (
  <main>
    <div className='main-col'>
      <div>
        <Banner />
        <Schedule />
      </div>
    </div>

    <div className='main-col' style={{ marginRight: '15px' }}>
      <div>
        <Notifications />
        <Teams />
        <Players />
      </div>
    </div>

    <Chat />
  </main>
)

export default Dashboard
