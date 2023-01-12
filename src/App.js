import logo from './logo.svg';
import './App.css';
import Content from './Content';
import Title from './Title';
import Starter from './Starter';
import Guides from './Guides';

function App() {
  return (
    <div style={{padding:"0px 200px 0px 200px"}}>
      <Title/>
      <hr/>
      <Content/>
      <hr style={{width:"20%",margin:"10px"}}/>
      <table>
        <tr><td>
          <Starter/></td><td><Guides/></td></tr>
      </table>
    </div>
  );
}

export default App;
