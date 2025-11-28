import blogData, { blogImages } from "../mockData/blogData";

export const BlogTitle = ({ title }) => {
  const safeTitle = title.replace(/<br\s*\/?>/g, '\n');
  return (
    <h2 className="blog-header-title">
      {safeTitle.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < safeTitle.split('\n').length - 1 && <br />}
        </span>
      ))}
    </h2>
  );
};
export const BlogImage = ({ image: { alt, src }, isMain = false }) => (
  <img 
    src={src} 
    alt={alt} 
    className={isMain ? "main-card-img" : "blog-card-img"}
  />
);

export const BlogDate = ({ date, isMain = false }) => (
  <p className={isMain ? "main-card-blog-date" : "blog-date"}>{date}</p>
);

export const BlogPostTitle = ({ title, isMain = false }) => (
  <p className={isMain ? "main-card-blog-title" : "blog-title"}>{title}</p>
);

export const BlogReadMore = ({ isMain = false }) => (
  <a href="#!" className={`blog-read-more ${isMain ? 'main-read-more' : ''}`}>
    Читать полную статью
  </a>
);

export const MainBlogCard = ({ post }) => (
  <div className="blog-card main-card">
    <BlogImage image={blogImages[post.id]} isMain={true} />
    <div className="main-card-content">
      <BlogDate date={post.date} isMain={true} />
      <BlogPostTitle title={post.title} isMain={true} />
      <BlogReadMore isMain={true} />
    </div>
  </div>
);

export const RegularBlogCard = ({ post }) => (
  <div className="blog-card">
    <BlogImage image={blogImages[post.id]} />
    <div className="blog-content">
      <BlogDate date={post.date} />
      <BlogPostTitle title={post.title} />
      <BlogReadMore />
    </div>
  </div>
);

export const BlogCard = ({ post }) => {
  if (post.isMain) {
    return <MainBlogCard post={post} />;
  }
  return <RegularBlogCard post={post} />;
};

export const BlogGrid = ({ posts }) => {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const Blog = () => {
  const { title, posts } = blogData;

  return (
    <section className="blog section">
      <div className="blog-header">
        <BlogTitle title={title} />
      </div>
      <BlogGrid posts={posts} />
    </section>
  );
};

export default Blog;