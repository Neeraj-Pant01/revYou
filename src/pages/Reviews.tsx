import React, { useEffect, useState } from 'react'
import FilterSidebar from '../components/FilterSidebar'
import { FiFilter, FiX } from 'react-icons/fi';
import ReviewCard from '../components/reviews/Review';
import Pagination from '../components/Pagination';

const Reviews:React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        < div className='bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
            <div className='flex'>
                <button
                    className="fixed top-20 right-4 z-50 md:hidden bg-purple-400 text-white p-3 rounded-full shadow-lg"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open filters"
                >
                    <FiFilter size={24} />
                </button>
                <div
                    className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        } md:hidden`}
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-4 border-b border-gray-200">
                            <h2 className="text-lg font-bold text-gray-800">Filters</h2>
                            <button onClick={() => setMobileOpen(false)} className="text-gray-600">
                                <FiX size={24} />
                            </button>
                        </div>
                        <FilterSidebar />
                    </div>
                </div>
                <div className="hidden md:block">
                    <FilterSidebar />
                </div>
                <div className=" w-[100%] p-3 md:p-5 gap-10 flex flex-col border bordedr-[red]">
                    <h1 className='text-gray-600 font-semibold gap-3 md:text-2xl'></h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
                        {
                            Array.from({ length: 18 }).map((_, i) => <ReviewCard key={i} />)
                        }
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Pagination
                    currentPage={2}
                    totalPages={15}
                    onPageChange={(page) => console.log("Go to page:", page)}
                />
            </div>
        </div>
    )
}

export default Reviews
