import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen w-screen max-h-full flex items-center justify-center p-5'>
      <a
        href='https://www.instagram.com/grupodeuseamor'
        className='h-[40rem] w-[40rem] max-h-full max-w-full flex items-center justify-center rounded-xl  shadow-2xl hover:scale-90 transition-all'
      >
        <Image
          src='/save-the-date.jpeg'
          alt='save-the-date 30/11'
          width={640}
          height={640}
          className='rounded-xl object-contain border-4 border-gray-100'
        />
      </a>
    </div>
  );
}
