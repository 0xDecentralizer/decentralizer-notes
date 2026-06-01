import { redirect } from 'next/navigation';

export default function Page() {
	// Redirect the /roadmap app route to the static HTML placed in /public/roadmap/index.html
	redirect('/roadmap/index.html');
}
