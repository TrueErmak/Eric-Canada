import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './styles.css';


// Define your page components
function Home() {
  return (
    <div className="container">
      <div className="page">
        <h1>about me</h1>
        {
          <p className="brief-header"> Welcome to my personal page! My name is Eric Canada, and I am a passionate technologist currently advancing my expertise in Artificial Intelligence at the University of Advancing Technology (UAT). My academic journey is a blend of rigorous theory and hands-on experience, preparing me to contribute to the ever-evolving landscape of AI. Professionally, I stand at the intersection of technology and craftsmanship as a lathe programmer specializing in the Aerospace industry. My role involves precision and attention to detail, ensuring that the components we produce meet the exacting standards this field demands. Outside of my professional life, I am an avid technophile with a penchant for 3D printing. My home is my workshop, where I bring ideas to life using tools like Fusion 360 and other creative engines. There's a unique kind of joy in watching a concept materialize layer by layer, and it's this magic that fuels my enthusiasm for digital fabrication. But my skills are not confined to the virtual realm. As an experienced welder, I understand the value of traditional craftsmanship and its irreplaceable role in a world that's quickly moving towards the digital. Welding has taught me patience, precision, and the importance of a steady hand—skills that are surprisingly synergistic with programming and AI development. Speaking of programming, it is another arena where I thrive. Building programs and crafting Python applications is more than a job or a hobby; it's a means to problem-solve, to innovate, and to create tools that could one day change how we interact with technology. Whether it's through lines of code, a welded joint, or a 3D printed model, I find my calling in creation. It is in the act of making new things, improving existing ones, and learning from the process that I find my professional fulfillment. If you're curious about my work or share similar interests, feel free to connect. I am always open to discussing new technologies, potential collaborations, or simply exchanging ideas with fellow enthusiasts.  </p>
        }
      </div>
      

        <img
        src="/tiger-shirt.jpg" // Replace with the actual path to your image file
        alt="eric canada" // Provide a brief description of the image for accessibility
        width="335" // Set the width of the image (adjust as needed)
        height="335" // Set the height of the image (adjust as needed)
/>
<img
        src="/meAndPhebe.jpg" // Replace with the actual path to your image file
        alt="eric canada" // Provide a brief description of the image for accessibility
        width="335" // Set the width of the image (adjust as needed)
        height="335" // Set the height of the image (adjust as needed)
/>
<img
        src="/pirateME.jpg" // Replace with the actual path to your image file
        alt="eric canada" // Provide a brief description of the image for accessibility
        width="335" // Set the width of the image (adjust as needed)
        height="335" // Set the height of the image (adjust as needed)
/>


        
    </div>
  );
}

