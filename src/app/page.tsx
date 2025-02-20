import Hero from '@/components/hero';
import homeimage from '../../public/react.jpeg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'home',
};
export default function Home() {
  return <Hero img={homeimage} content="home" />;
}
