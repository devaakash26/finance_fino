import React, { Suspense } from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'

const DashboardLayout = () => {
    return (
        <div className='px-10 mt-5'>
            <h1 className='text-5xl font-bold gradient-title mb-5'> Dashboard</h1>


            <Suspense fallback={<div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-full my-2"></div>
                <div className="flex items-center gap-2 mt-1">
                    <div className="h-6 bg-gray-200 rounded w-32 my-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-6 mx-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-6 mx-2"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4 my-2"></div>
                <div className="h-6 bg-gray-200 rounded w-6 my-2"></div>
                <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/4 my-2"></div>
                </div>
            </div> }>

                <DashboardPage />
            </Suspense>
        </div>

    )
}

export default DashboardLayout