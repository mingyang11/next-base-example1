import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};
export default function Home() {
  return <div className="flex mt-5 p-6 bg-gray-500">@children default</div>;
}
