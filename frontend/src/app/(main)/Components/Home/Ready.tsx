import BigButton from "./BigButton";
import Link from "next/link";

export default function Ready() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Ready to connect merchants?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
          Experience the future of crypto payments today.
        </p>
        <div className="mt-8">
          <BigButton>
            <Link href="/signup">Connect Merchants</Link>
          </BigButton>{" "}
        </div>
      </div>
    </section>
  );
}
