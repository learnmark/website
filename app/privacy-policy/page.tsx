import Background from "@/components/Background"

export default function Example() {
    return (
<div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <Background />
            <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            
          </div>
          <div className="text-center mx-auto max-w-2xl">
            <h1 className="mt-24 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Privacy Statement</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
            Effective Date: Augest 7th, 2024
            </p>
          </div>
        </div>
    )
  }
  