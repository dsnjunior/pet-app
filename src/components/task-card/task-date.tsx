export const TaskDate: React.FC<{ date: string; timeZone?: string, locale?: string }> = ({ date, timeZone, locale }) => (
  <>
    {Intl.DateTimeFormat(locale, {
      dateStyle: "long",
      timeStyle: "short",
      hour12: false,
      timeZone,
    }).format(new Date(date.split('Z')[0]))}
  </>
);
