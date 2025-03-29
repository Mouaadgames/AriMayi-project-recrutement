import { createSlice } from "@reduxjs/toolkit"

export type Job = {
  id: number,
  roleName: string,
  description: string,
  postedDate: number,
  location: string,
  workMode: string,
  isActive: boolean
}



const initialState: Job[] =
  [
    {
      id: 1,
      roleName: "Frontend Developer",
      description: `🔍 Process de recrutement

      Un entretien enregistré de 30 minutes
      Un test technique à la maison
      Un entretien avec le CEO
      
      
      💰 Salaire
      
      18K - 20K Dh / mois en fonction du profil.
      
      
      📃 Contrat
      
      CDI
      Freelance non accepté
      
      
      ✅ Avantages
      
      Matériel : un laptop i7/32Go HP | Ecran 24 HP | Clavier / Souris HP | Casque micro Logitech
      Full remote : Tu travailles à distance, de chez toi
      Internationale : Des clients de France, Suisse, Canada, Angleterre
      Team building : Une journée par mois ou tous les collaborateurs se rejoignent pour kiffer
      Santé : Mutuel Axa avec remboursement à 85%
      
      
      🏇🏻 Expérience souhaitée
      
      Pour postuler à ce poste, il te faudra :
      
      6+ ans d'expérience en développement web
      Dont 3 ans minimum avec NestJS / Express.
      Dont 3 ans minimum avec PHP Sylius / Symphony.
      Dont 2 ans minimum avec NextJS / ReactJs.
      Excellente maîtrise de TypeScript, PHP Syphonye, PostgreSQL et des architectures scalables.
      Expérience avec les tests unitaires, CI/CD et bonnes pratiques de code et de sécurité.
      Capacité à adapter le niveau de communication technique en fonction de son interlocuteur (utilisateur, client, PO, QA, autre dev)
      Français obligatoire
      
      
      😎 Descriptif du poste
      
      Nous recrutons un développeur senior pour une startup innovante spécialisée dans l’économie circulaire. Elle développe un SaaS e-commerce qui permet aux grandes marques de mettre en place des solutions de location et seconde main.
      
      
      
      Tu seras responsable de construire, optimiser et sécuriser nos applications en collaboration avec notre équipe.
      
      
      
      Tes responsabilités :
      
      Développer et optimiser des applications performantes et scalables en PHP Sylius, NestJS & NextJS.
      Concevoir des API robustes et des interfaces modernes et ergonomiques.
      Assurer la qualité et la sécurité du code avec des tests et bonnes pratiques.
      Collaborer avec l’équipe produit pour traduire les besoins métiers en solutions techniques efficaces.
      Participer aux choix d’architecture et à l’amélioration continue de nos plateformes.
      Mentorer les développeurs juniors et contribuer au partage de connaissances.
      
      
      Tu évolueras au sein d’une équipe composée de 2 développeurs, d’un architecte a temps partiel et d’une chef de projet, et tu seras en interaction directe avec les parties prenantes du projet.`,
      location: "France",
      workMode: "remote",
      isActive: true,
      postedDate: 1743233996257,
    },
    {
      id: 2,
      roleName: "Backend Developer",
      description: "The Backend Developer will architect and implement scalable, secure, and high-performance server-side applications. You'll manage database integrations, API development, and data processing logic using technologies like Node.js, Python, or Java. A strong understanding of RESTful APIs, authentication mechanisms, and security best practices is crucial. You'll work collaboratively with frontend teams to ensure seamless data flow and application stability, and you will be expected to handle server-side debugging, deployment automation, and third-party integrations. Writing unit and integration tests, documenting endpoints, and participating in agile development cycles are integral to this position.",
      location: "Germany",
      workMode: "on-site",
      isActive: true,
      postedDate: 1745835996257,
    },
    {
      id: 3,
      roleName: "UI/UX Designer",
      description: "As a UI/UX Designer, your job is to shape intuitive and aesthetically pleasing digital experiences. You'll conduct user research, create wireframes, prototypes, and mockups, and work with developers to bring your designs to life. Your focus will be on understanding user needs, simplifying complex workflows, and enhancing user satisfaction through elegant design. You'll apply principles of visual hierarchy, typography, color theory, and spacing, while also maintaining brand consistency across platforms. Regular usability testing, iteration based on feedback, and an eye for detail are key to delivering high-quality user interfaces that meet both business and user goals."
      ,
      location: "Spain",
      workMode: "hybrid",
      isActive: false,
      postedDate: 1746008796257,
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "The Project Manager will lead cross-functional teams to deliver software solutions on time and within scope. You will define project objectives, develop detailed work plans, manage budgets, and track deliverables using project management tools such as Jira, Trello, or Asana. Communication with stakeholders, risk management, and resource allocation will be central to your responsibilities. You’ll facilitate daily stand-ups, sprint planning, and retrospectives in an agile environment, ensuring team alignment and timely issue resolution. Clear documentation, timely reporting, and continuous improvement practices are essential for success in this role."
      ,
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: 1746122396257,
    },
    {
      id: 5,
      roleName: "DevOps Engineer",
      description: "The DevOps Engineer will streamline development and deployment processes through automation and continuous integration/continuous delivery (CI/CD) pipelines. You’ll be responsible for maintaining scalable cloud infrastructure using services like AWS, Azure, or Google Cloud. Key tasks include writing infrastructure-as-code (IaC) scripts, monitoring system performance, ensuring high availability, and managing containerized applications with tools like Docker and Kubernetes. You will collaborate with developers to ensure smooth deployments, quick rollback mechanisms, and robust logging and alerting systems. Security compliance, system resilience, and operational efficiency will be the pillars of your daily responsibilities."
      ,
      location: "USA",
      workMode: "on-site",
      isActive: true,
      postedDate: 1746208796257,
    }
  ]



const jobsSlice = createSlice({
  initialState,
  name: "jobs",
  reducers: {
    // addCandidate: (state, action: PayloadAction<Job>) => {
    //   state.jobs.push(action.payload)
    // }
  }
})

export default jobsSlice.reducer
