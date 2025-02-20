import Image, { StaticImageData } from 'next/image';

interface PropInterface {
  img: StaticImageData;
  content: string;
}
export default function Home(props: PropInterface) {
  const { img, content } = props;
  return (
    <div className="border-b-indigo-950 h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image src={img} fill style={{ objectFit: 'cover' }} alt="home" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center items-center pt-48 text-white text-5xl font-bold">
        <h1>{content}</h1>
      </div>
    </div>
  );
}
