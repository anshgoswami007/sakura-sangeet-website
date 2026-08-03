/* Sakura Sangeet — shared site behavior (nav, data rendering, social links) */

// Original flat-icon set for each music genre. Keys must match SITE_DATA.genres[].icon.
var GENRE_ICONS = {
  sufi: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><path d="M50 50 C50 38 60 32 68 38 C78 46 74 62 60 66 C42 71 26 58 32 40 C39 20 62 14 78 28" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="4" fill="currentColor"/></svg>',
  bollywood: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><rect x="20" y="42" width="60" height="38" rx="4" fill="currentColor"/><path d="M18 42 L82 42 L76 24 L24 30 Z" fill="currentColor"/><g stroke="#fff" stroke-width="4"><path d="M30 30 L36 42"/><path d="M44 28 L50 42"/><path d="M58 26 L64 42"/></g></svg>',
  bhajan: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><path d="M15 62 Q50 78 85 62 Q78 72 50 72 Q22 72 15 62 Z" fill="currentColor"/><ellipse cx="50" cy="60" rx="26" ry="8" fill="currentColor"/><path d="M50 30 C44 40 44 48 50 54 C56 48 56 40 50 30 Z" fill="currentColor"/></svg>',
  punjabi: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><rect x="18" y="36" width="64" height="28" rx="3" fill="currentColor"/><ellipse cx="18" cy="50" rx="10" ry="16" fill="currentColor"/><ellipse cx="82" cy="50" rx="10" ry="16" fill="currentColor"/><path d="M30 38v24M42 35v30M58 35v30M70 38v24" stroke="#fff" stroke-width="2.5" opacity="0.75"/></svg>',
  classical: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><ellipse cx="38" cy="70" rx="20" ry="14" fill="currentColor"/><path d="M50 60 L68 16" stroke="currentColor" stroke-width="6" stroke-linecap="round"/><circle cx="70" cy="14" r="5" fill="currentColor"/><path d="M40 62 L64 24 M34 68 L60 26" stroke="currentColor" stroke-width="2" opacity="0.7"/></svg>',
  western: '<svg viewBox="0 0 100 100" width="76" height="76" fill="none"><rect x="46" y="10" width="8" height="30" fill="currentColor"/><circle cx="50" cy="66" r="24" fill="currentColor"/><circle cx="50" cy="46" r="14" fill="currentColor"/><circle cx="50" cy="66" r="8" fill="#fff" opacity="0.85"/><path d="M46 10 L46 4 M54 10 L54 4" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>'
};

document.addEventListener("DOMContentLoaded", function () {
  var lang = document.documentElement.lang === "ja" ? "ja" : "en";

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  }

  // Populate social/contact links from shared data
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    if (window.SITE_DATA && SITE_DATA.links && SITE_DATA.links[key]) {
      el.setAttribute("href", SITE_DATA.links[key]);
    }
  });

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Render genre cards
  var genresGrid = document.getElementById("genresGrid");
  if (genresGrid && window.SITE_DATA && SITE_DATA.genres) {
    genresGrid.innerHTML = SITE_DATA.genres.map(function (g) {
      var icon = GENRE_ICONS[g.icon] || "";
      return (
        '<div class="card member-card">' +
          '<div class="member-avatar genre-avatar">' + icon + "</div>" +
          "<h3>" + g.name[lang] + "</h3>" +
          "<p>" + g.description[lang] + "</p>" +
        "</div>"
      );
    }).join("");
  }

  // Render member cards
  var membersGrid = document.getElementById("membersGrid");
  if (membersGrid && window.SITE_DATA) {
    membersGrid.innerHTML = SITE_DATA.members.map(function (m) {
      var avatar = m.photo
        ? '<img class="member-avatar" src="' + m.photo + '" alt="' + m.name[lang] + '">'
        : '<div class="member-avatar">' + m.initials + "</div>";
      var instagram = m.instagram
        ? '<a class="member-instagram" href="https://www.instagram.com/' + m.instagram + '" target="_blank" rel="noopener">@' + m.instagram + "</a>"
        : "";
      return (
        '<div class="card member-card">' +
          avatar +
          "<h3>" + m.name[lang] + "</h3>" +
          '<div class="member-role">' + m.role[lang] + "</div>" +
          instagram +
          '<div class="member-meta">' +
            "<strong>" + (lang === "ja" ? "音楽の好み" : "Music Taste") + "</strong>" + m.taste[lang] +
          "</div>" +
          '<div class="member-meta">' +
            "<strong>" + (lang === "ja" ? "経験" : "Experience") + "</strong>" + m.experience[lang] +
          "</div>" +
          (m.isPlaceholder
            ? '<span class="placeholder-flag">' + (lang === "ja" ? "プレースホルダー" : "Placeholder") + "</span>"
            : "") +
        "</div>"
      );
    }).join("");
  }

  // Render collaborator cards
  var collaboratorsGrid = document.getElementById("collaboratorsGrid");
  if (collaboratorsGrid && window.SITE_DATA && SITE_DATA.collaborators) {
    collaboratorsGrid.innerHTML = SITE_DATA.collaborators.map(function (c) {
      var avatar = c.photo
        ? '<img class="member-avatar" src="' + c.photo + '" alt="' + c.name[lang] + '">'
        : '<div class="member-avatar">' + c.initials + "</div>";
      var instagram = c.instagram
        ? '<a class="member-instagram" href="https://www.instagram.com/' + c.instagram + '" target="_blank" rel="noopener">@' + c.instagram + "</a>"
        : "";
      return (
        '<div class="card member-card">' +
          avatar +
          "<h3>" + c.name[lang] + "</h3>" +
          instagram +
        "</div>"
      );
    }).join("");
  }

  // Render event cards
  var eventsGrid = document.getElementById("eventsGrid");
  if (eventsGrid && window.SITE_DATA) {
    var today = new Date();
    var sorted = SITE_DATA.events.slice().sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    eventsGrid.innerHTML = sorted.map(function (e) {
      var isUpcoming = new Date(e.date) >= new Date(today.toDateString());
      var dateLabel = new Date(e.date).toLocaleDateString(lang === "ja" ? "ja-JP" : "en-US", {
        year: "numeric", month: "long", day: "numeric"
      });
      return (
        '<div class="card event-card">' +
          '<img src="' + e.image + '" alt="' + e.title[lang] + '" loading="lazy">' +
          '<div class="event-body">' +
            '<div class="event-date">' + dateLabel + "</div>" +
            '<span class="event-status ' + (isUpcoming ? "upcoming" : "past") + '">' +
              (isUpcoming ? (lang === "ja" ? "開催予定" : "Upcoming") : (lang === "ja" ? "終了" : "Past")) +
            "</span>" +
            "<h3>" + e.title[lang] + "</h3>" +
            '<div class="event-venue">' + e.venue[lang] + "</div>" +
            "<p>" + e.description[lang] + "</p>" +
          "</div>" +
        "</div>"
      );
    }).join("");
  }
});
