import React, { useEffect, useState } from 'react'
import SingleREvCard from '../components/singleReview/ReviewCard'
import DiscussionForm from '../components/singleReview/DiscussionForm'
import DiscussionComment from '../components/singleReview/DiscussionComment';
import GradientText from '../components/common/GradientText';

const SingleProductPage = () => {
  const [comments, setComments] = useState([
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharp Absolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharpAbsolutely agree! The lens is super sharp",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    },
    {
      name: "Priya Sharma",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s",
      text: "Absolutely agree! The lens is super sharp.",
      stars: 4,
      createdAt: "2025-05-28"
    }
  ]);

  const handleNewComment = (data: { text: string; stars: number }) => {
    setComments((prev) => [
      ...prev,
      {
        name: "You",
        avatar: "/users/default.png",
        text: data.text,
        stars: data.stars,
        createdAt: new Date().toISOString()
      }
    ]);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className='md:px-10 px-1 bg-gradient-to-br py-3 from-indigo-50 via-purple-50 to-pink-50'>
      <SingleREvCard
        user={{ name: "Jane Doe", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s" }}
        title="Amazing Product!"
        description="This product completely changed my workflow. Highly recommended!"
        stars={5}
        images={[
          "https://media.istockphoto.com/id/860688956/photo/running-female-with-mobile-phone-connected-to-a-smart-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=8710Peitv_OOb8bVfKt6aF8ubFGOsKCG8jqCrq81AzU=",
          "https://media.istockphoto.com/id/1169712167/photo/health-care-technology-concept-vital-sign-sensing.webp?a=1&b=1&s=612x612&w=0&k=20&c=jsAkR_96BY3iER1PUpEWwwagZCpAY5NjU_XyM0fZTgs=",
          "https://media.istockphoto.com/id/1386831373/photo/fit-woman-wiping-sweat-with-towel-while-taking-break-at-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=8LkRvhMjvT36uWEIwg7XHbLgwpel5_ljO_x3X_kiLBA="
        ]}
        createdAt="2025-05-28"
      />
      <div className="mt-10  mx-auto space-y-6">
        {/* <span className='text-center md:text-left'>
          <GradientText>
            Discussion
          </GradientText>
        </span> */}
        <div className="flex flex-col-reverse md:flex-row md:gap-10 items-start">
          {/* Comments */}
          <div id='discussion' className="flex flex-1 gap-2 md:gap-3 flex-col">
            {comments.map((c, i) => (
              <DiscussionComment key={i} {...c} />
            ))}
          </div>

          {/* Form */}
          <div className="flex mb-3 md:mb-0 mx-auto flex-1 flex-col">
            <DiscussionForm onSubmit={handleNewComment} />

            <div className="md:flex hidden">
              advertisemnt
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SingleProductPage
