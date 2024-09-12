import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";
import { Container } from "./components/primitives/Container";
import { MarketingLayout } from "./layout/Marketing";
import { BrowserRouter } from "react-router-dom";
import style from "./app.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}

function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, style.featuresFeature)} {...props}>
      <h4 className={style.featuresFeatureTitle}>{title}</h4>
      <p className={style.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <MarketingLayout>
          <Container className={style.section}>
            <div className={style.heroInfo}>
              <h1 className={style.heroTitle}>
                GenAI Insights for Smarter Healthcare
              </h1>
              <p className={style.heroLead}>
                Revolutionizing Medical Imaging with AI-driven Reports and
                Recommendations.
              </p>
            </div>
            <div className={style.heroActions}></div>
          </Container>
          <Container className={style.section}>
            <h2 className={style.sectionTitle}>Features</h2>
            <div className={style.featuresGrid}>
              <Feature
                description={
                  <>
                    Revolutionizing medical diagnostics with cutting-edge
                    Generative AI technology.
                  </>
                }
                title="GenAI Diagnostics"
              />
              <Feature
                description={
                  <>
                    Providing actionable, data-driven insights for faster and
                    smarter healthcare decisions.
                  </>
                }
                title="Insight Engine"
              />
              <Feature
                description={
                  <>
                    Delivering unparalleled accuracy in diagnosing medical
                    conditions through AI-powered image analysis.
                  </>
                }
                title="Precision Analysis"
              />
              <Feature
                description={
                  <>
                    Enabling interactive, real-time Q&A with medical images for
                    personalized diagnostic insights.
                  </>
                }
                title="Conversational AI"
              />
              <Feature
                description={
                  <>
                    Streamlining the creation of detailed, AI-generated
                    diagnostic reports and recommendations.
                  </>
                }
                title="Automated Reporting"
              />
              <Feature
                description={
                  <>
                    Seamlessly integrating with existing healthcare systems to
                    enhance workflow and efficiency.
                  </>
                }
                title="Smart Integration"
              />
            </div>
          </Container>
        </MarketingLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
