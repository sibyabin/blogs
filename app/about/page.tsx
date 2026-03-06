import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
/* eslint-disable react/no-unescaped-entities */

export const metadata = {
  title: 'About - Learning Recipes',
  description: 'Senior Data Engineer building scalable data platforms on GCP, AWS, and Databricks',
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container py-12">
        <article className="max-w-2xl mx-auto space-y-8">
          <header className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
            <h1 className="text-4xl font-bold">About Me</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sharing deep data engineering expertise and insights
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2>Hello! 👋</h2>
              <p>
                I'm <strong>Siby Abin Thomas</strong>, a Senior Data Engineer with extensive experience designing, building, and operating scalable, high-performance, and cost-efficient cloud-native data platforms.
              </p>
              <p>
                Currently working on Google Cloud data platforms using BigQuery, Dataform, and Cloud Run, with a strong focus on analytics engineering and production-grade data pipelines that solve real customer and business problems at scale.
              </p>
            </section>

            <section>
              <h2>My Journey</h2>
              <p>
                Throughout my career, I've worked with various technologies and frameworks building scalable ETL and data lake architectures using Apache Spark, Apache Airflow, Python, and SQL. My expertise spans:
              </p>
              <ul>
                <li><strong>Google Cloud Platform:</strong> BigQuery, Dataform, Cloud Run, Cloud Storage</li>
                <li><strong>AWS Ecosystem:</strong> S3, EMR, Glue, Redshift, Athena, Lambda</li>
                <li><strong>Data Orchestration:</strong> Apache Airflow, Spark, Databricks</li>
                <li><strong>Analytics Engineering:</strong> dbt, Delta Lake, SQL modeling</li>
                <li><strong>Platform Engineering:</strong> Terraform, Docker, CI/CD, GitHub Actions</li>
              </ul>
              <p>
                I am detail-oriented and proactive about taking ownership of complex issues, delivering reliable data systems that support critical analytics and reporting for enterprises in banking, fintech, and loyalty analytics.
              </p>
            </section>

            <section>
              <h2>Expertise</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Google Cloud</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ BigQuery (Analytics, Data Warehouse)</li>
                    <li>✓ Dataform (Analytics Engineering)</li>
                    <li>✓ Cloud Run (Containerized Pipelines)</li>
                    <li>✓ Cloud Storage & Data Lake</li>
                    <li>✓ Pub/Sub & Event Streaming</li>
                    <li>✓ Cloud Composer & Orchestration</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">AWS & Data Platforms</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ EMR, S3, Glue, Redshift, Athena</li>
                    <li>✓ Lambda & Event-Driven Architecture</li>
                    <li>✓ Apache Spark & PySpark</li>
                    <li>✓ Apache Airflow (DAG Orchestration)</li>
                    <li>✓ Databricks (Delta Lake, MLOps)</li>
                    <li>✓ Data Quality & Governance</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Programming & SQL</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ Python & PySpark</li>
                    <li>✓ SQL & Query Optimization</li>
                    <li>✓ Scala for Big Data</li>
                    <li>✓ Bash & Shell Scripting</li>
                    <li>✓ Data Transformation & Modeling</li>
                    <li>✓ Testing & Production Code Quality</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Tools & Technologies</h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>✓ dbt (Data Build Tool)</li>
                    <li>✓ Terraform & Infrastructure as Code</li>
                    <li>✓ Docker & Containerization</li>
                    <li>✓ GitHub Actions & CI/CD</li>
                    <li>✓ Apache Kafka (Streaming)</li>
                    <li>✓ Great Expectations (Data Quality)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2>This Blog</h2>
              <p>
                <em>Learning Recipes</em> covers practical topics in:
              </p>
              <ul>
                <li><strong>Data Engineering</strong> - Building robust data pipelines and architectures</li>
                <li><strong>Cloud Computing</strong> - Leveraging cloud platforms effectively</li>
                <li><strong>Development</strong> - Programming best practices and tools</li>
                <li><strong>DevOps</strong> - Containerization, orchestration, and infrastructure</li>
              </ul>
              <p>
                Each article is designed to be practical and actionable, with real-world examples
                and insights from my professional experience.
              </p>
            </section>

            <section>
              <h2>Let's Connect</h2>
              <p>
                I'm always interested in discussing data engineering, cloud architecture, and
                technology trends. Feel free to reach out to me on:
              </p>
              <div className="flex gap-4 not-prose">
                <a
                  href="https://twitter.com/sibyoncloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.756 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/in/sibyabin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/sibyabin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.468 2.91 1.121.092-.879.35-1.479.636-1.82-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.195 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Ready to dive deeper into data engineering and cloud computing?
            </p>
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Explore the Blog →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
