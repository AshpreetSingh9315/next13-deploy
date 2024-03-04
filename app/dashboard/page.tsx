import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <h1>Hellops</h1>
      <Link href='/dashboard/customer' className=''>Customer</Link> <br />
      <Link href='/dashboard/invoices' className=''>Invoice</Link>
    </div>
  )
}

export default page
