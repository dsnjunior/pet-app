export const TaskDate: React.FC<{ date: string; timeZone?: string }> = ({ date, timeZone }) => (
  <>
    {Intl.DateTimeFormat(undefined, {
      dateStyle: "long",
      timeStyle: "short",
      hour12: false,
      timeZone,
    }).format(new Date(date.split('Z')[0]))}
  </>
);
