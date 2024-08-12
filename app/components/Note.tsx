'use client';

import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export default function Note() {
	const [editContent, setEditContent] = useState('');
	const [isMdUp, setIsMdUp] = useState(false);

	const saveToLocalStorage = debounce((newContent) => {
		console.log('Saving to local storage');
		localStorage.setItem('savedNote', newContent);
	}, 1000);

	useEffect(() => {
		const savedNote = localStorage.getItem('savedNote');
		if (savedNote) {
			setEditContent(savedNote);
		}
	}, []);

	useEffect(() => {
		saveToLocalStorage(editContent);
		return () => {
			saveToLocalStorage.cancel();
		};
	}, [editContent, saveToLocalStorage]);

	useEffect(() => {
		const handleResize = () => {
			setIsMdUp(window.innerWidth >= 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='flex-grow flex flex-col w-full'>
			<MDEditor
				height='100%'
				autoFocus={true}
				value={editContent}
				preview={isMdUp ? 'live' : 'edit'}
				onChange={(value) => setEditContent(value || '')}
				visibleDragbar={false}
				previewOptions={{
					rehypePlugins: [[rehypeSanitize]],
				}}
			/>
		</div>
	);
}
