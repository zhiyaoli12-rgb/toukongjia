import React from 'react';

export function Card({ children, className = '' }) {
  return <div className={`border rounded-xl bg-white shadow-sm ${className}`}>{children}</div>;
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
