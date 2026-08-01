// EDIT THIS FILE EACH WEEK. The website reads all its content from here.
const churchData = {
  churchName: "Indian Church of Christ - Chennai",
  welcomeMessage: "Come as you are. Join us for worship, a message of hope, and a warm community growing in faith together.",
  service: {
    date: "Sunday, August 2, 2026",
    time: "10:00 AM",
    location: "Maharastra Mandal - Egmore",
    address: "Liberty Plaze - Nungabakkam",
    directionsUrl: "https://maps.app.goo.gl/4dwhcK6LnvWZoJZBA",
    messageTitle: "A Faith That Moves",
    speaker: "Felix",
    schedule: [
      { time: "9:30 AM", title: "Doors Open", note: "Coffee and conversation in the lobby" },
      { time: "10:00 AM", title: "Welcome & Prayer", note: "Let’s prepare our hearts together" },
      { time: "10:10 AM", title: "Praise & Worship", note: "Three songs led by the worship team" },
      { time: "10:35 AM", title: "Church News", note: "Announcements and upcoming events" },
      { time: "10:45 AM", title: "Sunday Message", note: "A Faith That Moves · James 2:14–26" },
      { time: "11:25 AM", title: "Closing Song & Prayer", note: "Prayer team available at the front" }
    ]
  },

  // Replace these samples with lyrics your church has permission to publish.
  songs: [
    {
      title: "Alangra Vaasalale", artist: "Alex", key: "G",
      lyrics: ["[Verse 1]","அலங்காரவாசலாலல பிரலவசிக்கவந்துநிற்கிலறாம் தெய்வ வீட்டின் நன்மமயாலல, நிரம்பிடவந்துநிற்கிலறாம்","Alangaara vaasalaalae Piravaesikka vanthu nirkirom dheiva veettin nanmaiyaalae, Nirambida vanthu nirkirom"].join("\n")
    },
    {
      title: "Song Title Two", artist: "Worship Artist", key: "D",
      lyrics: ["[Verse 1]","Add your licensed song lyrics here.","Keep each line on its own line.","","[Chorus]","Add the chorus here."].join("\n")
    },
    {
      title: "Song Title Three", artist: "Worship Artist", key: "A",
      lyrics: ["[Verse 1]","Add your licensed song lyrics here.","","[Bridge]","Add the bridge here."].join("\n")
    }
  ],

  announcements: [
    { date: "AUG 02", category: "Sermon", title: "Godly Family", description: "Sit together as families during the lesson", link: "#", linkText: "Learn more" },
    { date: "AUG 15", category: "Church Olympics", title: "Church wide Sports", description: "A day full of sports and games", link: "#", linkText: "Register in games now" },
    { date: "EVERY WED", category: "Prayer", title: "Midweek Prayer", description: "Join us at 7:00 PM as we pray for our church, city, and one another.", link: "#", linkText: "View details" },
    { date: "August 28", category: "Conference", title: "Father Son Retreat", description: "Join Father Son Retreat to Rebuild the Relationship", link: "https://forms.gle/56MSgXNhYdAFD9z9A", linkText: "Register Now" }
  ],

  links: [
    { label: "YouTube", description: "Watch sermons & services", url: "https://www.youtube.com/@greaterchennaichurchofchri8880" },
    { label: "Instagram", description: "Follow church life", url: "https://instagram.com/" },
    { label: "Give Online", description: "Support the ministry", url: "#" },
    { label: "Contact Us", description: "We’d love to hear from you", url: "mailto:hello@example.com" }
  ]
};
