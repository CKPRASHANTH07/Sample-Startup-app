import React from 'react'

const Domains = () => {
  return (
    <div className='h-fit w-fit'>
        <h1 className='text-6xl text-blue-950 pb-10 font-bold p-10'>Domains</h1>
        
        <div className=" items-start w-fit flex flex-rows lg:flex-col pt-10 xl:pl-60">
          <div className=" flex-row lg:grid  p-10 w-full lg:grid-cols-2 lg:grid-rows-3 gap-6 space-y-8">
            <div/>
            <div className=" col-start-1 row-start-1 px-3 py-4  border-2 h-96 w-[450px] rounded-md border-slate-900">
              <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10">Cyber Security</p>
              <p className="font-semibold font-Inter text-subheading"> Throughout this training, we'll cover essential topics such as threat detection, risk assessment, and incident response. From understanding common attack vectors to implementing robust security measures, our goal is to equip you with the knowledge and skills needed to protect against cyber threats.</p>
            </div>
            <div className=" col-start-1 row-start-2 px-3 py-4  border-2 h-96 w-[450px] rounded-md border-slate-900">
              <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10">Full-Stack</p>
              <p className="font-semibold font-Inter text-subheading">Full-stack development encompasses both front-end and back-end development, allowing developers to create fully functional web applications with expertise in both areas.</p>
            </div>
            <div className="col-start-1 row-start-3 px-3 py-4 border-2 h-96 w-[450px] rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10">Devops</p>
              <p className="font-semibold font-Inter text-subheading">DevOps is a software development approach that emphasizes collaboration between development and IT operations teams. It aims to automate the software delivery process, enabling faster and more reliable deployment of code. By integrating continuous integration, continuous delivery, and infrastructure as code practices, DevOps streamlines development workflows and enhances software quality.</p>
            </div>
            <div className="col-start-2 row-start-1 px-3 py-4 border-2 h-96 w-[450px] rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10">AI-ML</p>
              <p className="font-semibold font-Inter text-subheading">AI-ML, or Artificial Intelligence and Machine Learning, is a field of computer science focused on creating systems that can learn from data and make predictions or decisions without explicit programming. It encompasses techniques such as neural networks, deep learning, and natural language processing, enabling applications like image recognition, language translation, and predictive analytics. AI-ML has vast potential to revolutionize industries by automating tasks, improving efficiency, and driving innovation.</p>
            </div>
            <div className="col-start-2 row-start-2 px-3 py-4 border-2 h-96 w-[450px] rounded-md border-slate-900">
            <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10">Data-Science</p>
              <p className="font-semibold font-Inter text-subheading">Data science involves extracting insights and knowledge from data through statistical analysis, machine learning, and data visualization techniques. This course teaches skills such as data wrangling, exploratory data analysis, predictive modeling, and data storytelling.</p>
            </div>
            <div className="row-start-3 px-3 py-4 border-2 rounded-md h-96 w-[450px] border-slate-900">
            <p className="py-2 font-Poppins text-heading text-5xl text-center pb-10"> Cloud Computing</p>
              <p className="font-semibold font-Inter text-subheading">This course focuses on the principles and practices of cloud computing, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). Topics include cloud architecture, deployment models, scalability, and security in the cloud environment.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Domains