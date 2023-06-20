import { useState } from 'react'

import { NotificationsContext, initialState } from './context'

const defaultToast = {
  type: 'success',
  text: 'Success!',
  time: 5000,
}

let counter = 1

export function NotificationProvider(props) {
  const [toasts, setToasts] = useState(initialState)

  const removeToast = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== toastId))
  }

  const addToast = (newToast = defaultToast) => {
    const toast = {
      ...newToast,
      id: ++counter,
    }
    setToasts((prevToasts) => [...prevToasts, toast])

    setTimeout(() => {
      removeToast(toast.id)
    }, toast.time || 5000)
  }

  return (
    <NotificationsContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
      }}
    >
      {props.children}
    </NotificationsContext.Provider>
  )
}
