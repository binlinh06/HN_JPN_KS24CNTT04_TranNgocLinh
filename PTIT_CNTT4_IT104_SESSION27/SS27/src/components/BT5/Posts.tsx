import { Link } from "react-router-dom";
import {posts} from './Data'

export default function Posts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Danh sách bài viết</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 border rounded-lg hover:shadow">
            <Link to={`/blog/posts/${post.id}`} className="text-blue-600 font-semibold text-lg hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
