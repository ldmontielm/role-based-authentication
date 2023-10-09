export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-5xl w-full text-sm">

        {children}
    </div>
  )
}
