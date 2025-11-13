import './globals.css';

export const metadata = {
  title: 'My Art Site',
  description: 'Showcasing my art and characters',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}