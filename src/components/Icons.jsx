import React from "react";

const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const HomeIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z" /></svg>
);
export const GridIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" /></svg>
);
export const WalletIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M3 7h15a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h11M16 14h.01" /></svg>
);
export const CapIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M2 9l10-5 10 5-10 5-10-5zM6 11.5V17s2.5 2 6 2 6-2 6-2v-5.5" /></svg>
);
export const BookIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M4 5a2 2 0 012-2h11v16H6a2 2 0 00-2 2z M6 3v16" /></svg>
);
export const ClockIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
);
export const UsersIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3.3 3-6 6-6s6 2.7 6 6M17 11a3 3 0 100-6M14.5 14c2.5.3 4.5 2.6 4.5 6" /></svg>
);
export const SunIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const FeedbackIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
);
export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);
export const DocIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...p}><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /></svg>
);
