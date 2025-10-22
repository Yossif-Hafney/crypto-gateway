export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-400">
              Last updated: October 26, 2023
            </p>
          </div>
          <div className="prose-invert  max-w-none">
            <p className="lead">
              This Privacy Policy describes how CoinGate collects, uses, and
              protects your personal information. We are committed to
              safeguarding your privacy and ensuring compliance with applicable
              data protection laws.
            </p>
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white">
                  Information We Collect
                </h2>
                <p>We collect various types of information, including:</p>
                <ul className="space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Such as your name,
                    email address, phone number, and identification documents.
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Including
                    transaction details and payment methods.
                  </li>
                  <li>
                    <strong>Technical Information:</strong> Such as IP address,
                    device information, and browsing activity.
                  </li>
                  <li>
                    <strong>Usage Information:</strong> Including how you
                    interact with our platform and services.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">
                  How We Use Your Information
                </h2>
                <p>We use your information for the following purposes:</p>
                <ul className="space-y-2">
                  <li>To provide and improve our services.</li>
                  <li>To process transactions and manage your account.</li>
                  <li>
                    To communicate with you, including sending updates and
                    notifications.
                  </li>
                  <li>To comply with legal and regulatory requirements.</li>
                  <li>To protect against fraud and ensure security.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">
                  Data Sharing and Disclosure
                </h2>
                <p>We may share your information with:</p>
                <ul className="space-y-2">
                  <li>
                    Service providers who assist us in operating our platform.
                  </li>
                  <li>Financial institutions and payment processors.</li>
                  <li>
                    Regulatory authorities and law enforcement agencies, as
                    required by law.
                  </li>
                  <li>Other users, as necessary to facilitate transactions.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
                <p>
                  We implement robust security measures to protect your
                  information from unauthorized access, use, or disclosure.
                  These measures include encryption, access controls, and
                  regular security audits.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="space-y-2">
                  <li>Access your personal information.</li>
                  <li>Correct inaccuracies in your information.</li>
                  <li>Request deletion of your information.</li>
                  <li>Object to the processing of your information.</li>
                  <li>Withdraw your consent, where applicable.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the updated
                  policy on our website or through other communication channels.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us at:
                  <a
                    className="text-primary hover:underline"
                    href="mailto:support@coingate.com"
                  >
                    support@coingate.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
