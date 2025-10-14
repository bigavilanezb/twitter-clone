import { Avatar } from "@heroui/react";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers";

export function ComposePost({ userAvatarUrl }: { userAvatarUrl: string }) {
  const addPost = async (formData: FormData) => {
    "use server";
    console.log("Posting...");
  };

  return (
    <form
      action={addPost}
      className="flex flex-row p-3 border-b border-white/20"
    >
      <img
        className="rounded-full w-10 h-10 object-contain mr-4"
        src={userAvatarUrl}
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="post"
          rows={4}
          className="w-full text-xl bg-black placeholder-gray-500 p-2"
          placeholder="¿Qué está pasando?"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-600 text-sm font-bold rounded-full px-5 py-2 self-end"
        >
          Postear
        </button>
      </div>
    </form>
  );
}
