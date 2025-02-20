import Hero from '@/components/hero';
import homeimage from '/public/nestjs.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'reliabilty',
};

export default function Home() {
  return <Hero img={homeimage} content="reliabilitydemo~~~~~~~" />;
}
