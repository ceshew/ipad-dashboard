import type * as React from "react";

type Props = {
  size?: number;           // px size (width=height)
  title?: string;          // accessible name
  className?: string;
};

const Svg = ({
  children,
  size = 14,
  title,
  className,
}: React.PropsWithChildren<Pick<Props, "size" | "title" | "className">>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    role="img"
    aria-label={title}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {title ? <title>{title}</title> : null}
    {children}
  </svg>
);

/** Backlog: dotted ring */
export const StatusBacklog: React.FC<Props> = ({
  size,
  title = "Backlog",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#a8acb2" strokeWidth="1.5" strokeDasharray="1.4 1.74" strokeDashoffset="0.65"></circle>
  </Svg>
);

/** Todo: hollow circle */
export const StatusTodo: React.FC<Props> = ({
  size,
  title = "Todo",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#acacac" strokeWidth="1.5" strokeDasharray="3.14 0" strokeDashoffset="-0.7"></circle>
  </Svg>

);

/** In Progress: ring + small dot */
export const StatusInProgress: React.FC<Props> = ({
  size,
  title = "In Progress",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#f0bf00" strokeWidth="1.5" strokeDasharray="3.14 0" strokeDashoffset="-0.7"></circle>
    <circle cx="7" cy="7" r="2" fill="none" stroke="#f0bf00" strokeWidth="4" strokeDasharray="12.189379495928398 24.378758991856795" strokeDashoffset="6.094689747964199" transform="rotate(-90 7 7)"></circle>
  </Svg>
);

/** Done: filled circle + check */
export const StatusDone: React.FC<Props> = ({
  size,
  title = "Done",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#4757bc" strokeWidth="1.5" strokeDasharray="3.14 0" strokeDashoffset="-0.7"></circle>
    <circle cx="7" cy="7" r="3" fill="none" stroke="#4757bc" strokeWidth="6" strokeDasharray="18.84955592153876 37.69911184307752" strokeDashoffset="0" transform="rotate(-90 7 7)"></circle>
    <path stroke="none" fill="white" d="M10.951 4.24896C11.283 4.58091 11.283 5.11909 10.951 5.45104L5.95104 10.451C5.61909 10.783 5.0809 10.783 4.74896 10.451L2.74896 8.45104C2.41701 8.11909 2.41701 7.5809 2.74896 7.24896C3.0809 6.91701 3.61909 6.91701 3.95104 7.24896L5.35 8.64792L9.74896 4.24896C10.0809 3.91701 10.6191 3.91701 10.951 4.24896Z"></path>
  </Svg>
);

/** Canceled: X */
export const StatusCanceled: React.FC<Props> = ({
  size,
  title = "Canceled",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#95a2b3" stroke-width="1.5" stroke-dasharray="3.14 0" stroke-dashoffset="-0.7"></circle>
    <circle cx="7" cy="7" r="3" fill="none" stroke="#95a2b3" stroke-width="6" stroke-dasharray="18.84955592153876 37.69911184307752" stroke-dashoffset="0" transform="rotate(-90 7 7)"></circle>
    <path stroke="none" fill="white" d="M3.73657 3.73657C4.05199 3.42114 4.56339 3.42114 4.87881 3.73657L5.93941 4.79716L7 5.85775L9.12117 3.73657C9.4366 3.42114 9.94801 3.42114 10.2634 3.73657C10.5789 4.05199 10.5789 4.56339 10.2634 4.87881L8.14225 7L10.2634 9.12118C10.5789 9.4366 10.5789 9.94801 10.2634 10.2634C9.94801 10.5789 9.4366 10.5789 9.12117 10.2634L7 8.14225L4.87881 10.2634C4.56339 10.5789 4.05199 10.5789 3.73657 10.2634C3.42114 9.94801 3.42114 9.4366 3.73657 9.12118L4.79716 8.06059L5.85775 7L3.73657 4.87881C3.42114 4.56339 3.42114 4.05199 3.73657 3.73657Z"></path>
  </Svg>
);

/** Duplicate: same visual as Canceled (separate component for semantics) */
export const StatusDuplicate: React.FC<Props> = ({
  size,
  title = "Duplicate",
  className,
}) => (
  <Svg size={size} title={title} className={className}>
    <circle cx="7" cy="7" r="6" fill="none" stroke="#95a2b3" stroke-width="1.5" stroke-dasharray="3.14 0" stroke-dashoffset="-0.7"></circle>
    <circle cx="7" cy="7" r="3" fill="none" stroke="#95a2b3" stroke-width="6" stroke-dasharray="18.84955592153876 37.69911184307752" stroke-dashoffset="0" transform="rotate(-90 7 7)"></circle>
    <path stroke="none" fill="white" d="M3.73657 3.73657C4.05199 3.42114 4.56339 3.42114 4.87881 3.73657L5.93941 4.79716L7 5.85775L9.12117 3.73657C9.4366 3.42114 9.94801 3.42114 10.2634 3.73657C10.5789 4.05199 10.5789 4.56339 10.2634 4.87881L8.14225 7L10.2634 9.12118C10.5789 9.4366 10.5789 9.94801 10.2634 10.2634C9.94801 10.5789 9.4366 10.5789 9.12117 10.2634L7 8.14225L4.87881 10.2634C4.56339 10.5789 4.05199 10.5789 3.73657 10.2634C3.42114 9.94801 3.42114 9.4366 3.73657 9.12118L4.79716 8.06059L5.85775 7L3.73657 4.87881C3.42114 4.56339 3.42114 4.05199 3.73657 3.73657Z"></path>
  </Svg>
);