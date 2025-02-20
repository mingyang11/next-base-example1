'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Index() {
  const pathname = usePathname();

  const accessLink = ['/', '/performance', '/reliability', '/scale'];
  if (!accessLink.includes(pathname)) return null;
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between p-10 text-white">
        <Link href={'/'} className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl font-bold space-x-4">
          <Link
            href={'/performance'}
            className={
              pathname.includes('performance') ? 'text-yellow-400' : ''
            }
          >
            Performance
          </Link>
          <Link
            href={'/reliability'}
            className={
              pathname.includes('reliability') ? 'text-yellow-400' : ''
            }
          >
            Reliability
          </Link>
          <Link
            href={'/scale'}
            className={pathname.includes('scale') ? 'text-yellow-400' : ''}
          >
            Scale
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
