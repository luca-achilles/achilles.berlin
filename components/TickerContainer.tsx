'use client';

import TickerContent from '@/components/TickerContent';

export default function TickerContainer() {
  return (
    <div
      className={
        'h-6 w-screen cursor-pointer bg-black text-white select-none dark:bg-white dark:text-black'
      }
      onClick={() => {
        window.open(
          'https://open.spotify.com/playlist/5dJewzGb3nztOwmGXIBkSa?si=b1ec22f45f95454a',
          '_blank'
        );
      }}
    >
      <TickerContent />
    </div>
  );
}
