import Image from "next/image";
import BigButton from "./BigButton";
import Link from "next/link";

export default function LandingSection() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40 cursor-default">
      <div className="absolute inset-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQWvm2As30W2EEm4m9m9fdS8l84bdpDZ7YeT9Bqq8FyyKw9wXhbG5iTsLz-D2W-sLCwd9vM0vndopMHRW_w8SzOiDKh-beE6bvayiG1dAeVY_8Shim-X34e7rEYhJvJstSQzNWFk7BZxqmLiCtabAHWnZo1xQleROtcgTnaf7MOsfp6DRg8tOITrtXuZPZI07Cv2CxLb79Z7tCfEodx7QyGtnXijQ2Mh3EiP6rs_Y-alHpUiR81_z39fPnMMBRKCTDPa6SfwvtiN8"
          alt="Crypto Landing Background"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101622b3] via-[#101622e6] to-[#101622ff]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
          The Seamless Bridge for Your Crypto Payments
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          CoinGate connects you with merchants, enabling smooth and secure
          crypto transactions. We don&apos;t buy, sell, or hold your crypto—we
          just make payments happen.
        </p>
        <div className="mt-10">
          <BigButton>
            <Link href="/signup">Connect Merchants</Link>
          </BigButton>
        </div>
      </div>
    </section>
  );
}
