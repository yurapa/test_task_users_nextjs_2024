import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TT: Test Task',
  description:
    'Develop a web application using React or Next.js that integrates with the free API provided by Reqres. The project must include the implementation of various pages and functionality as described below.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div>
            {children}
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </>
      </body>
    </html>
  );
}
