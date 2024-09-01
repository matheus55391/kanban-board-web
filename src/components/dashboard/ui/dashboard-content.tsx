interface MainContentProps {
  children: React.ReactNode;
}

export default function DashboardContent({ children }: MainContentProps) {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-red-800">
      {children}
    </main>
  );
}
