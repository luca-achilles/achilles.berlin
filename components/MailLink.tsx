'use client';

import Link from 'next/link';

export default function MailLink() {
  return (
    <Link
      href={'mailto:luca@achilles.berlin'}
      target={'_blank'}
      className={
        'cursor-pointer text-4xl font-semibold decoration-primary decoration-3 select-none hover:underline'
      }
      draggable={false}
      onClick={(e) => {
        if (!navigator.userAgent.match(/Firefox/i)) {
          return;
        }

        window.open('mailto:luca@achilles.berlin', '_blank');
        e.preventDefault();
      }}
    >
      luca@achilles.berlin
    </Link>
  );
}
