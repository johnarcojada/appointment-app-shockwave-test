export const sidebarAnim = {
  initial: { width: 240 },
  collapsed: {
    width: 120,
    transition: { duration: 0.4, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: { width: 240 },
};
export const sidebarLogoAnim = {
  initial: { x: 0 },
  collapsed: {
    x: 31,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: { x: 0 },
};
export const sidebarLogoLabelAnim = {
  initial: { opacity: 1 },
  collapsed: {
    opacity: 0,
    transition: { duration: 0.1, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: { opacity: 1, transition: { delay: 0.2 } },
};
export const sidebarLinkAnim = {
  initial: { opacity: 1 },
  collapsed: {
    opacity: 0,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: { opacity: 1 },
};
export const sidebarLinkIconAnim = {
  initial: { x: 0 },
  collapsed: {
    x: 8,
    transition: { duration: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: {
    x: 0,
    transition: { duration: 0.3 },
  },
};
export const togglerIconAnim = {
  initial: { scaleX: 1 },
  collapsed: {
    scaleX: -1,
    transition: { delay: 0.3, easeInOut: [0.23, 1, 0.32, 1] },
  },
  expanded: { scaleX: 1, transition: { delay: 0.3 } },
};
