import './globals.css'

export const metadata = {
  title: 'FINAURA AI STUDIO',
  description: 'Your Collection, Digitally Styled. No shipping. No damage. No logistics. Just results.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}