
'use client';  // This file is for client-side logic

import { useEffect, useState } from 'react';
import { BreakpointProvider } from 'react-socks'; // Import any client-side libraries


export default function ClientComponent({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <BreakpointProvider>
     {children}
    </BreakpointProvider>
  );
}
