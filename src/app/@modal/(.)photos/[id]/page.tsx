'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
      onClick={() => {
        router.back();
      }}
    >
      <Image
        width={300}
        height={300}
        src="https://picsum.photos/400/400"
        alt=""
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
}

export default Page;
