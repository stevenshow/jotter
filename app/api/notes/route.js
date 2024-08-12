import prisma from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const notes = await prisma.note.findMany({
			include: {
				folder: true,
			},
		});

		return NextResponse.json(notes);
	} catch (error) {
		console.error('Error fetching notes:', error);
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 }
		);
	}
}
