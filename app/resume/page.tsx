import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Resume - Siby Abin Thomas',
  description: 'Professional resume and background',
}

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
            <h1 className="text-4xl font-bold">Siby Abin Thomas</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Data Engineer | Cloud Computing Specialist
            </p>
            <div className="flex gap-4 text-sm">
              <a href="https://twitter.com/sibyoncloud" className="text-blue-600 dark:text-blue-400 hover:underline">
                Twitter
              </a>
              <a href="https://linkedin.com/in/sibyabin" className="text-blue-600 dark:text-blue-400 hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/sibyabin" className="text-blue-600 dark:text-blue-400 hover:underline">
                GitHub
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-slate-700 dark:text-slate-300">
              Data engineer with extensive experience designing and implementing scalable data
              solutions. Expertise in Apache Spark, cloud platforms (AWS, Azure, GCP), and modern
              data stack tools. Proven track record of building high-performance data pipelines
              and leading technical initiatives in the cloud computing space.
            </p>
          </section>

          {/* Skills */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Core Skills</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Data Technologies</h3>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Apache Spark & PySpark</li>
                  <li>• Apache Airflow</li>
                  <li>• dbt (Data Build Tool)</li>
                  <li>• Databricks</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Cloud Platforms</h3>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Amazon Web Services (AWS)</li>
                  <li>• Microsoft Azure</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Programming</h3>
                <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Python</li>
                  <li>• Scala</li>
                  <li>• SQL</li>
                  <li>• Git & DevOps</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Certifications</h2>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex gap-4">
                <span>📜</span>
                <span>Databricks Certified Associate Developer for Apache Spark</span>
              </li>
              <li className="flex gap-4">
                <span>☁️</span>
                <span>AWS Certifications in progress</span>
              </li>
            </ul>
          </section>

          {/* Call to Action */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              For a detailed resume and portfolio, visit my
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://linkedin.com/in/sibyabin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                LinkedIn Profile
              </a>
              <Link
                href="/about"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors"
              >
                About Page
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
