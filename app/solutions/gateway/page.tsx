import Background from "@/components/Background"

export default function Gateway() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">API Gateway Solutions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Secure and manage your API traffic efficiently. Centralize authentication, rate limiting, and routing for your microservices.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Security & Auth</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Centralized authentication and authorization policies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Traffic Management</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Advanced rate limiting, load balancing, and traffic routing.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">API Lifecycle Management</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Manage your APIs from creation to retirement.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
