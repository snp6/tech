import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import CourseItem from './components/CourseItem'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses/:id" component={CourseItem} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
