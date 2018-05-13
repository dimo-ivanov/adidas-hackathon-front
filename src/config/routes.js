// import { Dashboard, ManageTeam, RegisterTeam, MyTeam, TeamPage, PlayerPage } from '../screens'
import { StartPage, EventPage } from '../screens'

export const routes = [
  { path: '/', exact: true, component: StartPage },
  { path: '/event', exact: true, component: EventPage }
  // { path: '/page2', exact: true, component: JoinPage }
]
