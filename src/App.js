import Addtile from './addtile';
import './App.css';
import Bluetile from './bluetile';
import Footer from './lastfoot';
import Newhead from './newhead';
import Sidepaned from './newsidepan';
import Ntile from './ntile';

function App() {
  return (
    <div>
      <Newhead></Newhead>
      <div className="container">
      <div className="row" >
      <div className=" col-sm-3 responsivee">
      <Sidepaned/>
      </div>
      <div className="col-9 ps-5">
      <Ntile/>
      <Addtile price="RS 10,000" />
      <Addtile price="RS 11,000" />
      <Addtile price="RS 12,000" />
      <Addtile price="RS 13,000" />
      <Bluetile/>
      <Addtile price="RS 14,000" />
      <Addtile price="RS 15,000" />
      <Addtile price="RS 16,000" />

      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
