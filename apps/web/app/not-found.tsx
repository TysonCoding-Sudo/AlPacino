import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-plaster py-28 sm:py-36">
      <div className="container-site text-center">
        <p className="font-construction text-7xl font-semibold uppercase text-stone-900 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-xl font-semibold text-stone-800">
          Page not found
        </h1>
        <p className="mt-3 text-stone-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-stone-700"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}