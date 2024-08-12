import Note from './components/Note';

export default function Home() {
	return (
		<main className='z-10 w-full max-w-5xl mx-auto p-4 flex flex-col gap-4 items-center font-mono text-sm h-screen'>
			<h1 className='text-3xl text-transparent mb-6 bg-gradient-to-r from-cyan-500 to-pink-600 rounded-full px-3 bg-clip-text font-thin'>
				Jotter
			</h1>
			<Note />
			<div className='mt-4 rounded-lg bg-gradient-to-r from-cyan-500/70 to-pink-600/70 p-[2px]'>
				<button className='px-4 py-2 text-white rounded bg-slate-800 transition-colors duration-200 ease-in-out hover:bg-transparent'>
					New Jot
				</button>
			</div>
		</main>
	);
}
