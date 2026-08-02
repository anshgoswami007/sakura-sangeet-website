/* Sakura Sangeet — shared site behavior (nav, data rendering, social links) */

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
