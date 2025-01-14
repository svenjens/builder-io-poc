export default function Footer({ copyright }: { copyright: string }) {
  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <p className="text-center">{copyright}</p>
    </footer>
  )
}

