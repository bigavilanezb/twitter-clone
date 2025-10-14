import {ComposePostTextArea} from '@/app/components/compose-post-textarea';
import {ComposePostButton} from '@/app/components/compose-post-button';
import { addPost } from '../actions/add-post-action';

export function ComposePost({ 
  userAvatarUrl 
}: { 
  userAvatarUrl: string 
}) {

  return (
    <form action={addPost}
      className="flex flex-row p-3 border-b border-white/20"
    >
      <img
        className="rounded-full w-10 h-10 object-contain mr-4"
        src={userAvatarUrl}
      />
      <div className="flex flex-1 flex-col gap-y-4">
        <ComposePostTextArea/>
        
        <ComposePostButton/>
      </div>
    </form>
  );
}
