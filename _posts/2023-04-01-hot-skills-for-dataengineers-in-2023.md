---
title: "Hot skills in 2023 that will help you land your dream data engineering job"
excerpt: "This post discusses about some key skills/technolgy that are used widely in the data engineering landscape. Your dream employment as a data engineer will be within reach with these skills."
categories:
  - dataengineering
  - tech
tags:
  - dataengineering
  - apache spark
  - databricks
  - python
  - spark
  - Airflow
  - Snowflake
  - terraform
  - github-actions
  - jenkins
  - dbt
  - AWS
  - Bigdata
  - Data architecture
  - Cloud computing
  - Apache Kafka
  - Data modeling
  - ETL (Extract, Transform, Load)
  - data pipelines
  - distributed systems
  - Parquet
  - Avro
  - VSCode
  - Intellij IDEA
  - DataGrip
  - PyCharm
  - SQL (Structured Query Language)
  - Hadoop
  - Spark
  - Python programming
  - DevOps
  - workflow

last_modified_at: 2023-04-01T12:32:16-05:00
---
This post discusses about some key skills/technolgy that are used widely in the data engineering landscape. Your dream employment as a data engineer will be within reach with these skills.


![image-center]({{ site.url }}{{ site.baseurl }}/assets/images/dataengineering-skillsets.jpg){: .align-center}

## SQL 

SQL (Structured Query Language) is considered the bread and butter of a data engineer. It is a fundamental tool for managing and transforming data and then storing it in databases or datalakes for end user consumption. It is also a highly portable language that is widely used across industries and platforms, making it a versatile and indispensable tool for data engineers, providing the foundation for many of the tasks they perform on their day to day job.
{: .text-justify}

## Programming Language

Majority of the data engineering projects use Scala, Python or Java.Expertise in one of these programming language is required to excel in the role of a data engineer. 

## Databases

Knowledge of working with different databases (either Relational or NoSQL) is required for the job of a data engineer.The leading databases in this era of cloud computing are;
1. Snowflake
2. AWS Redshift
3. Google BigQuery

If you are a beginner who is looking to start with a database, it is recommended to start with PostgreSQL which is one of the robust opensource relational database.

> Do you know that one of the top indian trading platform Zerodha uses PostgreSQL as their database system? This is a testament to PostresSQL's robustness and suitability for using in high volume transactional systems usecases.

## Cloud experience

Experience in one of the Cloud Platform is required these days to survive in the data engineering industry.
The major cloud players are 
1. Amazon Web Services (AWS)
2. Google Cloud (GCP)
3. Azure


## Distributed processing frameworks

**Apache Spark:** An open-source big data processing engine that provides a unified analytics engine for large-scale data processing. To understand more about Spark , please refer to my previous blog
[Beginners guide to Apache Spark, a lightning-fast unified analytics engine]({{site.baseurl}}/learning/apache-spark/beginners-guide-to-apachespark-lightning-fast-unified-engine)

**Flume** is a distributed system for efficiently collecting, aggregating, and moving large amounts of data from various sources into Hadoop or other big data platforms. It is designed to handle high-volume, high-throughput data streams from sources such as web servers, social media platforms, and sensor networks.

Usage of these can be varied based on the usecases, it is also a possible combination that Flume and Spark can be used together in a big data pipeline, where Flume is used for data collection and transport, and Spark is used for processing and analytics.

## Scripting 

Experience in a scripting language such as bash , powershell is essential to automate your data engineering workflows. While powershell is used with the Microsoft ecosystem, bash scripting is the best to start with to get familiarized.Packages like awk, sed, grep, find etc will help you great time on your day to day works.

## Version Control

Any software engineer should be familiar with version controlling of the code and the best practises in the development life cycle.
**Git** is a distributed version control system that is widely used for software development projects. It allows developers to track changes to their codebase over time, collaborate with others, and easily manage multiple versions of their code.

**Bitbucket** is a powerful and flexible platform for version control and software development collaboration from Atlassian.It supports both Git and Mercurial version control systems.

Regardless of the service used for version controlling , one should be familiar with the concepts of feature branches , committing the changes , resolving conflicts in code , PR's , tagging and creating releases with semantic versioning.

## Orchestration tools

Knowledge of an orchestation tool will be required to orchestrate your data pipelines. **Apache Airflow** is one of the best orchestration tool widely used in the industry. Airflow uses Python as its programming language and allows developers to define their workflows as code.

