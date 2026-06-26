/* ============================================================
   IEEE CS Pro 2026 — shared event facts & helpers
   Single source of truth for both track pages + the landing.
   ============================================================ */

export const EVENT = {
  name: 'IEEE CS Pro 2026',
  theme: 'Meet. Connect. Collaborate.',
  tagline: 'An exclusive leadership & networking forum for CS professionals.',

  dateLabel: 'Sunday, 26 July 2026',
  timeLabel: '9:00 AM – 1:00 PM',
  venue: 'Sheraton Grand Bangalore Hotel, Brigade Gateway',
  venueMapUrl: 'https://maps.app.goo.gl/mxsjF5CwHZonqfqb7',
  city: 'Bengaluru',
  access: 'By Invitation Only',

  // 26 Jul 2026, 09:00 IST (UTC+05:30)
  countdownISO: '2026-07-26T09:00:00+05:30',
  // UTC equivalents of 26 Jul 2026 09:00–13:00 IST
  startUTC: '20260726T033000Z',
  endUTC: '20260726T073000Z',

  contactEmail: 'ieeecspro@gmail.com',

  organiser: 'IEEE Computer Society · Bangalore Chapter',
  association:
    'In association with IEEE Bangalore Section & IEEE Sensor Council',
  afterNote: 'Followed by lunch & networking.',

  forms: {
    leaders:
      'https://docs.google.com/forms/d/e/1FAIpQLSexJ1lUZZT_RarcPOsKUfdkxXlZBlsh_V__29rsmI6FnUFO_A/viewform',
    professionals:
      'https://docs.google.com/forms/d/e/1FAIpQLSd686aQcAj5rE7ZykW77mTAeotlMuyp3w0Cfn-kW6d8lr_yZw/viewform',
  },
} as const;

export const SITE_URL = 'https://ieee-cs-pro-2026.vercel.app';

export const ROUTES = {
  leaders: '/leadership-round-table',
  professionals: '/cs-professional-connect',
} as const;

/* ---------- Calendar links (ported from the original script.js) ---------- */

export type CalEvent = {
  title: string;
  desc: string;
  location: string;
};

export function googleCalUrl(e: CalEvent): string {
  return (
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(e.title) +
    '&dates=' + EVENT.startUTC + '/' + EVENT.endUTC +
    '&details=' + encodeURIComponent(e.desc) +
    '&location=' + encodeURIComponent(e.location)
  );
}

export function outlookCalUrl(e: CalEvent): string {
  return (
    'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent' +
    '&subject=' + encodeURIComponent(e.title) +
    '&startdt=2026-07-26T09:00:00+05:30' +
    '&enddt=2026-07-26T13:00:00+05:30' +
    '&body=' + encodeURIComponent(e.desc) +
    '&location=' + encodeURIComponent(e.location)
  );
}

export function icsContent(e: CalEvent): string {
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IEEE CS Pro//Invite//EN',
    'BEGIN:VEVENT',
    'UID:ieee-cs-pro-2026@ieeecsbangalore.org',
    'DTSTAMP:' + EVENT.startUTC,
    'DTSTART:' + EVENT.startUTC,
    'DTEND:' + EVENT.endUTC,
    'SUMMARY:' + e.title,
    'DESCRIPTION:' + e.desc,
    'LOCATION:' + e.location,
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n');
}
