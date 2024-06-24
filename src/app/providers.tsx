import SessionWrapper from "@/components/auth/SessionWrapper";


export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>

        {children}
    </SessionWrapper>
  );
}
