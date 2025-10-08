import { createServerComponentClient} from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { AuthButtonServer } from '@/app/components/auth-buton-server';
import { redirect } from 'next/navigation';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })
  const {data: {session} } = await supabase.auth.getSession()

  if (session == null) {
    redirect('/login')
  }

  const {data: posts} = await supabase
  .from('posts')
  .select('*, auth.users(email)')

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <AuthButtonServer/>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
        <pre>
          {
            JSON.stringify(posts, null, 2)
          }
        </pre>
      </main>
    </div>
  );
}
