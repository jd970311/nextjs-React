import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto text-center">
      <h2> Page</h2>
      <p>this server.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