function EmploymentInformation() {
  return (
    <div className="container">
      <div className="page">
        <h1>employment Information</h1>
        {
          
          <p className="brief-header"> Eric Canada</p>
        }
        {
          
          <p className="brief-common-text"> [*** south 10th street Oregon IL] [815-238-5822] [ecanada07@gmail.com] </p>
        }


{
          
          <p className="brief-header"> Objectives:</p>
        }
        {
          
          <p className="brief-common-text"> Highly skilled artificial intelligence graduate with hands-on experience in aerospace machining and 3D printing business operations. Seeking a position in multiple production based positions that leverages my technical acumen and entrepreneurial spirit.</p>
        }


{
          
          <p className="brief-header"> Education:</p>
        }
        {
          
          <p className="brief-common-text">University of Advancing Technology (UAT)
          Bachelor of Science in Artificial Intelligence & Robotics/ Embedded systems.  
          [from 6,15,2020 to ] 
          </p>
        }



{
          
          <p className="brief-header"> Job History: </p>
        }

        {
          <p className="brief-common-text">(1) PMI Aerospace: [9/7/2021] [current] Tittle: [Machinist & Operations Specialist] @ https://pmiaerospace.com/ </p>

        }
        
        <Link to="/PMIAerospace" className="link-style">Click to Investigate Job Discription</Link> 
        

          
        
        {
          <p className="brief-common-text">(2) MacLean-Fogg Company: [start] [end] Tittle:[Machinist & Operations Specialist] @ https://macleanfogg.com/  </p>
        }
        <Link to="/MacLeanFoggCompany" className="link-style">Click to Investigate Job Discription</Link>
        

        {
          <p className="brief-common-text">(3)  SPG international SPG international [5,1,2016 to 6,1,16 and 10,1,2018 to 6,1,2019] https://www.spgusa.com/ </p>
        }
        <Link to="/SPGinternational" className="link-style">Click to Investigate Job Discription</Link>

        {
          <p className="brief-common-text">(3) Universal tank and fabrication [8,1,2014 to 6,1,2015]  </p>
        }
        <Link to="/Universaltankandfabrication" className="link-style">Click to Investigate Job Discription</Link>
        









      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="container">
      <div className="page">
        <h1>personal skills</h1>
        <p className="brief-header"> CNC Lathe Programming and Operation</p>
        <p className="brief-common-text">Proficient in CNC lathe programming and operation within the aerospace industry. Skilled in setting up and running CNC lathes to precision specifications.have ran a diverse range of machines, including 3 FEMCO HL-25s, 1 Takisawa TS-4000YS, and 1 Miyano LL-21 twin turret dual spindle lathe. </p>
        {/* YouTube Video Embed */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/DsnIzn0BL7Q" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <p className="brief-header"> Welding Expertise </p>
        <p className="brief-common-text"> Extensive experience in welding various types of metals, adhering to welding specifications, and ensuring high-quality welds. Strong understanding of welding techniques and safety protocols. </p>

        <p className="brief-header"> Programming Languages </p>
        <p className="brief-common-text"> Proficient in multiple programming languages </p>

        <p className="brief-common-text">In the ever-evolving world of technology, versatility in programming languages is a valuable asset. My journey in coding spans across various domains, each requiring a unique blend of technical know-how and creative problem-solving.  </p>
        <p className="brief-common-text">At the core of my expertise lies a solid foundation in G-Code, particularly used in CNC lathe programming. This specialized knowledge has enabled me to excel in precision manufacturing, where every line of code translates into tangible, high-quality products.  </p>
        <p className="brief-common-text">In the realm of web development, I am proficient in JavaScript, HTML, and CSS. These languages are the cornerstone of modern web design and development, and I have harnessed them to build interactive, responsive websites that not only perform well but also provide an engaging user experience.  </p>
        <p className="brief-common-text">My skills in Python reflect my ability to adapt to diverse programming needs. Python's versatility makes it an excellent choice for a range of applications, from simple scripts to complex machine learning algorithms. This language's simplicity and power have been instrumental in many of my successful projects.  </p>
        <p className="brief-common-text">When it comes to application development, I have a strong command over C and C++. These languages, known for their efficiency and control, have been crucial in developing high-performance applications. Whether it's for server management, desktop software, or embedded systems, my C/C++ skills have been a key factor in delivering robust and efficient solutions.  </p>
        <p className="brief-common-text">Moreover, my proficiency extends to the intricate world of server-side scripting and application development. I am well-versed in various coding practices essential for server management, website backend, and mobile application development. This comprehensive skill set ensures that I can handle the technical demands of server and application programming effectively.  </p>
        <p className="brief-common-text">In conclusion, my programming language expertise is diverse, covering everything from the precision of G-Code in CNC programming to the flexibility of Python and the power of C/C++. This range not only demonstrates my technical capabilities but also underscores my passion for learning and adapting to the dynamic field of programming.  </p>
        

        

        <p className="brief-header"> Artificial Intelligence (AI) </p>
        <p className="brief-common-text">  Pursuing skills in artificial intelligence, demonstrating a commitment to staying current with cutting-edge technologies and trends in AI development. </p>
        {/* YouTube Video Embed */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/E0B9bbG-nVI" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <p className="brief-header"> 3D Printing </p>
        <p className="brief-common-text"> Competent in operating various 3D printing machines, with the ability to create complex three-dimensional objects accurately. </p>

        <p className="brief-header"> Server Administration </p>
        <p className="brief-common-text"> Proficient in setting up and maintaining servers, ensuring their security, and optimizing performance for various applications. </p>

        <p className="brief-header"> Version Control (Git) </p>
        <p className="brief-common-text"> Skilled in using Git for version control, facilitating collaborative development and efficient tracking of code changes. </p>
        
        <p className="brief-header"> software construction  </p>
        
        {/* YouTube Video Embed programing section */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/a6TqzUEckws" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        

        <p className="brief-header"> Robotics   </p>
        {/*  */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/pn1ay0ff3Lc" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        {/* */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/FipxOVlKso4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
       

        <p className="brief-header"> programing </p>
        {/* YouTube Video Embed programing section */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/FipxOVlKso4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        

        <p className="brief-header"> A.I </p>
        {/* YouTube Video Embed A.I section */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/UG1Z3b53clM" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        
        
        <p className="brief-header"> Digital art    </p>
        {/* YouTube Video Embed A.I section */}
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/QC4aF2mH8e0 " 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        


      </div>
    </div>
  ); 
}

function ContactMe() {
  return (
    <div className="container">
      <div className="page">
        <h1>contact me page</h1>
        {
          <p className="brief-header"> the best way to contact me is though email at ericanad@uat.edu </p>
        }
      </div>
    </div>
  );
  
}


function PMIAerospace() {
  return (
    <div>
      {/* Add content for the JobDescription page */}
      <h2>Job Description</h2>
      <p className="brief-common-text"> (1)	Operate and maintain a diverse range of machines, including 3 FEMCO HL-25s, 1 Takisawa TS-4000YS, and 1 Miyano LL-21 twin turret dual spindle lathe.</p>
      <p className="brief-common-text"> (2)	Specialize in manual programming of all machines to ensure accuracy and optimal performance. </p>
      <p className="brief-common-text"> (3)	Expertise in tool installation across various machines, ensuring efficient workflow.</p>
      <p className="brief-common-text"> (4)	Spearhead job development, refining details in real-time as each job progresses. </p>
      <p className="brief-common-text"> (5)	Proficient in reading and drafting technical prints for aerospace parts. </p>
      <p className="brief-common-text">(6)	Design 2-dimensional plots for machine geometry as required. </p>
      <p className="brief-common-text">(7)	Systematically organize equipment and tooling supplies, enhancing shop efficiency and accessibility. </p>
      <p className="brief-common-text"> (8)	Oversee part construction executed by adjacent machinists, ensuring quality and adherence to specifications.</p>
      <p className="brief-common-text">(9)	Procure specialized tooling as required for advanced alloys like Satellite 6B and carbide materials. </p>
      <p className="brief-common-text">(10)	Conduct meticulous inspection of fabricated parts using advanced tools such as a 3D vision measuring system (with or without touch probes) and comparators. </p>
      <p className="brief-common-text">(11)	Actively track part processes and implement corrective actions as necessary, ensuring high-quality fabrication outcomes. </p>
      <p className="brief-common-text">(12)	Efficiently schedule jobs to machines, optimizing shop productivity. </p>
      <p className="brief-common-text"> </p>
      
      
    </div>
  );
}

function MacLeanFoggCompany() {
  return (
    <div>
      {/* Add content for the JobDescription page */}
      <h2>MacLeanFoggCompany</h2>
      <p>This is the job description page.</p>
    </div>
  );
}

function SPGinternational() {
  return (
    <div>
      {/* Add content for the JobDescription page */}
      <h2>SPGinternational</h2>
      <p>This is the job description page.</p>
    </div>
  );
}

function Universaltankandfabrication() {
  return (
    <div>
      {/* Add content for the JobDescription page */}
      <h2>Universaltankandfabrication</h2>
      <p>This is the job description page.</p>
    </div>
  );
}

// Define the HomeComponent we have home background information about me and contact me
function HomeComponent() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/employment-information">Background Information</Link>
      <Link to="/Skills">Skills</Link>
      <Link to="/ContactMe">Contact Me</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <HomeComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employment-information" element={<EmploymentInformation />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/ContactMe" element={<ContactMe />} />

        <Route path="/PMIAerospace" element={<PMIAerospace />} />
        <Route path="/MacLeanFoggCompany" element={<MacLeanFoggCompany />} />
        <Route path="/SPGinternational" element={<SPGinternational />} />
        <Route path="/Universaltankandfabrication" element={<Universaltankandfabrication />} />
      </Routes>
    </Router>
  );
}

export default App;
