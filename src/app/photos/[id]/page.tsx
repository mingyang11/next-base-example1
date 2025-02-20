import Image from 'next/image';

function Page() {
  return (
    <div>
      <Image
        width={400}
        height={400}
        src="https://picsum.photos/400/400"
        alt=""
      />
      <h3>
        descriptiondescriptiondescriptiondescriptiondescriptiondescription
      </h3>
    </div>
  );
}

export default Page;
