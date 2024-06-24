import SessionWrapper from "@/components/wrappers/SessionWrapper";


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
