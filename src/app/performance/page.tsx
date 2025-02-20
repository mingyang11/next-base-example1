import Hero from '@/components/hero';
import homeimage from '../../../public/css.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'performance',
};

export default function Home() {
  return <Hero img={homeimage} content="performance" />;
}
