import { useParams } from "react-router-dom";
import {posts} from './Data'

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
