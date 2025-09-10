// Portfolio data for Sebastian Utoiu's website

export const skills = [
  { category: "Cloud Platforms", items: ["Azure", "Cloudflare"] },
  { category: "Database Management", items: ["SQL", "PostgreSQL", "MySQL", "Oracle Database"] },
  { category: "Programming Languages", items: ["Typescript", "Python", "Astro", "Kotlin"] },
  { category: "DevOps & CI/CD", items: ["GitHub Actions", "Azure DevOps"] },
  { category: "Monitoring & Observability", items: ["Azure Monitor"] },
  { category: "Development Tools", items: ["VS Code", "IntelliJ IDEA", "Postman", "Docker", "GitHub"] }
];

export const certifications = [
  {
    name: "Basic of Prompt Engineering",
    issuer: "Codecademy",
    image: "/codecademy.svg",
    date: "Mar - 2025",
    description: "Comprehensive course covering the fundamentals of prompt engineering for AI systems, including best practices for creating effective prompts and understanding AI model behavior.",
    skillsGained: ["Prompt Design", "AI Communication", "Model Optimization", "Prompt Testing", "AI Ethics"]
  },
  {
    name: "Excel for Data Analytics",
    issuer: "Analyst Builder",
    image: "/excel.svg",
    date: "Mar - 2025",
    description: "Advanced Excel techniques for data analysis including pivot tables, advanced formulas, data visualization, and statistical analysis for business intelligence.",
    skillsGained: ["Advanced Excel", "Data Analysis", "Pivot Tables", "Statistical Functions", "Data Visualization"]
  },
  {
    name: "MySQL for Data Analytics",
    issuer: "Analyst Builder",
    image: "/mysql.svg",
    date: "Mar - 2025",
    description: "Comprehensive MySQL training focused on data analytics, including complex queries, database optimization, and data manipulation for analytical purposes.",
    skillsGained: ["MySQL", "SQL Queries", "Database Design", "Data Manipulation", "Performance Optimization"]
  },
  {
    name: "Ultimate SQL Oracle",
    issuer: "Udemy",
    image: "/oracle.svg",
    date: "Mar - 2021",
    description: "Complete Oracle SQL course covering database fundamentals, advanced SQL techniques, PL/SQL programming, and enterprise database management.",
    skillsGained: ["Oracle SQL", "PL/SQL", "Database Administration", "Query Optimization", "Enterprise Database Management"]
  }
];

export const projects = [
  {
    title: "Multi-Region Disaster Recovery Solution",
    description: "Designed and implemented a cross-region disaster recovery architecture with automated failover capabilities, reducing potential downtime from hours to minutes.",
    technologies: ["AWS", "Route53", "CloudFormation", "Lambda"]
  },
  {
    title: "Microservices Migration",
    description: "Led the migration of a monolithic application to a containerized microservices architecture, improving scalability and reducing deployment time by 70%.",
    technologies: ["Azure", "Kubernetes", "Docker", "Terraform"]
  },
  {
    title: "Serverless Data Processing Pipeline",
    description: "Built a serverless ETL pipeline for processing large datasets, reducing operational costs by 60% while improving processing speed.",
    technologies: ["AWS Lambda", "S3", "DynamoDB", "Step Functions"]
  }
];
