import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'
import { ThemeToggle } from './ui/theme-toggle'

const Header = async () => {
    await checkUser();
    return (
        <>
            <div className='fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b dark:border-gray-800'>
                <nav className='container mx-auto px-10 py-4 flex items-center justify-between'>
                    <Link href="/">
                        <Image src={"/logo.png"} alt="fino-logo" height={60} width={200} className='h-12 w-auto object-contain '></Image>
                    </Link>

                    <div className='flex items-center space-x-4'>
                        <ThemeToggle />
                        
                        <SignedIn>
                            <Link href={"/dashboard"} className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 flex items-center gap-2'>
                                <Button variant="outline">
                                <LayoutDashboard size={18}/>
                            <span className='hidden md:inline'>Dashboard</span>                    
                                </Button>
                            </Link>
                        </SignedIn>
                        <SignedIn>
                            <Link href={"/transaction/create"} className='text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 flex items-center gap-2'>
                                <Button >
                                <PenBox size={18}/>
                            <span className='hidden md:inline'>Transaction</span>                    
                                </Button>
                            </Link>
                        </SignedIn>
                        <SignedOut>
                            <SignInButton forceRedirectUrl='/dashboard'>
                                <Button variant="outline">Login</Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton appearance={{
                                elements:{
                                    avatarBox:"w-9 h-9"
                                }
                            }} />
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header