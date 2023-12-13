import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Joubert</div>
      <Link href="/lessons">Lessons</Link>
    </main>
  );
}
