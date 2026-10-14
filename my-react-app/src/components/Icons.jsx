// Small inline SVG icon set (no extra packages needed)
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const make = (children) =>
  function Icon(props) {
    return (
      <svg {...base} {...props}>
        {children}
      </svg>
    )
  }

export const HomeIcon = make(
  <>
    <path d="M3 10.5 12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M10 21v-6h4v6" />
  </>,
)

export const GridIcon = make(
  <>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
  </>,
)

export const FolderIcon = make(
  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />,
)

export const HeartIcon = make(
  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />,
)

export const ChatIcon = make(
  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
)

export const SearchIcon = make(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </>,
)

export const ArrowIcon = make(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>,
)

export const ArrowLeftIcon = make(
  <>
    <path d="M19 12H5" />
    <path d="m11 6-6 6 6 6" />
  </>,
)

export const ArrowUpRightIcon = make(
  <>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </>,
)

export const PlayIcon = (props) => (
  <svg {...base} {...props} fill="currentColor" stroke="none">
    <path d="M8 5.2v13.6a.6.6 0 0 0 .9.5l11-6.8a.6.6 0 0 0 0-1L8.9 4.7a.6.6 0 0 0-.9.5z" />
  </svg>
)

export const PlusIcon = make(
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>,
)

export const BuildingIcon = make(
  <>
    <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
    <path d="M14 9h5a1 1 0 0 1 1 1v11" />
    <path d="M2 21h20" />
    <path d="M8 8h2M8 12h2M8 16h2" />
  </>,
)

export const UsersIcon = make(
  <>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
)

export const GlobeIcon = make(
  <>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5a14.5 14.5 0 0 1 4 9.5 14.5 14.5 0 0 1-4 9.5 14.5 14.5 0 0 1-4-9.5 14.5 14.5 0 0 1 4-9.5z" />
  </>,
)