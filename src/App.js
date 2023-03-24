import './App.css';      
import { Footer } from './MyComponents/Footer';                             //{ }-used for named export 
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';

function App() {
 const onDelete=(todo)=>{
  console.log("I am ondelete",todo);
 }

  let todos=
    [
       {
        sno:1,
        title:" go to the market",
        desc:"go walking to get the job 1 done "
       },
       {
        sno:2,
        title:" go to the other village",
        desc:"go by bus to get the job 2 done "
       },
       {
        sno:1,
       title:" go to the other state",
        desc:"go by train to get the job 3 done "
       }

    ]
  

  return (
    <div>
   <Header title="ToDo's App" searchBar={false}/>                 {/*     // we can pass as many things we want  */}
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
      
    </div>
  );
}
  export default App;