
import { StyleSheet, Text, View, Image} from 'react-native';
import Botao from './componentes/botao';
import Card from './componentes/cards';
import Cadastro from './Pages/cadastro';
import Login from './Pages/login'
import Input from './componentes/input';
import Transferencia from './Pages/transferencia';
import CartaoCredito from './Pages/cartaoCredito';
import Home from './Pages/home';
import Emprestimo from './Pages/emprestimo';
import Extrato from './Pages/extrato';
import Routers from './routers';

 function App() {
  return (
    <Routers></Routers>
    // <Transferencia></Transferencia>
    // <Login></Login>
    // <CartaoCredito></CartaoCredito>
    // <Extrato></Extrato>
    // <Cadastro></Cadastro>
    // <Home></Home>
    // <Emprestimo></Emprestimo>
  );
}
export default App;
