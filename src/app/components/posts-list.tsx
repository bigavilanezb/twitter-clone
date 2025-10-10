import PostCard from "@/app/components/post-card";

export function PostLists({ posts }) {
  return (
    <>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {posts?.map((post) => {
          const { id, user, content } = post;

          const {
            user_name: userName,
            name: userFullname,
            avatar_url: avatarUrl,
          } = user;

          return (
            <PostCard
              content={content}
              key={id}
              userName={userName}
              userFullname={userFullname}
              avatarUrl={avatarUrl}
            />
          );
        })}
      </main>
    </>
  );
}
