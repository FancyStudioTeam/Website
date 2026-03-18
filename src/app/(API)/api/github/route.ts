import { type NextRequest, NextResponse } from 'next/server';

export function POST(nextRequest: NextRequest) {
	console.log(nextRequest);

	return NextResponse.json({
		message: 'Hello, world!',
	});
}
