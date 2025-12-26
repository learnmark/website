import Background from "@/components/Background"

export default function AI() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">AI Consulting</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Leverage artificial intelligence to drive business innovation. We help you identify opportunities, build models, and integrate AI into your existing workflows.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Strategy & Advisory</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Define your AI roadmap and identify high-impact use cases.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Custom Model Development</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Build and train custom machine learning models tailored to your data.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">AI Integration</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Seamlessly integrate AI capabilities into your applications and processes.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
