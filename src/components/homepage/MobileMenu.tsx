import { MagnifyingGlassIcon, SparklesIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

interface MobileMenuProps {
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isActive: boolean;
    setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu:React.FC <MobileMenuProps> = ({setMobileMenuOpen,isActive,setSearchOpen}) => {
    const navigate = useNavigate()
    return (
                <div className="fixed h-[100vh] z-[999] inset-0 bg-black/30 backdrop-blur-sm md:hidden transition-all duration-300">
                    <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
                        {/* Header with close button */}
                        <div className={`flex items-center justify-between p-4 ${isActive ? 'bg-white' : 'bg-gradient-to-r from-indigo-600 to-pink-400'}`}>
                            <div className="flex items-center gap-1">
                                <SparklesIcon className="h-5 w-5 text-yellow-500" />
                                <span className={`text-2xl font-bold ${isActive ? 'text-indigo-600' : 'text-[white]'}`}>RevYOU</span>
                            </div>
                            <button 
                                className="p-2 rounded-full hover:bg-black/10"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <XMarkIcon className={`h-6 w-6 ${isActive ? 'text-indigo-600' : 'text-[white]'}`} />
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                            <nav className="flex flex-col gap-1">
                                <Link 
                                    to="/reviews" 
                                    className="flex items-center px-4 py-3 rounded-lg hover:bg-purple-50 text-gray-800 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <SparklesIcon className="h-5 w-5 mr-3 text-purple-500" />
                                    Discover
                                </Link>
                                
                                <Link 
                                    to="/reviews/all/categories" 
                                    className="flex items-center px-4 py-3 rounded-lg hover:bg-purple-50 text-gray-800 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <svg className="h-5 w-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    Categories
                                </Link>
                                
                                <Link 
                                    to="/pricing" 
                                    className="flex items-center px-4 py-3 rounded-lg hover:bg-purple-50 text-gray-800 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <svg className="h-5 w-5 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Pricing
                                </Link>
                            </nav>

                            {/* Additional Mobile-Only Sections */}
                            <div className="mt-8 border-t border-gray-100 pt-4">
                                <div className="px-4 py-2">
                                    <button onClick={()=>navigate('/revYou/auth')} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-medium rounded-lg">
                                        <UserCircleIcon className="h-5 w-5" />
                                        Sign In
                                    </button>
                                </div>
                                
                                <div className="px-4 mt-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setSearchOpen(true);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default MobileMenu
