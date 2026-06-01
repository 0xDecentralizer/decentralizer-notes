import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/roadmap/index.html');
  return null;
}
