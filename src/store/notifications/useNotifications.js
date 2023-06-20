import { useContext } from 'react'
import { NotificationsContext } from './context'

export function useNotifications() {
  const notifications = useContext(NotificationsContext)

  return notifications
}
