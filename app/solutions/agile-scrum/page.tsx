import Background from "@/components/Background"

export default function AgileScrum() {
  return (
    <div className="py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Agile & Scrum Consulting</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Accelerate delivery with proven Agile and Scrum methodologies. We help teams adopt agile practices to improve collaboration and product quality.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Agile Transformation</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Guide your organization through a successful agile transformation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Scrum Training</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Training and coaching for Scrum Masters, Product Owners, and Teams.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Process Optimization</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Optimize your development processes for speed and quality.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
