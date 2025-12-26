import Background from "@/components/Background"

export default function DevOps() {
  return (
    <div className="py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">DevOps Engineering</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline development and operations for faster deployment. Automate your infrastructure and CI/CD pipelines.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">CI/CD Automation</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Build robust continuous integration and deployment pipelines.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Infrastructure as Code</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Manage your infrastructure using code (Terraform, Ansible, etc.).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Cloud Migration</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Seamlessly migrate your applications to the cloud.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
