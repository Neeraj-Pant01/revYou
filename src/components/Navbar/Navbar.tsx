import React, { useEffect, useState, useRef } from 'react';
import { Bars3Icon, UserCircleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navigate = useNavigate();

    return (
        <header
            className={`sticky top-0 z-50 ${isActive
                ? 'bg-white/90 backdrop-blur-md text-gray-800 shadow-sm'
                : 'bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 text-white'
                } transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Left: Logo & Menu */}
                    <div className="flex items-center gap-6">
                        <button
                            className={`rounded-full p-2 ${isActive ? 'text-purple-600 hover:bg-purple-50' : 'text-white hover:bg-white/10'} transition-all`}
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                        
                        <div onClick={()=>navigate('/')}  className={`flex cursor-pointer items-center gap-1 ${isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400' : 'text-white'}`}>
                            <SparklesIcon className={`h-5 w-5 ${isActive ? 'text-yellow-500' : 'text-white'}`} />
                            <span className="text-2xl font-bold tracking-tight">RevYOU</span>
                        </div>
                    </div>

                    {/* Center: Search - Desktop */}
                    <div className="hidden md:flex flex-1 justify-center px-8">
                        <div className={`relative w-full max-w-xl ${isActive ? 'ring-1 ring-gray-200' : 'ring-1 ring-white/20'} rounded-full overflow-hidden transition-all`}>
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <MagnifyingGlassIcon className={`h-5 w-5 ${isActive ? 'text-gray-400' : 'text-white/70'}`} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search reviews..."
                                className={`w-full py-3 pl-12 pr-6 outline-none ${isActive ? 'bg-white placeholder-gray-400 text-gray-600' : 'bg-white/10 placeholder-white/60'} backdrop-blur-sm transition-all`}
                            />
                            {isActive && (
                                <button onClick={()=>navigate(`/reviews/search`)} className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                    <div className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs font-medium rounded-full">
                                        ⌘K
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Search Toggle */}
                    <button 
                        className="md:hidden p-2 rounded-full"
                        onClick={() => setSearchOpen(true)}
                    >
                        <MagnifyingGlassIcon className={`h-6 w-6 ${isActive ? 'text-gray-600' : 'text-white'}`} />
                    </button>

                    {/* Mobile Search Panel */}
                    {searchOpen && (
                        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md md:hidden">
                            <div className="flex items-center h-20 px-4">
                                <button 
                                    className="p-2 mr-2"
                                    onClick={() => setSearchOpen(false)}
                                >
                                    <XMarkIcon className="h-6 w-6 text-gray-600" />
                                </button>
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        placeholder="Search reviews..."
                                        className="w-full py-3 pl-4 pr-12 bg-white text-gray-600 rounded-full outline-none ring-1 ring-gray-200"
                                        autoFocus
                                    />
                                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <div onClick={()=>{
                                            navigate(`/reviews/search`)
                                            setSearchOpen(false)
                                            }}  className="px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-400 text-white text-xs font-medium rounded-full">
                                            Go
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Right: Navigation */}
                    <div className="flex items-center gap-4">
                        <nav className="hidden md:flex items-center gap-6">
                            <a href="#" className={`text-sm font-medium ${isActive ? 'text-gray-600 hover:text-purple-600' : 'text-white/90 hover:text-white'} transition-colors`}>Discover</a>
                            <a href="#" className={`text-sm font-medium ${isActive ? 'text-gray-600 hover:text-purple-600' : 'text-white/90 hover:text-white'} transition-colors`}>Categories</a>
                            <a href="#" className={`text-sm font-medium ${isActive ? 'text-gray-600 hover:text-purple-600' : 'text-white/90 hover:text-white'} transition-colors`}>Pricing</a>
                        </nav>

                        {/* Profile Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                className={`flex items-center gap-2 rounded-full p-1 pr-2 ${isActive ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${isActive ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600' : 'bg-white/10 text-white'}`}>
                                    <UserCircleIcon className="h-6 w-6" />
                                </div>
                                <ChevronDownIcon className={`h-4 w-4 ${isActive ? 'text-gray-600' : 'text-white'}`} />
                            </button>

                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 divide-y divide-gray-100">
                                    <div className="px-4 py-3">
                                        <p className="text-sm font-medium text-gray-900">Signed in as</p>
                                        <p className="text-sm text-purple-600 truncate">user@example.com</p>
                                    </div>
                                    <div className="py-2">
                                        <span onClick={()=>{
                                            navigate(`/review/profile/123`);
                                            setShowDropdown(false);
                                        }} className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <UserCircleIcon className="h-5 w-5 mr-2 text-gray-400" />
                                            My Profile
                                        </span>
                                        <a href="/my-reviews" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <SparklesIcon className="h-5 w-5 mr-2 text-gray-400" />
                                            My Reviews
                                        </a>
                                        <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                            <svg className="h-5 w-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Settings
                                        </a>
                                    </div>
                                    <div className="py-2">
                                        <button
                                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                                            onClick={() => {
                                                // handle logout logic
                                            }}
                                        >
                                            <svg className="h-5 w-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;