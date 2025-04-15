"use client"
import { scanRecipt } from '@/actions/transaction';
import useFetch from '@/hooks/use-fetch';
import { Camera, Loader2 } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
import { toast } from 'sonner';


const ReciptScanner = ({ onScanComplete }) => {
    const fileInputRef = useRef();

    const {
        loading: scanReciptLoading,
        fn: scanReciptFn,
        data: scannedData,
    } = useFetch(scanRecipt);

    const handleReciptScan = async (file) => {
        if (file.size > 5 * 1024 * 1024) {
            toast.error("File size should be less than 5MB");
            return;
        }

        await scanReciptFn(file);
    }
    useEffect(() => {
        if (scannedData && !scanReciptLoading) {
            onScanComplete(scannedData);
            toast.success("Receipt scanned successfully");
        }
    }, [scanReciptLoading, scannedData]);

    return (
        <div>
            <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                accept='image/*'
                // capture="environment"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleReciptScan(file);
                }}
            />
            <button className="btn bg-gradient-to-br from-purple-400 via-pink-500 to-amber-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300  hover:brightness-110"
                onClick={() => fileInputRef.current?.click()}
                disabled={scanReciptLoading}
            >

                {scanReciptLoading ? <>
                    <i className="animation"></i>
                    <span className='flex justify-center items-center'>
                        <Loader2 className='mr-2 animate-spin' />
                        Scanning receipt...</span>
                    <i className="animation"></i>
                </> : <>  <i className="animation"></i>
                    <span className="flex justify-center items-center">
                        <Camera className="mr-2" />
                        Scan Receipt with AI
                    </span>
                    <i className="animation"></i></>}

            </button>


        </div >
    )
}

export default ReciptScanner