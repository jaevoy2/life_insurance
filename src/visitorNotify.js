// Sends a one-per-session visit notification email (IP, location, device, browser, date/time).
// Needs a free Web3Forms access key (https://web3forms.com) created for francis@creativedevlabs.com,
// supplied as VITE_WEB3FORMS_KEY in .env. Without a key, nothing is sent.
const KEY = import.meta.env.VITE_WEB3FORMS_KEY

function parseUA(ua) {
  const browser =
    /Edg\//.test(ua) ? 'Edge' :
    /OPR\/|Opera/.test(ua) ? 'Opera' :
    /Firefox\//.test(ua) ? 'Firefox' :
    /Chrome\//.test(ua) ? 'Chrome' :
    /Safari\//.test(ua) ? 'Safari' : 'Unknown'
  const os =
    /Windows/.test(ua) ? 'Windows' :
    /Android/.test(ua) ? 'Android' :
    /iPhone|iPad|iPod/.test(ua) ? 'iOS' :
    /Mac OS X/.test(ua) ? 'macOS' :
    /Linux/.test(ua) ? 'Linux' : 'Unknown OS'
  const type = /Mobi|Android|iPhone|iPod/.test(ua) ? 'Mobile' : /iPad|Tablet/.test(ua) ? 'Tablet' : 'Desktop'
  return { browser, device: `${type} (${os})` }
}

export async function notifyVisit() {
  try {
    if (!KEY || sessionStorage.getItem('visit-notified')) return
    sessionStorage.setItem('visit-notified', '1')

    let ip = 'Unknown', location = 'Unknown'
    try {
      const r = await fetch('https://ipwho.is/')
      const g = await r.json()
      if (g.success) {
        ip = g.ip
        location = [g.city, g.region, g.country].filter(Boolean).join(', ')
      }
    } catch { /* geo lookup is best-effort */ }

    const { browser, device } = parseUA(navigator.userAgent)
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: KEY,
        subject: 'New visitor on lifeinsurancepei site',
        from_name: 'Site Visit Notifier',
        'IP Address': ip,
        Location: location,
        Device: device,
        Browser: browser,
        'Date/Time': new Date().toLocaleString('en-CA', { timeZone: 'America/Halifax', timeZoneName: 'short' }),
        Page: window.location.href,
      }),
    })
  } catch { /* never break the site over analytics */ }
}
