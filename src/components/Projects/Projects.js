import React from "react";
import { Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proof of <strong className="purple">Work </strong>
        </h1>
        <p className="section-subtext">
          Here are a few projects I've worked on recently.
        </p>

        {/* 2-col desktop, 1-col mobile */}
        <div className="projects-grid">
  
          <ProjectCard
            emoji="📊"
            title="Capital Analytics"
            description="Personal macro dashboard for managing investments: models Global Liquidity Index signals across Fed balance sheet, TGA, bank reserves, DXY, real yields, and credit spreads to track BTC and equity regime shifts. Next.js frontend, Python backend -sometimes the best tool is the one you build yourself"
            techStack={["Next.js", "Python", "Pandas", "SQL", "Git"]}
            // ghLink="https://github.com/yourhandle/capital-analytics"
            demoLink="https://capital-analytics.vercel.app/"
          />
           <ProjectCard
            emoji="📈"
            title="Premia"
            description="Built an options screening dashboard for finding high-probability bull put spreads and cash-secured puts: ingested live options-chain data, modeled risk/reward metrics, stored results in Supabase, and shipped a clean Next.js interface for filtering trades by budget, probability, and loss-to-profit profile."
            techStack={["Python", "Pandas", "Supabase", "SQL", "Next.js", "TypeScript"]}
            demoLink="https://premia-eight.vercel.app/"
          />
          <ProjectCard
            emoji="🔧"
            title="Twitter ETL Pipeline"
            description="A time-constrained data engineering challenge — extract tweets by topic via the Twitter API, transform and parse key fields (author, hashtags, raw text, aggregations), and load into dynamically partitioned directories by year/month. The ETL that got me the job at Miles, where I later scaled pipelines to production on Airflow."
            techStack={["Python", "ETL", "Twitter API", "Data Engineering", "Pipeline"]}
            ghLink="https://github.com/darshdee/Data_Engineering-Twitter-Challenge"
          />
          <ProjectCard
            emoji="🔄"
            title="User Retention Python Package"
            description="Built an analyst-friendly Python package for cohort-based user retention analysis — before AI made this kind of thing table stakes. Born out of production data work, packaged for reuse, and written up on Medium's Analytics Vidhya publication."
            techStack={["Python", "Pandas", "Cohort Analysis", "Data Science"]}
            ghLink="https://github.com/darshdee/User-Retention-Analysis"
            demoLink="https://medium.com/analytics-vidhya/user-retention-in-python-8c33fa5766b6"
          />
          <ProjectCard
            emoji="📰"
            title="NLP: News Article Classification"
            description="Applied unsupervised and supervised ML to a corpus of news articles: hierarchical clustering to discover natural groupings, then KNN classification to predict article categories. Built end-to-end: EDA, text vectorization, feature engineering, and inference. The kind of pipeline that now powers content routing and ad targeting at scale."
            techStack={["Python", "NLP", "scikit-learn", "KNN", "Clustering", "Jupyter"]}
            ghLink="https://github.com/darshdee/NaturalLanguageProcessing-News_Articles"
          />
          <ProjectCard
            emoji="👁️"
            title="Computer Vision & Image Processing"
            description="Self-guided deep dive into OpenCV and PIL — edge detection, morphological transforms, Haar cascade object detection, and live video processing. Less a finished product, more proof that curiosity doesn't wait for a project brief."
            techStack={["Python", "OpenCV", "PIL", "Computer Vision", "Jupyter"]}
            ghLink="https://github.com/darshdee/Image_Processing"
          />
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
