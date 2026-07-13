import SongCard from '@/components/SongCard';
import songQuotes from './songquotes.json';
import { Fragment } from 'react/jsx-runtime';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Lyrics() {
  return (
    <div
      className={
        'flex h-svh w-svw flex-col items-center justify-center overflow-x-clip bg-white font-poppins text-black selection:bg-primary dark:bg-black dark:text-white'
      }
    >
      <Link href={'/'}>
        <div className="group mb-8 flex cursor-pointer items-center gap-x-1">
          <ChevronLeft className="size-4 group-hover:text-primary" />
          <p className="group-hover:text-primary">achilles.berlin</p>
        </div>
      </Link>
      <div className="flex w-fit flex-col gap-y-12">
        {songQuotes.map((quote, i) => (
          <Fragment key={i}>
            <SongCard
              quote={quote.quote}
              title={quote.title}
              artist={quote.artist}
              coverUrl={quote.coverUrl}
              spotifyTrackId={quote.spotifyTrackId}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
