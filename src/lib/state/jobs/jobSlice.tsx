import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type Job = {
  id: number,
  roleName: string,
  description: string,
  postedDate: Date,
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
      postedDate: new Date(1743233996257),
    },
    {
      id: 2,
      roleName: "Backend Developer",
      description: "Responsible for server-side application logic.",
      location: "Germany",
      workMode: "on-site",
      isActive: true,
      postedDate: new Date(1745835996257),
    },
    {
      id: 3,
      roleName: "UI/UX Designer",
      description: "Design user interfaces and improve user experience.",
      location: "Spain",
      workMode: "hybrid",
      isActive: false,
      postedDate: new Date(1746008796257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 4,
      roleName: "Project Manager",
      description: "Oversee project execution and team coordination.",
      location: "Canada",
      workMode: "remote",
      isActive: true,
      postedDate: new Date(1746122396257),
    },
    {
      id: 5,
      roleName: "DevOps Engineer",
      description: "Manage infrastructure and deployment pipelines.",
      location: "USA",
      workMode: "on-site",
      isActive: true,
      postedDate: new Date(1746208796257),
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
