import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'PHP', 'Rust', 'Solidity', 'SQL'],
  },
  {
    category: 'Backend Frameworks',
    skills: ['NestJS', 'Express', 'Fastify', 'FastAPI', 'Django', 'Flask', 'GoFiber', 'Laravel'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Zustand', 'Material UI'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'NGINX', 'Cloudflare'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'MSSQL', 'FaunaDB', 'SQLite'],
  },
  {
    category: 'AI & LLM',
    skills: ['OpenAI API', 'Prompt Engineering', 'LLM Orchestration', 'AI Agent Deployment', 'Multi-tenant LLM'],
  },
  {
    category: 'Web3',
    skills: ['Solidity', 'Hardhat', 'Ethers.js', 'Moralis', 'Anchor (Solana)', 'DeFi Protocols', 'Soulbound Tokens'],
  },
  {
    category: 'Observability & Testing',
    skills: ['Grafana', 'Prometheus', 'Jest', 'Pytest', 'Postman', 'Swagger/OpenAPI', 'RabbitMQ', 'Celery'],
  },
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center'
      id='skills'
    >
      <h3 className='uppercase tracking-[10px] text-primary dark:text-primaryDark text-2xl mb-12
      md:tracking-[5px] md:text-xl text-center'>
        Technical Skills
      </h3>
      <div className='w-full space-y-8'>
        {skillGroups.map(({ category, skills }) => (
          <div key={category}>
            <h4 className='text-xs font-bold uppercase tracking-[4px] text-dark/50 dark:text-light/50 mb-3'>
              {category}
            </h4>
            <div className='flex flex-wrap gap-2'>
              {skills.map(skill => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.06, y: -2 }}
                  transition={{ duration: 0.15 }}
                  className='px-4 py-1.5 rounded-full border border-solid border-dark/20 dark:border-light/20
                  text-sm font-medium text-dark dark:text-light cursor-default
                  hover:border-primary hover:text-primary dark:hover:border-primaryDark dark:hover:text-primaryDark
                  transition-colors duration-200'
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
