'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string,
  desc: string,
  btnText: string
  onBtnClick?: () => void
}

export default function SuccessPopup({ isOpen, onClose, title, desc, btnText, onBtnClick }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            {/* Popup */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-xl shadow-2xl p-8 mx-4 border border-white/20 relative"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <MdClose className="h-5 w-5" />
              </button>

              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="mx-auto w-20 h-20 mb-6"
                >
                  <div className="relative">
                    {/* Shadow/glow effect */}
                    <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl" />
                    <FaCheckCircle className="w-20 h-20 text-green-500 relative z-10" />
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-gray-900 mb-4"
                >
                  {title}
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-8 text-lg"
                >
                  {desc}
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => {
                    if (onBtnClick) {
                      onBtnClick();
                    } else {
                      onClose();
                    }
                  }}
                  className="bg-primary-100 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  {btnText}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
