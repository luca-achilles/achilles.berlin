const quotes = [
  'my name is luca, i live on the second floor',
  "i'm the moment between the strikin' and the fire",
  'you know i need you here',
  'i been feeling it since 1966 now',
  "they're talking about you, boy",
];

export default function TickerContent() {
  return (
    <div className={'flex w-screen'}>
      {[...new Array(3).keys()].map((key) => (
        <div
          key={key}
          className={
            'flex animate-ticker items-center justify-between gap-x-5 text-base font-medium text-nowrap'
          }
        >
          {[...new Array(quotes.length * 2).keys()].map((key, i) => {
            if (i % 2 === 0) {
              return (
                <p key={key} className="uppercase">
                  {quotes[i / 2]}
                </p>
              );
            }

            return (
              <div
                key={key}
                className={'h-0.5 w-4 rounded-full bg-white dark:bg-black'}
              />
            );
          })}
          <div />
        </div>
      ))}
    </div>
  );
}
