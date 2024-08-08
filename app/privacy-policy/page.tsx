import Background from "@/components/Background";

export default function Example() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Background />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="text-center mx-auto max-w-2xl">
        <h1 className="mt-24 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Privacy Statement
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-800">
          Effective Date: Augest 7th, 2024
        </p>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* table of below content  */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Table of Contents
          </h2>
          <ul className="mt-6 text-lg leading-8 text-gray-800 list-disc list-inside">
            <li>
              <a href="#introduction">Introduction</a>
            </li>
            <li>
              <a href="#information-we-collect">Information We Collect</a>
            </li>
            <li>
              <a href="#how-we-use-your-information">
                How We Use Your Information
              </a>
            </li>
            <li>
              <a href="#information-sharing">Information Sharing</a>
            </li>
            <li>
              <a href="#security">Security</a>
            </li>
            <li>
              <a href="#changes-to-this-privacy-statement">
                Changes to this Privacy Statement
              </a>
            </li>
            <li>
              <a href="#contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="mx-auto">
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="introduction">Introduction</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark is committed to protecting your privacy. This Privacy
            Statement describes Learnmark‘s privacy practices and how we treat
            the personal information that we collect from you when you use our
            products and services, including our website. This Privacy Statement
            applies to all of the services offered by Learnmark, including our
            website, but excludes services that have separate privacy statements
            that do not incorporate this Privacy Statement.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="information-we-collect">Information We Collect</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark collects information from you when you use our products
            and services, including our website. This information may include:
          </p>
          <ul className="mt-4 text-lg leading-8 text-gray-800 list-disc list-inside">
            <li>Your name, email address, and other contact information</li>
            <li>Information about your use of our products and services</li>
            <li>
              Information about your device, such as IP address, browser type,
              and operating system
            </li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="how-we-use-your-information">How We Use Your Information</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark uses the information we collect to provide, maintain,
            protect, and improve our products and services, and to protect
            Learnmark and our users. We may also use this information to provide
            you with information about our products and services, and to
            communicate with you.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="information-sharing">Information Sharing</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark does not sell, rent, or share your personal information
            with third parties, except as described in this Privacy Statement.
            We may share your personal information with third parties in the
            following circumstances:
          </p>
          <ul className="mt-4 text-lg leading-8 text-gray-800 list-disc list-inside">
            <li>With your consent</li>
            <li>To comply with legal requirements</li>
            <li>To protect Learnmark and our users</li>
          </ul>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="security">Security</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark takes the security of your personal information seriously.
            We use industry-standard security measures to protect your personal
            information from unauthorized access, disclosure, alteration, and
            destruction.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="changes-to-this-privacy-statement">
              Changes to this Privacy Statement
            </a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Learnmark may update this Privacy Statement from time to time. We
            will notify you of any changes by posting the new Privacy Statement
            on our website. You are advised to review this Privacy Statement
            periodically for any changes.
          </p>
          <h2 className="mt-12 text-2xl font-bold text-gray-900">
            <a id="contact-us">Contact Us</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            If you have any questions about this Privacy Statement, please
            contact us at
            <a href="mailto:info@learnmark.com" className="ml-2 text-blue-600">
              info@learnmark.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
