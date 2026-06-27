document.addEventListener("DOMContentLoaded", () => {
  const { churchName, welcomeMessage, service, songs, announcements, links } = churchData;
  const setText = (id, value) => document.getElementById(id).textContent = value;

  document.title = churchName + " | Sunday Service";
  setText("church-name-header", churchName);
  setText("church-name-footer", churchName);
  setText("church-name-copyright", churchName);
  setText("welcome-message", welcomeMessage);
  setText("service-date", service.date);
  setText("service-time", service.time);
  setText("service-location", service.location);
  setText("message-title", service.messageTitle);
  setText("speaker", service.speaker);
  setText("footer-address", service.address);
  setText("current-year", new Date().getFullYear());
  document.getElementById("directions-link").href = service.directionsUrl;
  const youtube = links.find(item => item.label.toLowerCase().includes("youtube"));
  document.getElementById("watch-live-header").href = youtube ? youtube.url : "#";

  document.getElementById("schedule-list").innerHTML = service.schedule.map((item, i) =>
    `<li><span class="schedule-number">${String(i + 1).padStart(2, "0")}</span><time>${item.time}</time><div><h3>${item.title}</h3><p>${item.note}</p></div></li>`
  ).join("");

  const songList = document.getElementById("song-list");
  const lyricsPanel = document.getElementById("lyrics-panel");

  function formatLyrics(lyrics) {
    return lyrics.split("\n").map(line => /^\[.*\]$/.test(line.trim())
      ? `<strong>${line.slice(1, -1)}</strong>`
      : (line || "<br>")).join("<br>");
  }

  function showSong(index) {
    const song = songs[index];
    document.querySelectorAll(".song-button").forEach((button, i) => {
      const selected = i === index;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-selected", selected);
    });
    lyricsPanel.innerHTML = `<div class="lyrics-heading"><div><p class="card-label">Now singing</p><h3>${song.title}</h3><p>${song.artist}</p></div><span class="key-badge">Key ${song.key}</span></div><div class="lyrics">${formatLyrics(song.lyrics)}</div>`;
  }

  songList.innerHTML = songs.map((song, i) =>
    `<button class="song-button" role="tab" aria-selected="false" data-index="${i}"><span class="song-index">${String(i + 1).padStart(2, "0")}</span><span><strong>${song.title}</strong><small>${song.artist}</small></span><span>→</span></button>`
  ).join("");
  songList.addEventListener("click", event => {
    const button = event.target.closest(".song-button");
    if (button) showSong(Number(button.dataset.index));
  });
  if (songs.length) showSong(0);

  document.getElementById("announcement-grid").innerHTML = announcements.map(item =>
    `<article class="announcement-card"><div class="announcement-meta"><span>${item.date}</span><span>${item.category}</span></div><h3>${item.title}</h3><p>${item.description}</p><a href="${item.link}">${item.linkText} <span>→</span></a></article>`
  ).join("");

  document.getElementById("link-grid").innerHTML = links.map(item =>
    `<a class="connect-link" href="${item.url}" target="${item.url.startsWith("http") ? "_blank" : "_self"}" rel="noreferrer"><span><strong>${item.label}</strong><small>${item.description}</small></span><span>↗</span></a>`
  ).join("");
});