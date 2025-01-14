export default function BlogPost({ title, content, author }: { title: string; content: string; author: string }) {
  return (
    <article className="border p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{content}</p>
      <p className="text-sm text-gray-500">By {author}</p>
    </article>
  )
}

