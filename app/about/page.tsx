import Background from "@/components/Background"

const people = [
  {
    name: 'WW',
    role: 'Founder / Chief Solution Consultant',
  },
  {
    name: 'YY',
    role: 'Co-Founder / Chief Architect',
  },
  {
    name: 'LL',
    role: 'Co-Founder / Chief Product Specialist',
  },
]

export default function Example() {
  return (
    <div className="py-24 sm:py-32">
      <Background />
      
      <div className="relative isolate overflow-hidden px-6 py-12 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img alt="" src="/logo.svg" className="mx-auto h-16" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Learnmark is a software and Internet technology consulting organization that focuses on Cloud Native, Enterprise Software Architecture, Agile Practices, and Software R&D Management.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Team</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Learnmark</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mt-16 bg-red-50 p-8 rounded-lg">
          <h2 className="text-5xl font-bold tracking-tight text-red-900 text-center">Our Mission</h2>
          <p className="mt-4 text-2xl text-center font-bold leading-8 text-gray-600">
            Make every application easy with Cloud and AI.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {/* describ team of learnmark */}
            Our leadership team has a wealth of experience in software and Internet technology consulting. We are passionate about helping our clients achieve their goals and are committed to delivering high-quality solutions that meet their needs.
          </p>
        </div>
        <div className="mt-16 grid gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <div key={person.name}>
              <p className="my-4 text-6xl text-center font-semibold leading-7 tracking-tight text-gray-900">{person.name}</p>
              <p className="text-base text-center font-semibold leading-6 text-red-900">{person.role}</p>
            </div>
          ))}
        </div>        
      </div>
    </div>
  )
}
