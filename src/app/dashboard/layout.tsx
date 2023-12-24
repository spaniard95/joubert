import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-8">
        <Link href="/dashboard/lessons">Lessons</Link>
        <Link href="/dashboard/teachers">Teachers</Link>
      </div>
      {children}
    </>
  );
}
