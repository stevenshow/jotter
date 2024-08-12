import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Jotter',
	description: 'Allows you to jot down notes in a simple and easy way.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='min-h-screen bg-slate-700'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
