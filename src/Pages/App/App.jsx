import './App.css'
import {Home} from '../Home/Home'
import {MyAccount} from '../MyAccount/MyAccount'
import {MyOrder} from '../MyOrder/MyOrder'
import {MyOrders} from '../MyOrders/MyOrders'
import {NotFound} from '../NotFound/NotFound'
import {SignIn} from '../SignIn/SignIn'

function App() {

  return (
    <>
      <div className='bg-red-100'>
        <Home/>
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
        <SignIn/>
      </div>
      
    </>
  )
}

export default App
