import React from 'react';
import { redirect } from 'next/navigation';

function page() {
  // return <div>main page</div>;
  redirect('/dashboard');
}

export default page;
