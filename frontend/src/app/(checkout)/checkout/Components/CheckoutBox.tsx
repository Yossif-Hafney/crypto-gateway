import OrderSummary from "./OrderSummery";
import ProgressBar from "./ProgressBar";
import CryptoCoinSelection from "./CryptoCoinSelection";
import ConfirmButton from "./ConfirmButton";
export default function CheckoutBox() {
  return (
    <>
      <main className="flex flex-1 justify-center">
        <div className="w-full max-w-lg px-4 sm:px-6 lg:px-8">
          <div className="mt-5">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Checkout
            </h1>
            <ProgressBar />
            {/* Order summary */}
            <div className="mt-8 space-y-8">
              <OrderSummary />
              <CryptoCoinSelection />
              <ConfirmButton />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
