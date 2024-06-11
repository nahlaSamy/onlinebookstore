import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({userData,children}) {
  if(localStorage.getItem('userToken')|| userData) return children;
  else return <Navigate to ="/login"/>;
}
