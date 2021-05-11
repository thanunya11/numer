import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import bisection from './roote/bisection';
import Falsep from './roote/False'
import newton from './roote/newtonrap'
import one from './roote/onepoint'
import secant from './roote/secant'
import Newtondivi from './inter/newtondivi'
import Lagrage from './inter/lagrage'
import Spline from './inter/spline'

function App() {
  return (
    <BrowserRouter>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse ">
    <ul class="navbar-nav mr-auto">
            
  <div class="dropdown ">
  <button class="btn btn-secondary btn-sm  dropdown-toggle"  type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Root of Equation
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
    <button class="dropdown-item" type="button"><Link to="/bisection">Bisection</Link></button>
    <button class="dropdown-item" type="button"><Link to="/False">False-Position</Link></button>
    <button class="dropdown-item" type="button"><Link to="/newtonrap">Newton-Raphson</Link></button>
    <button class="dropdown-item" type="button"><Link to="/onepoint">One-point Iteration</Link></button>
    <button class="dropdown-item" type="button"><Link to="/secant">Secant</Link></button>
  </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Linear Equation
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Cramer's Rule</button>
    <button class="dropdown-item" type="button">Guass Elimination</button>
    <button class="dropdown-item" type="button">Guass-Jordan</button>
    <button class="dropdown-item" type="button">LU</button>
    <button class="dropdown-item" type="button">Cholesky</button>
    <button class="dropdown-item" type="button">Jacobi</button>
    <button class="dropdown-item" type="button">Conjugate</button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Interpolation
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu3">
    <button class="dropdown-item" type="button"><Link to="/newtondivi">Newton Divided-Difference</Link></button>
    <button class="dropdown-item" type="button"><Link to="/lagrage">Lagrage Polynomial</Link></button>
    <button class="dropdown-item" type="button"><Link to="/spline">Spline Interpolation</Link></button>
  </div>
</div>
<div class="dropdown">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Regression
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu4">
    <button class="dropdown-item" type="button">Linear Regression</button>
    <button class="dropdown-item" type="button">Polynomials Regression</button>
    <button class="dropdown-item" type="button">Multiple Linear Regression</button>
  </div>
</div>
        </ul>
    </div>
    <div class="navbar-collapse ">
        <ul class="navbar-nav ml-auto">
          <h3 class="text-warning">Project Numer</h3>
        </ul>
    </div>   
    <div>
      <h1></h1>
    </div>
</nav>
<p>
    {process.env.DIDYOUSEE}
</p>
<div>
  <Switch>
                      {/* Roote */}  
    <Route exact path="/bisection" component={bisection}/>
    <Route exact path="/False" component={Falsep}/>
    <Route exact path="/newtonrap" component={newton}/>
    <Route exact path="/onepoint" component={one}/>
    <Route exact path="/secant" component={secant}/>

                       {/* linear */}  
                       <Route exact path="/bisection" component={bisection}/>
    <Route exact path="/False" component={Falsep}/>
    <Route exact path="/newtonrap" component={newton}/>
    <Route exact path="/onepoint" component={one}/>
    <Route exact path="/secant" component={secant}/>

                       {/* inter */}  
    <Route exact path="/newtondivi" component={Newtondivi}/>
    <Route exact path="/lagrage" component={Lagrage}/>
    <Route exact path="/spline" component={Spline}/>

                       {/* regress */}  
                       <Route exact path="/bisection" component={bisection}/>
    <Route exact path="/False" component={Falsep}/>
    <Route exact path="/newtonrap" component={newton}/>
    <Route exact path="/onepoint" component={one}/>
    <Route exact path="/secant" component={secant}/>

  </Switch>
</div>
</BrowserRouter>
  );
}
export default App;
