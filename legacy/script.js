/* ============================================================
   IEEE CS Pro 2026 — Invitation · interactions
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Intro / preloader ---------- */
  function dismissIntro() {
    var intro = document.getElementById('intro');
    if (!intro) return;
    intro.classList.add('intro--hide');
    setTimeout(function () { intro.style.display = 'none'; }, 1000);
  }
  window.addEventListener('load', function () {
    setTimeout(dismissIntro, reduceMotion ? 150 : 1200);
  });
  // safety: never trap the page behind the intro
  setTimeout(dismissIntro, 3000);

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Countdown ---------- */
  // 26 July 2026, 09:00 IST (UTC+05:30)
  var target = new Date('2026-07-26T09:00:00+05:30').getTime();
  var elD = document.getElementById('cd-d'),
      elH = document.getElementById('cd-h'),
      elM = document.getElementById('cd-m'),
      elS = document.getElementById('cd-s'),
      note = document.getElementById('cd-note');

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function tick() {
    var diff = target - Date.now();
    if (diff <= 0) {
      if (elD) { elD.textContent = '00'; elH.textContent = '00'; elM.textContent = '00'; elS.textContent = '00'; }
      if (note) note.textContent = 'The day has arrived — welcome to IEEE CS Pro 2026.';
      return false;
    }
    var s = Math.floor(diff / 1000);
    if (elD) {
      elD.textContent = pad(Math.floor(s / 86400));
      elH.textContent = pad(Math.floor((s % 86400) / 3600));
      elM.textContent = pad(Math.floor((s % 3600) / 60));
      elS.textContent = pad(s % 60);
    }
    return true;
  }
  if (elD) { tick(); setInterval(tick, 1000); }

  /* ---------- Constellation canvas ---------- */
  function Constellation(canvas, opts) {
    if (!canvas || reduceMotion) return;
    opts = opts || {};
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, pts = [], mouse = { x: -9999, y: -9999 };
    var dotColor = 'rgba(226,197,126,';
    var lineColor = 'rgba(201,162,75,';
    var LINK = 138, COUNT;

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // calmer, more premium density
      COUNT = Math.max(24, Math.min(72, Math.floor((w * h) / 20000)));
      pts = [];
      for (var i = 0; i < COUNT; i++) {
        pts.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.14, vy: (Math.random() - 0.5) * 0.14,
          r: Math.random() * 1.5 + 0.6,
          a: Math.random() * 0.4 + 0.5   // per-star base opacity
        });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);

      // links first (under the stars), so dots read crisp on top
      for (var a = 0; a < pts.length; a++) {
        for (var b = a + 1; b < pts.length; b++) {
          var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            ctx.beginPath();
            ctx.moveTo(pts[a].x, pts[a].y);
            ctx.lineTo(pts[b].x, pts[b].y);
            ctx.strokeStyle = lineColor + (0.20 * (1 - d / LINK)).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (var i = 0; i < pts.length; i++) {
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // gentle, subtle drift toward cursor
        var dxm = mouse.x - p.x, dym = mouse.y - p.y;
        var dm = Math.sqrt(dxm * dxm + dym * dym);
        if (dm < 160) { p.x += dxm * 0.003; p.y += dym * 0.003; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor + p.a.toFixed(2) + ')';
        ctx.shadowColor = 'rgba(226,197,126,0.55)'; ctx.shadowBlur = 6;
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(frame);
    }

    var raf;
    var host = canvas.closest('section') || canvas.parentElement || document.body;
    host.addEventListener('mousemove', function (e) {
      var rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
    });
    host.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', resize);
    resize();
    frame();
  }
  Constellation(document.getElementById('constellation'), { dark: true });
  Constellation(document.getElementById('constellation2'), { dark: true });

  /* ---------- Hero parallax (subtle canvas drift only) ---------- */
  if (!reduceMotion) {
    var heroCanvas = document.getElementById('constellation');
    if (heroCanvas) {
      window.addEventListener('scroll', function () {
        var y = window.pageYOffset;
        if (y < window.innerHeight) {
          heroCanvas.style.transform = 'translateY(' + (y * 0.12) + 'px)';
        }
      }, { passive: true });
    }
  }

  /* ---------- Add to calendar ---------- */
  var EVENT = {
    title: 'IEEE CS Pro 2026 — Leaders. Learners. Impact.',
    desc: 'An exclusive leadership & networking forum for CS professionals. By invitation only. Connecting Visionaries. Empowering Opportunities.',
    location: 'Bengaluru (venue to be announced)',
    // UTC equivalents of 26 Jul 2026 09:00–13:00 IST
    startUTC: '20260726T033000Z',
    endUTC: '20260726T073000Z'
  };

  function googleUrl() {
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(EVENT.title)
      + '&dates=' + EVENT.startUTC + '/' + EVENT.endUTC
      + '&details=' + encodeURIComponent(EVENT.desc)
      + '&location=' + encodeURIComponent(EVENT.location);
  }
  function outlookUrl() {
    return 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent'
      + '&subject=' + encodeURIComponent(EVENT.title)
      + '&startdt=2026-07-26T09:00:00+05:30'
      + '&enddt=2026-07-26T13:00:00+05:30'
      + '&body=' + encodeURIComponent(EVENT.desc)
      + '&location=' + encodeURIComponent(EVENT.location);
  }
  function icsBlob() {
    var ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//IEEE CS Pro//Invite//EN',
      'BEGIN:VEVENT',
      'UID:ieee-cs-pro-2026@ieeecsbangalore.org',
      'DTSTAMP:' + EVENT.startUTC,
      'DTSTART:' + EVENT.startUTC,
      'DTEND:' + EVENT.endUTC,
      'SUMMARY:' + EVENT.title,
      'DESCRIPTION:' + EVENT.desc,
      'LOCATION:' + EVENT.location,
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    return new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  }

  var cal = document.getElementById('cal');
  var calBtn = document.getElementById('cal-btn');
  if (cal && calBtn) {
    calBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = cal.classList.toggle('cal--open');
      calBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function () {
      cal.classList.remove('cal--open');
      calBtn.setAttribute('aria-expanded', 'false');
    });
    cal.querySelectorAll('[data-cal]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var type = a.getAttribute('data-cal');
        if (type === 'google') window.open(googleUrl(), '_blank', 'noopener');
        else if (type === 'outlook') window.open(outlookUrl(), '_blank', 'noopener');
        else if (type === 'ics') {
          var url = URL.createObjectURL(icsBlob());
          var link = document.createElement('a');
          link.href = url; link.download = 'IEEE-CS-Pro-2026.ics';
          document.body.appendChild(link); link.click(); document.body.removeChild(link);
          setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        }
        cal.classList.remove('cal--open');
      });
    });
  }
})();
