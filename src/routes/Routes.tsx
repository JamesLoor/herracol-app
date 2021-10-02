import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, About, Products, Contact } from '../pages'
import Layout from '../components/Common/Layout'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/nosotros" component={About}/>
          <Route exact path="/productos" component={Products}/>
          <Route exact path="/productos/:category" component={Products}/>
          <Route exact path="/contacto" component={Contact}/>
        </Layout>
      </Switch>
    </Router>
  )
}

export default Routes
