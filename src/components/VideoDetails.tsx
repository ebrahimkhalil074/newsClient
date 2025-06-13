"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";
import { HeartFilledIcon } from "./icons";
import { FaMessage } from "react-icons/fa6";
import { usePostLikes } from "../hooks/news.hook";
import { getAnonymousUserId } from "../utills/anonymousUser";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Textarea } from "@heroui/input";
import { useCreatedComment } from "../hooks/comment.hook";

import Link from "next/link";

const VideoDetails = ({ data, allVideos }: { data: any; allVideos: any[] }) => {
  const [active, setActive] = useState("সর্বশেষ");
  const [currentUrl, setCurrentUrl] = useState("");

  const anonymousId = getAnonymousUserId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: createLike } = usePostLikes();
  const { mutate: createComment } = useCreatedComment();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleLike = (videoId: string) => {
    const likeData = {
      newsId: videoId,
      anonymousId,
      type: "video",
    };
    createLike(likeData);
  };

  const onSubmit: SubmitHandler<FieldValues> = (formData) => {
    const commentData = {
      content: formData.content,
      newsId: data.id,
      anonymousId,
      type: "video",
    };
    createComment(commentData);
    reset();
  };

  const filteredData =
    active === "সর্বশেষ"
      ? [...allVideos].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      : [...allVideos];

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* 🎬 Main Content */}
      <div className="col-span-12 lg:col-span-8 space-y-4">
        <div>
          <p className="text-sm text-gray-500">{data?.category?.name}</p>
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <p className="text-sm text-gray-500">
            By {data?.author?.name} | {new Date(data?.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="w-full aspect-video rounded-md overflow-hidden">
          <iframe
          title={data.title}
            src={data?.videoUrl}
           
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-800">
            {data?.description}
          </p>
        </div>

        {/* Like / Share */}
        <div className="flex items-center gap-4 mt-4">
          <Button
            onPress={() => handleLike(data.id)}
            className="flex items-center gap-1"
          >
            <HeartFilledIcon className="w-5 h-5" /> {data?.likes?.length}
          </Button>

          <div className="flex gap-2 ml-auto">
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={currentUrl}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={currentUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>

        {/* 💬 Comment Form */}
        <div className="mt-6 border-t pt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-4 w-full max-w-2xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <FaMessage className="w-6 h-6 text-blue-600" /> মন্তব্য
            </h2>

            <Textarea
              {...register("content", { required: true })}
              placeholder="আপনার মন্তব্য লিখুন..."
              className="w-full text-base"
              rows={4}
            />
            {errors.content && (
              <span className="text-red-500 text-sm">মন্তব্য লিখতে হবে</span>
            )}

            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg"
            >
              মন্তব্য করুন
            </Button>
          </form>

          {/* 🧾 Comment List */}
          <div className="mt-4 space-y-3">
            {data?.comments?.map((comment: any, i: number) => (
              <div key={i} className="border p-3 rounded-md bg-gray-50">
                <p className="text-gray-700">{comment?.content}</p>
                <p className="text-xs text-gray-400">
                  {new Date(comment?.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👉 Sidebar */}
      <div className="col-span-12 lg:col-span-4 space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {["সর্বশেষ", "জনপ্রিয়"].map((tab) => (
            <Button
              key={tab}
              className={`w-full ${
                active === tab
                  ? "bg-red-500 text-white"
                  : "bg-white text-black border"
              }`}
              onPress={() => setActive(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredData.slice(0, 4).map((item) => (
           <Link href={`${item.id}`}  key={item.id}>
            <div
              className="border p-3 rounded hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-800 text-sm">
                {item.title}
              </h3>
            </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
