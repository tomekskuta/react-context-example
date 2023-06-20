import { useNotifications } from '../store/notifications/useNotifications'

const AddNotification = () => {
  const { addToast } = useNotifications()

  return (
    <div>
      <button onClick={() => addToast({ type: 'success', text: 'Perfect' })}>
        Add success notification
      </button>

      <button onClick={() => addToast({ type: 'error', text: 'Too bad' })}>
        Add error notification
      </button>
    </div>
  )
}

export default AddNotification
