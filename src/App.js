import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import ecommerceImage from "./images/eCommerce.jpg";
import bankingImage from "./images/Banking.jpg";
import taskManagementImage from "./images/TaskManagement.jpg";

function App() {
  const projects = [
    {
      ProjectName: "Alpha",
      Description:
        "Banking and financial solution for your all banking needs. This has seperate modules for Savings, Leasing and Micro financing facilities and a common General Ledger ",
      Image: bankingImage,
    },
    {
      ProjectName: "Beta",
      Description:
        "A ecommerce platform for your all online products. It's greate a example of a site that uses its design to make it easy for customers to navigate to what they want",
      Image: taskManagementImage,
    },
    {
      ProjectName: "Gamma",
      Description:
        "An application used by an individual, team, or organization to complete projects efficiently by organizing and prioritizing related tasks. This tools come in many forms, like basic spreadsheets or online project management applications",
      Image: ecommerceImage,
    },
  ];
  return (
    <div id="top" className="App">
      <Header></Header>
      <main>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects projects={projects} />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section>
          <Footer></Footer>
        </section>
      </main>
    </div>
  );
}

export default App;
