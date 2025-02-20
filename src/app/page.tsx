import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12"></div>
  );
}