## Container Technologies

Experience in container technologies will help you to ship your code package to run in isolated containers and scale as much you need.

**Docker** is a containerization platform that allows developers to package their applications and dependencies into containers, which can be easily deployed and run on any system that supports Docker.

**Kubernetes** is a container orchestration platform that allows users to manage and deploy Docker containers at scale.

## Infrastructure Automation
Knowing platform automation technologies will give you an edge as the industry is moving towards data engineers performing the data platform automation for their projects.

**Terraform:** An open-source infrastructure as code tool that is widely used in the industry. It allows you to define and manage cloud infrastructure as code using a declarative configuration language.

**Pulumi:** An infrastructure as code tool that allows developers to create, deploy, and manage cloud infrastructure using familiar programming languages.


## CI/CD

There are many prominent CI/CD tools used in the industry. Having experience in working with one of them is enough to understand the concept and help you easily pick up any other tools.

**Jenkins:** A widely used open-source automation server that supports building, testing, and deploying software.

**GitHub Actions** is a powerful CI/CD tool that provides developers with a flexible and customizable way to automate their software development workflows. It is easy to setup github actions on a repository and it is  highly scalable and can handle workflows for projects of any size.

Various other prominent CI/CD tools are **Circle CI** , **GitLab CI/CD**, **Team City**. 

## Storage formats

Expertise in one of these formats will be an added advantage

**Parquet** is a columnar storage format that is designed to be highly efficient for data processing and analysis. It is optimized for use with distributed data processing frameworks like Apache Spark and provides features such as compression, column-level predicate pushdown, and schema evolution.

**Avro** is a data serialization system that provides a compact binary format for transmitting data over networks and supports both rich data structures and dynamic typing. It is commonly used in Hadoop and other big data platforms and provides features such as schema evolution, schema resolution, and compatibility with multiple programming languages.

**ORC** is a columnar file format for storing structured data that provides high compression and fast performance for data processing in Hadoop and other big data platforms.

## Configurations: JSON/YAML

JSON and YAML are two formats that are commonly used in dataengineering projects/frameworks to store configurations.
{: .text-left}

## IDE's and Terminals

**VSCode** is a free source-code editor developed by Microsoft and used by a large developer community.
{: .text-justify}

**PyCharm/IntelliJ IDEA/DataGrip:** These tools are offered By Jetbrains. 

**PyCharm** is a feature rich IDE that can be used for Python development.

**IntelliJ IDEA** is mainly used for Java and Scala development. DataGrip is a multi-engine database environment with a unified environment that help connects to various database technologies. It also includes powerful features such as code completion, code generation, refactoring, and version control integration
{: .text-justify}

**ZSH and OhMyZSH :** Developers spent their majority of time in terminals. ZSH and OhMyZSH can significantly boost your productivity while working with terminals
{: .text-justify}

## Data Build Tool (DBT)

DBT is an open-source tool that enables analysts and data engineers to transform, test, and manage data using SQL. It helps teams manage their data transformation pipeline in a version-controlled environment with the ability to test and deploy changes.
{: .text-justify} 

DBT works by reading SQL code from files and executing them in a specific order defined by the DAG (Directed Acyclic Graph) of dependencies. This ensures that the data transformation process is reproducible and auditable. It supports various cloud data warehouses, such as Snowflake, BigQuery, Redshift, and others. It can be used alongside other tools in the modern data stack, such as Apache Airflow
{: .text-justify}

## Apache Kafka

Apache Kafka is an open-source distributed streaming platform that is designed to handle large-scale real-time data streams. It was originally developed by LinkedIn and is now maintained by the Apache Software Foundation.It is commonly used in big data environments, where it is used to stream and process large volumes of data in real-time.

## BI Tools

In some organizations the roles of data engineer and BI professional is bit overlapped. The distinction seems to be fading away with organizations creating roles such as Analytics engineer who does kind of data trnasformation and analytics on data.

Familiarity with one of the BI tool will be an added advantage in search of your data engineering jobs. Below are some widely used tools
  * Tableau
  * Power BI
  * Looker
  * Apache Superset


The technologies covered in this article are those that have gained more traction; however, this is not the complete list of tools used by the data engineering community.

Voila, you've reached to the end of this post. Keep watching this space for more posts on data engineering!
Until the next post, thanks for reading.

Stay motivated.


---