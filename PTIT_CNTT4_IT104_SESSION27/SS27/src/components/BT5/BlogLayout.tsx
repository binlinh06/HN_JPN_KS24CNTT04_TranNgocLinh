import { Outlet, Link } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-4">
        <h1 className="text-xl font-bold mb-6">My Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to="/blog/posts" className="block py-2 px-3 hover:bg-purple-700 rounded">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="absolute bottom-4 text-xs">© 2025 My Blog</footer>
      </aside>

      {/* Nội dung */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
}
