import finderIcon from "../assets/Dock/1.avif";
import launchpadIcon from "../assets/Dock/2.avif";
import safariIcon from "../assets/Dock/3.avif";
import messagesIcon from "../assets/Dock/4.avif";
import mailIcon from "../assets/Dock/5.avif";
import mapsIcon from "../assets/Dock/6.avif";
import photosIcon from "../assets/Dock/7.avif";
import facetimeIcon from "../assets/Dock/8.avif";
import calendarIcon from "../assets/Dock/9.avif";
import contactsIcon from "../assets/Dock/10.avif";
import remindersIcon from "../assets/Dock/11.avif";
import notesIcon from "../assets/Dock/12.avif";
import settingsIcon from "../assets/Dock/13.avif";
import appStoreIcon from "../assets/Dock/14.avif";
import terminalIcon from "../assets/Dock/15.avif";
import systemSettingsIcon from "../assets/Dock/16.avif";
import trashIcon from "../assets/Dock/17.avif";
import spotifyIcon from "../assets/Dock/18.png";
import projectsIcon from "../assets/Dock/19.avif";
import downloadsIcon from "../assets/Dock/20.avif";

export const DOCK_APPS = {
  notepad: "notepad",
  safari: "safari",
  spotify: "spotify",
};

export const dockItems = [
  { id: "finder", image: finderIcon, label: "Finder" },
  { id: "launchpad", image: launchpadIcon, label: "Launchpad" },
  { id: "safari", image: safariIcon, label: "Safari", app: DOCK_APPS.safari },
  { id: "messages", image: messagesIcon, label: "Messages" },
  { id: "mail", image: mailIcon, label: "Mail" },
  { id: "maps", image: mapsIcon, label: "Maps" },
  { id: "photos", image: photosIcon, label: "Photos" },
  { id: "facetime", image: facetimeIcon, label: "FaceTime" },
  { id: "calendar", image: calendarIcon, label: "Calendar" },
  { id: "contacts", image: contactsIcon, label: "Contacts" },
  { id: "reminders", image: remindersIcon, label: "Reminders" },
  { id: "notes", image: notesIcon, label: "Notes", app: DOCK_APPS.notepad },
  { id: "settings", image: settingsIcon, label: "Settings" },
  { id: "app-store", image: appStoreIcon, label: "App Store" },
  { id: "terminal", image: terminalIcon, label: "Terminal" },
  { id: "system-settings", image: systemSettingsIcon, label: "System Settings" },
  { id: "trash", image: trashIcon, label: "Trash", dividerAfter: true },
  {
    id: "spotify",
    image: spotifyIcon,
    label: "Spotify",
    app: DOCK_APPS.spotify,
    dividerAfter: true,
  },
  { id: "projects", image: projectsIcon, label: "Projects" },
  { id: "downloads", image: downloadsIcon, label: "Downloads" },
];
