import './globals.css';

export const metadata = {
  title: 'DÉA - Save the Date - 30/11',
  description: 'Jesus voltou e te espera dia 30/11.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='bg-gray-950 text-gray-100'>{children}</body>
    </html>
  );
}
