import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SongCard({
  quote,
  title,
  artist,
  coverUrl,
  spotifyTrackId,
}: {
  quote: string;
  title: string;
  artist: string;
  coverUrl: string;
  spotifyTrackId: string;
}) {
  return (
    <div className="pl-1/3 flex items-center gap-x-4">
      <Link
        href={`https://open.spotify.com/track/${spotifyTrackId}`}
        target="_blank"
      >
        <div className="group/cover flex items-center justify-center">
          <div className="pointer-events-none absolute size-24 rounded bg-black opacity-0 group-hover/cover:opacity-40" />
          <Image
            className="size-24 cursor-pointer rounded select-none"
            src={`https://is1-ssl.mzstatic.com/image/thumb/${coverUrl}/96x96bb.jpg`}
            alt={'album cover'}
            width={96}
            height={96}
            draggable={false}
          />
          <PlayIcon className="pointer-events-none invisible absolute text-white group-hover/cover:visible" />
        </div>
      </Link>
      <div className="group/card flex h-full flex-col items-start justify-between">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="font-light">{artist}</p>
        </div>
        <p className="font-mono italic group-hover/card:text-primary">
          &quot;{quote}&quot;
        </p>
      </div>
    </div>
  );
}
