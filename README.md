# React context example (in app notifications)

Example how to use Context API to manage in app notifications.

Notifications have shape:
```ts
{
  id: number // autogenerated
  type: 'success' | 'error';
  text: string;
  time: number // default is 5000
}
```

Notifications store is created in `src/store/notifications` files. There are files for initializing Context (`context.js`), to create wrapper component with Provider (`provider.jsx`) and to consume context value through `useContext` hook (`useNotifications.js`).

There are two UI components which uses notifications state:
- `AddNotification.jsx` - the one to trigger new notifications.
- `Notifications.jsx` - to display notifications.

Both these components are used in `src/App.jsx`.
Provider is imported and used in `src/main.jsx`.
