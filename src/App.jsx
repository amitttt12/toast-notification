
import { GiDuration } from 'react-icons/gi'
import './App.css'
import useNotification from './hooks/useNotification'
// import Notification from './components/Notification'

function App() {


  // customHook notification

  const { NotificationComponent, triggerNotification } = useNotification("top-right")

  return (
    <div>
      <p>Frontend System Design- Toast Notification</p>
      {/* <Notification type="error" message="error found" /> */}
      <button onClick={() => { triggerNotification({ type: "success", message: "File Sent Successfully ", duration: 3000 }) }}>Trigger Success</button>
      <button onClick={() => { triggerNotification({ type: "error", message: "File not sent  ", duration: 3000 }) }}>Trigger Error</button>

      {
        NotificationComponent
      }
    </div>

  )
}

export default App
