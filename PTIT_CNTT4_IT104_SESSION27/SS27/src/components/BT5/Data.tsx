interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content:
      "React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. " +
      "Nó cho phép bạn tạo các component có thể tái sử dụng, dễ bảo trì và mở rộng. " +
      "Với JSX và Virtual DOM, React giúp tối ưu hiệu suất và đơn giản hóa quá trình phát triển. " +
      "Trong bài viết này, bạn sẽ học cách cài đặt và tạo một dự án React đầu tiên."
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp viết CSS nhanh và tiện lợi...",
    content:
      "TailwindCSS là một framework CSS tiện ích-first giúp bạn xây dựng giao diện nhanh chóng. " +
      "Thay vì viết CSS thủ công, bạn chỉ cần sử dụng các class có sẵn. " +
      "Điều này giúp code rõ ràng, dễ đọc và dễ bảo trì. " +
      "Trong bài viết này, chúng ta sẽ tìm hiểu cách tích hợp TailwindCSS vào dự án React."
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
    content:
      "React Router DOM là thư viện giúp điều hướng trong ứng dụng React. " +
      "Nó cho phép bạn xây dựng ứng dụng nhiều trang (multi-page) nhưng vẫn giữ trải nghiệm SPA (Single Page Application). " +
      "Bạn có thể tạo route, nested route và truyền tham số qua URL. " +
      "Bài viết này sẽ hướng dẫn cách cấu hình và sử dụng React Router cơ bản."
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
    content:
      "Redux là thư viện quản lý state tập trung phổ biến trong các ứng dụng React. " +
      "Nó giúp lưu trữ và quản lý state toàn cục, tránh việc truyền props qua nhiều component. " +
      "Redux bao gồm ba phần chính: store, actions và reducers. " +
      "Trong bài viết này, bạn sẽ học cách tích hợp Redux vào dự án React của mình."
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
    content:
      "Hooks được giới thiệu từ React 16.8, cho phép bạn dùng state và lifecycle trong function component. " +
      "Các hook phổ biến bao gồm useState, useEffect, useContext và custom hooks. " +
      "Chúng giúp code ngắn gọn, dễ tái sử dụng và tách logic rõ ràng. " +
      "Bài viết này sẽ đi qua những hook quan trọng nhất và ví dụ minh họa."
  }
];

