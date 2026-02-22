import { Castle } from 'lucide-react';
import { LuAnchor, LuCable } from "react-icons/lu";
import { BsHospital, Bs1Square } from 'react-icons/bs'
import Icon from './components/atoms/Icon';


function App() {
  return (
    <div className=''>
      {/* <Castle size={80} color='#87445f' strokeWidth={0.2} />
      <LuAnchor size={180} />
      <LuCable size={80} color='#eeaa90' />
      <BsHospital size={40} color='green' />
      <Bs1Square size={40} color='green' /> */}

      <Icon name='Home' color='tomato' />
      <Icon name='Phone' color='pink' size='80' />
      <Icon name='SquareChevronLeft' />
      <Icon name='RefreshCcw' color='blue' thin />
      <Icon name='RefreshCw' color='#785ee3' thin />
      <Icon name='ChartSpline' thin />
      <Icon name='xyz' color='green' />



      {/* Make this works */}
      <Alert variant='success' title='Saved Successfully' msg='Your data has been saved.' />
      <Alert variant='danger' title='Your data will be deleted' msg='Please saved your data if you want to keep.' />
      <Alert msg='Default Alert with a message' />


    </div>
  )
}

export default App
