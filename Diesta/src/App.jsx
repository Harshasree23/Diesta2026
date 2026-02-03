import About from './pages/About'
import Schedule from './pages/Schedule'
import Shop from './pages/Shop'
import People from './pages/People'
import Rules from './pages/Rules'
import LeaderBoard from './pages/LeaderBoard'

import { Route, Routes } from 'react-router-dom'
import Nav from './ui/Nav'

function Page() {

  return (
    <div>

        <Nav/>

        <Routes>
              <Route path='/' element={<About />} />
              <Route path='/about' element={<About />} />
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/people' element={<People />} />
              <Route path='/rules' element={<Rules />} />
              <Route path='/leaderboard' element={<LeaderBoard />} />
        </Routes>
    </div>
  )
}

export default Page
