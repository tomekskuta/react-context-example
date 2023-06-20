import { useNotifications } from '../store/notifications/useNotifications'

const Notifications = () => {
  const { toasts, removeToast } = useNotifications()

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
    >
      {toasts.map((toast) => (
        <div
          style={{
            background: toast.type === 'success' ? 'green' : 'red',
            color: 'black',
            borderRadius: '4px',
            padding: '8px 16px',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
          }}
          key={toast.id}
        >
          <div style={{ marginRight: '4px' }}>{toast.text}</div>
          <button style={{ padding: '2px' }} onClick={() => removeToast(toast.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  )
}

export default Notifications
