export const MIST_DASHBOARD_SITES = [
  {
    id: 'hq-columbus',
    name: 'Columbus HQ',
    healthScore: 96,
    connectedClients: 148,
    accessPoints: 12,
    switches: 4,
    incidents: 1,
  },
  {
    id: 'warehouse-east',
    name: 'Warehouse East',
    healthScore: 88,
    connectedClients: 73,
    accessPoints: 8,
    switches: 2,
    incidents: 3,
  },
]

export const MIST_DASHBOARD_DEVICES = [
  {
    id: 'ap-01',
    name: 'AP-01 Lobby',
    type: 'Access Point',
    site: 'Columbus HQ',
    status: 'online',
    clients: 26,
    health: 'excellent',
  },
  {
    id: 'ap-07',
    name: 'AP-07 Shipping',
    type: 'Access Point',
    site: 'Warehouse East',
    status: 'warning',
    clients: 18,
    health: 'roaming events elevated',
  },
  {
    id: 'sw-02',
    name: 'EX-02 Access Switch',
    type: 'Switch',
    site: 'Columbus HQ',
    status: 'online',
    clients: 42,
    health: 'normal',
  },
]

export const MIST_DASHBOARD_ALERTS = [
  {
    id: 'alert-001',
    severity: 'critical',
    title: 'AP heartbeat missed',
    source: 'AP-07 Shipping',
    recommendation: 'Check PoE, uplink status, and recent switch port events.',
  },
  {
    id: 'alert-002',
    severity: 'warning',
    title: 'DHCP latency above baseline',
    source: 'Warehouse East',
    recommendation: 'Validate DHCP scope capacity and gateway response times.',
  },
]
