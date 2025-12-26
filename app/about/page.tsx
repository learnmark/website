import Background from "@/components/Background"

const people = [
  {
    name: 'WW',
    role: 'Founder / Chief Solution Consultant',
    bio: 'Expert in Cloud Native architectures and Enterprise Digital Transformation.',
  },
  {
    name: 'YY',
    role: 'Co-Founder / Chief Architect',
    bio: 'Specializes in distributed systems, microservices, and high-performance computing.',
  },
  {
    name: 'LL',
    role: 'Co-Founder / Chief Product Specialist',
    bio: 'Passionate about product strategy, user experience, and agile product management.',
  },
]

const values = [
  { name: 'Innovation', description: 'We constantly push the boundaries of what is possible with technology.' },
  { name: 'Excellence', description: 'We are committed to delivering the highest quality solutions to our clients.' },
  { name: 'Integrity', description: 'We conduct our business with honesty and transparency.' },
  { name: 'Collaboration', description: 'We believe in the power of teamwork and partnership.' },
]

export default function Example() {
  return (
    <div className="relative isolate">
      <Background />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img alt="Learnmark" src="/logo.svg" className="mx-auto h-20" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Learnmark is a software and Internet technology consulting organization that focuses on Cloud Native, Enterprise Software Architecture, Agile Practices, and Software R&D Management.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">The Team</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">Learnmark</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="rounded-2xl bg-primary-50 p-10 sm:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-2xl font-semibold leading-9 text-gray-900">
              Make every application easy with Cloud and AI.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We empower organizations to navigate the complexities of modern technology, enabling them to build scalable, efficient, and intelligent software solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our core values guide everything we do, from how we work with our clients to how we collaborate as a team.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Team Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our leadership team has a wealth of experience in software and Internet technology consulting. We are passionate about helping our clients achieve their goals.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name} className="group">
              <div className="flex items-center gap-x-6">
                <div className="h-16 w-16 flex-none rounded-full bg-primary-100 flex items-center justify-center text-xl font-bold text-primary-700 group-hover:bg-primary-200 transition-colors">
                  {person.name}
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-primary-600">{person.role}</p>
                </div>
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
