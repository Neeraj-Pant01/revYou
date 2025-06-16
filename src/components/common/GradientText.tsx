import React from 'react'

const GradientText: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative z-10 rounded-[0.75rem]">
            <span className="text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400">
                {children}
            </span>
        </div>
    )
}

export default GradientText
