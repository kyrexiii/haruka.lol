export interface Notification {
  title: string
  message: string
}

export interface NotificationCategory {
  id: string
  notifications: Notification[]
}

export const EASTER_EGG_NOTIFICATIONS: NotificationCategory[] = [
  {
    id: "system",
    notifications: [
      {
        title: "[ ERR_HTTP2_PROTOCOL ]",
        message: "Stream closed with error code NGHTTP2_PROTOCOL_ERROR. Attempting to re-establish secure socket layer...",
      },
      {
        title: "[ SYS_PANIC : 0x000000 ]",
        message: "Unhandled promise rejection at edge runtime. Thread isolated. Graceful degradation initiated.",
      },
      {
        title: "[ WARN : HYDRATION_MISMATCH ]",
        message: "Client tree differs from server edge. DOM manipulation detected. Forcing fallback render.",
      },
    ],
  },
  {
    id: "security", // Changed 'creepy' to 'security' to look more authentic
    notifications: [
      {
        title: "[ SEC_AUDIT_TRIGGERED ]",
        message: "Anomalous idle time detected. Logging external connection and initiating reverse packet trace.",
      },
      {
        title: "[ AUTH_TOKEN_EXPIRED ]",
        message: "Session JWT invalidated. Connection downgraded. Viewport telemetry is now being recorded.",
      },
      {
        title: "[ SOCKET_LISTENER_ACTIVE ]",
        message: "Zero cursor movement for 90s. Checking for automated scraping bots. Are you human?",
      },
    ],
  },
  {
    id: "infrastructure", // Changed 'funny' to 'infrastructure' for dry/deadpan reality
    notifications: [
      {
        title: "[ PERF_DEGRADATION ]",
        message: "Warning: Main thread blocked for 412ms. If you are inspecting the DOM, proceed with caution.",
      },
      {
        title: "[ DEPENDENCY_AUDIT ]",
        message: "Found 3 high-severity vulnerabilities in underlying packages. System ignoring and proceeding anyway.",
      },
      {
        title: "[ PACMAN_SYNC_ERR ]",
        message: "Failed to synchronize mirror databases. Using cached packages to render portfolio.",
      },
    ],
  },
  {
    id: "telemetry", // Changed 'fourth_wall' to 'telemetry'
    notifications: [
      {
        title: "[ UPTIME_ANOMALY ]",
        message: "Session duration exceeds 98% of average users. Are you looking for the API keys in the source code?",
      },
      {
        title: "[ RESUME_FETCH_FAIL ]",
        message: "Attempted to parse visitor intent. Result: Null. If you are a recruiter, the contact node is active.",
      },
      {
        title: "[ VIEWPORT_LOG ]",
        message: "Screen resolution and hardware concurrency logged. Sending payload to analytics cluster...",
      },
    ],
  },
]

export function getRandomNotification(): Notification {
  const category =
    EASTER_EGG_NOTIFICATIONS[
      Math.floor(Math.random() * EASTER_EGG_NOTIFICATIONS.length)
    ]
  return category.notifications[
    Math.floor(Math.random() * category.notifications.length)
  ]
}
