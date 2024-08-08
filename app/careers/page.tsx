import Background from "@/components/Background"

  const stats = [
    { name: 'Roles are hiring', value: '5' },
    { name: 'Locations worldwide', value: '3' },
    { name: 'Work from home', value: 'All time' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  const openRoles = [
    { name: 'Software Engineer', href: '#software-engineer' },
    { name: 'Solutions Consultant', href: '#solutions-consultant' },
    { name: 'Regional Marketing Manager', href: '#regional-marketing-manager' },
    { name: 'Key Account Manager', href: '#key-account-manager' },
    { name: 'Senior Sales Manager', href: '#senior-sales-manager' },
  ]

  const jobDescriptions = [
    {
      title: 'Software Engineer',
      href: 'software-engineer',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Design, develop, and maintain software applications and systems',
        'Collaborate with other team members to ensure that software meets customer needs',
        'Write clean, maintainable code that is scalable and secure',
        'Perform code reviews to ensure that software is of high quality',
        'Identify and address technical debt and other areas for improvement',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        '2+ years of experience in software development',
        'Proficiency in one or more programming languages, such as Java, Python, or JavaScript',
        'Experience with web development frameworks, such as React or Angular',
        'Strong problem-solving and analytical skills',
      ],
    },
    {
      title: 'Solutions Consultant',
      href: 'solutions-consultant',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Work with customers to understand their business needs',
        'Develop solutions that meet customer requirements',
        'Collaborate with sales team to ensure that solutions are aligned with customer needs',
        'Provide technical expertise and guidance to customers',
        'Deliver product demonstrations and presentations to customers',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field',
        '2+ years of experience in solutions consulting or related field',
        'Experience working with customers to understand business needs',
        'Strong problem-solving and analytical skills',
        'Excellent communication and presentation skills',
      ],
    },
    {
      title: 'Regional Marketing Manager',
      href: 'regional-marketing-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Develop and execute marketing strategies to drive growth in your region',
        'Collaborate with sales and product teams to align marketing initiatives with business objectives',
        'Analyze market trends and customer needs to identify opportunities for growth',
        'Manage marketing campaigns and events to generate leads and drive sales',
        'Provide guidance and support to marketing team members',
      ],
      qualifications: [
        'Bachelor’s degree in Marketing or related field',
        '5+ years of experience in marketing',
        'Experience developing and executing marketing strategies',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership skills',
      ],
    },
    {
      title: 'Key Account Manager',
      href: 'key-account-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Manage relationships with key customers to drive growth in your accounts',
        'Collaborate with sales and product teams to ensure that customer needs are met',
        'Develop account plans and strategies to achieve business objectives',
        'Identify opportunities for growth and expansion in your accounts',
        'Provide guidance and support to sales team members',
      ],
      qualifications: [
        'Bachelor’s degree in Business or related field',
        '5+ years of experience in account management',
        'Experience managing relationships with key customers',
        'Strong problem-solving and analytical skills',
        'Excellent communication and negotiation skills',
      ],
    },
    {
      title: 'Senior Sales Manager',
      href: 'senior-sales-manager',
      location: 'Remote',
      employmentType: 'Full-time',
      responsibilities: [
        'Lead sales team to achieve sales objectives',
        'Develop sales strategies to drive growth in your region',
        'Collaborate with marketing and product teams to align sales initiatives with business objectives',
        'Provide guidance and support to sales team members',
        'Analyze sales data and market trends to identify opportunities for growth',
      ],
      qualifications: [
        'Bachelor’s degree in Business or related field',
        '5+ years of experience in sales management',
        'Experience developing and executing sales strategies',
        'Strong problem-solving and analytical skills',
        'Excellent communication and leadership skills',
      ],
    },
  ]
  
  export default function Careers() {
    return (
      <div className="relative isolate overflow-hidden py-24 sm:py-32">
        <Background />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We invite you to embark on an exciting professional journey by working with us, where you’ll have the opportunity to collaborate with a talented and diverse team, contribute to innovative projects, and develop your skills in a dynamic and supportive environment.
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* a hr for split below section */}
          <hr className="mt-16 border-t border-gray-200" />

          {/* below are open positions section */}
          <div className="mx-auto mt-16 max-w-7xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <a id="open-roles">
                Open Roles
              </a>
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We are looking for talented individuals to join our team. If you are passionate about technology and want to work on exciting projects, we would love to hear from you.
            </p>
            <div className="flex flex-wrap mt-6">
            {openRoles.map((role) => (
              <a key={role.name} href={role.href}
              className="mx-2 text-lg font-semibold text-red-800 hover:text-red-700"
              >
                {role.name}
              </a>
            ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            {jobDescriptions.map((job) => (
              <div key={job.title} className="mx-auto mt-16 max-w-7xl">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  <a id={job.href}>
                    {job.title}
                  </a>
                </h3>
                <p className="mt-4 text-lg leading-8 text-gray-600">
                  {job.location} | {job.employmentType}
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900">Responsibilities</h4>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {job.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900">Qualifications</h4>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {job.qualifications.map((qualification) => (
                      <li key={qualification}>{qualification}</li>
                    ))}
                  </ul>
                </div>
              </div>
              ))}
          </div>
          {/* submit resume section */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Submit Your Resume
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              If you are interested in any of the open roles, please submit your resume to <a href="mailto:hr@learnmark.com" className="text-red-800 hover:text-red-700">hr@learnmark.com</a>.
            </p>
          </div>
            
        </div>
      </div>
    )
  }
  