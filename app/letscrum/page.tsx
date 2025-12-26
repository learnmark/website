import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ChartBarIcon, UserGroupIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/20/solid'
import Background from "@/components/Background"

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Background />
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-600">Project Management</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">LetScrum</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                A lightweight, cloud-native Agile & Scrum project management system designed to help teams collaborate effectively and deliver value faster.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="LetScrum Dashboard"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                LetScrum simplifies the complexities of Agile project management. Whether you are a small startup or a large enterprise, our tool adapts to your workflow, providing visibility and control over your sprints, backlogs, and releases.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Sprint Planning.</strong> Easily organize your backlog, estimate tasks, and plan sprints with intuitive drag-and-drop interfaces.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Team Collaboration.</strong> Foster better communication with built-in commenting, mentions, and real-time updates.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Analytics & Insights.</strong> Track progress with automatic burndown charts, velocity tracking, and sprint reports.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Built on modern cloud-native architecture, LetScrum ensures high availability, security, and performance. Say goodbye to clunky, slow project management tools and embrace a solution that works as fast as your team does.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Open Source & Enterprise Ready</h2>
              <p className="mt-6">
                We believe in the power of open source. LetScrum offers a community edition for small teams and developers, alongside an enterprise edition with advanced security, compliance, and support features. Join our community on GitHub or contact us for enterprise solutions.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/letscrum"
                  target="_blank"
                  className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold !text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900 transition-all duration-300"
                >
                  View on GitHub
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-800">
                  Contact Sales <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
