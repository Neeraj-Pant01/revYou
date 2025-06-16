import React, { useState } from "react";
import Button from "../common/Button";
import GradientText from "../common/GradientText";

type DiscussionFormProps = {
    onSubmit: (data: { text: string; stars: number }) => void;
};

const DiscussionForm: React.FC<DiscussionFormProps> = ({ onSubmit }) => {
    const [text, setText] = useState("");
    const [stars, setStars] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text || stars === 0) return;
        onSubmit({ text, stars });
        setText("");
        setStars(0);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white border  w-[100%] border-gray-200 rounded-xl p-6 md:mt-0 shadow-lg mx-auto transition duration-300"
        >
            <GradientText>
                      Share yout thoughts
                      </GradientText>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-4">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <span
                            key={i}
                            className={`cursor-pointer text-2xl transition ${i < stars ? "text-yellow-400" : "text-gray-300"
                                }`}
                            onClick={() => setStars(i + 1)}
                        >
                            ★
                        </span>
                    ))}
            </div>

            {/* Text area */}
            <textarea
                className="w-full bg-gray-50 text-gray-800 placeholder:text-gray-400 border border-gray-300 rounded-lg p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your review here..."
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            {/* Submit */}
            <Button type='submit' variant="gradient">
                Post Review

            </Button>

        </form>
    );
};

export default DiscussionForm;
