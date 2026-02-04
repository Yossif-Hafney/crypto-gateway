export default function TermsPage() {
  return (
    <main className="flex-grow">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Last updated: October 26, 2023
            </p>
          </div>
          <div className=" prose-slate prose-invert max-w-none space-y-6 text-slate-300">
            <p className="lead">
              Welcome to HYGate, a platform for buying, selling, and managing
              digital currencies. By accessing or using our services, you agree
              to be bound by these Terms and Conditions. Please read them
              carefully.
            </p>
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-slate-100">
                  1. User Responsibilities
                </h2>
                <p>
                  As a user of HYGate, you are responsible for maintaining the
                  confidentiality of your account information, including your
                  username and password. You agree to notify us immediately of
                  any unauthorized use of your account or any other breach of
                  security. You are also responsible for all activities that
                  occur under your account.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100">
                  2. Disclaimers
                </h2>
                <p>
                  HYGate provides its services on an &#39;as is&#39; and &#39;as
                  available&#39; basis. We make no representations or warranties
                  of any kind, express or implied, as to the operation of our
                  services or the information, content, materials, or products
                  included on our platform. You expressly agree that your use of
                  our services is at your sole risk.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100">
                  3. Terms of Service
                </h2>
                <p>
                  HYGate reserves the right to modify or terminate its services
                  at any time, for any reason, without notice. We may also
                  change these Terms and Conditions from time to time. Your
                  continued use of our services after any such changes
                  constitutes your acceptance of the new Terms and Conditions.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100">
                  4. Governing Law
                </h2>
                <p>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of the jurisdiction in which
                  HYGate operates, without regard to its conflict of law
                  provisions.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-slate-100">
                  5. Contact Us
                </h2>
                <p>
                  If you have any questions about these Terms and Conditions,
                  please contact us at
                  <a
                    className="text-primary hover:underline"
                    href="mailto:support@HYGate.com"
                  >
                    support@HYGate.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
