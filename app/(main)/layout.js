import React, { Suspense } from 'react'
import AddTransactionForm from './transaction/_components/AdTransactionform'

const TransactionLayout = ({children}) => {
  return (
    <div className='mx-auto py-20'>
  {children}
    </div>
  )
}

export default TransactionLayout