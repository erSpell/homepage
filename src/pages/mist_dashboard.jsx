import {
  MIST_DASHBOARD_ALERTS,
  MIST_DASHBOARD_DEVICES,
  MIST_DASHBOARD_SITES,
} from '../data/mistDashboard'

export default function MistDashboard() {
  const primarySite = MIST_DASHBOARD_SITES[0]

  return (
    <div className="terminal-section">
      <p className="terminal-prompt">$ open mist_dashboard</p>
      <h1>Juniper Mist Dashboard</h1>
      <p>
        A prepared view for a future Mist-inspired network health dashboard. This
        page uses local mock telemetry only and is not wired into routing yet.
      </p>

      <section className="project-card" aria-labelledby="mist-overview-heading">
        <h2 id="mist-overview-heading">Site overview</h2>
        <p>
          {primarySite.name}: health score {primarySite.healthScore}%,{' '}
          {primarySite.connectedClients} connected clients,{' '}
          {primarySite.accessPoints} APs, {primarySite.switches} switches, and{' '}
          {primarySite.incidents} active incident.
        </p>
      </section>

      <section className="project-meta" aria-labelledby="mist-sites-heading">
        <strong id="mist-sites-heading">Prepared mock sites:</strong>
        <ul>
          {MIST_DASHBOARD_SITES.map((site) => (
            <li key={site.id}>
              {site.name} — {site.healthScore}% health, {site.connectedClients}{' '}
              clients, {site.incidents} incidents
            </li>
          ))}
        </ul>
      </section>

      <section className="project-meta" aria-labelledby="mist-devices-heading">
        <strong id="mist-devices-heading">Device inventory preview:</strong>
        <ul>
          {MIST_DASHBOARD_DEVICES.map((device) => (
            <li key={device.id}>
              {device.name} [{device.type}] — {device.status}; {device.clients}{' '}
              clients; {device.health}
            </li>
          ))}
        </ul>
      </section>

      <section className="project-meta" aria-labelledby="mist-alerts-heading">
        <strong id="mist-alerts-heading">Alert queue preview:</strong>
        <ul>
          {MIST_DASHBOARD_ALERTS.map((alert) => (
            <li key={alert.id}>
              {alert.severity.toUpperCase()}: {alert.title} from {alert.source}.{' '}
              {alert.recommendation}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
