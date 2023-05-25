import classes from '../assets/Dashboard.module.css';
import FamilyForm from '../component/FamilyForm';

import  {Header}  from '../component/Header';
import ListagemFamily from '../component/ListagemFamly';



function Dashboard() {
 
  return (
    <div className={classes.dashboard}>
      <Header></Header>
     
    <FamilyForm ></FamilyForm>
    <div>
<ListagemFamily></ListagemFamily>
    </div>
    </div>
  )
}

export default Dashboard;
