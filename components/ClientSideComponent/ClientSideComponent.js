'use client';

// Imports
// ========================================================
import React, { useState, useEffect } from 'react';

// Page
// ========================================================
export default function ClientSideComponent({ children }) {
  // State / Props
  const [hasMounted, setHasMounted] = useState(false);

  // Hooks
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render
  if (!hasMounted) return null;

  return <div>{children}</div>;
}
