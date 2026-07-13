import TickerContent from '@/components/TickerContent';
import Link from 'next/link';

export default function TickerContainer() {
  return (
    <Link href={'/lyrics'}>
      <div
        className={
          'h-6 w-screen cursor-pointer bg-black text-white select-none dark:bg-white dark:text-black'
        }
      >
        <TickerContent />
      </div>
    </Link>
  );
}
