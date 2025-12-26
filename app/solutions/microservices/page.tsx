import Background from "@/components/Background"

export default function Microservices() {
  return (
    <div className="py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Microservices Architecture</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Architect scalable and resilient systems with microservices. We guide you through the transition from monolithic to distributed architectures.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Architecture Design</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Design robust microservices patterns for scalability and maintainability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Migration Strategy</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Safe and incremental migration plans from legacy monoliths.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Service Mesh & Observability</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Implement service mesh and comprehensive monitoring for your distributed system.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
