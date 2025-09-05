export default function Footer() {
  return (
    <footer className="w-full py-6 border-t text-center text-gray-500 bg-slate-100 fixed bottom-0 left-0 z-50">
      <span>&copy; {new Date().getFullYear()} Product Catalog App. </span>
    </footer>
  );
}
