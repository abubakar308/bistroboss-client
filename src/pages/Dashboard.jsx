import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
<aside>
  <li><Link to="#account-settings">Account Settings</Link></li>
  <li><Link to="#activity-log">Activity Log</Link></li>
</aside>
    </div>
  )
}
