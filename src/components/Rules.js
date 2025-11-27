import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const rulesData = {
  "Registration Questions": [
    {
      question: "What is the competition registration deadline, and how do I register?",
      answer: 'The registration deadline is March 01, 2026. You can register <a href="https://unstop.com/hackathons/agri-tech-hackathon-k-j-somaiya-college-of-engineering-kjsce-mumbai-1378830" target="_blank" rel="noopener noreferrer" class="text-lime-400 hover:text-lime-300 underline">here</a>.'
    },
    {
      question: "Where is the hackathon being held?",
      answer: "The event will be held at K. J. Somaiya School of Engineering, Vidyavihar, Mumbai."
    },
    {
      question: "Can I get help with forming a team?",
      answer: "Yes, you can contact the organizers for assistance or join the networking groups provided after registration."
    },
    {
      question: "Who can participate?",
      answer: "Undergraduate students from any discipline are eligible to participate. Teams can include members from different colleges."
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams must consist of 3 to 5 members."
    },
    {
      question: "Can a single team submit multiple projects?",
      answer: "No, each team is allowed to submit only one project during the hackathon."
    },
    {
      question: "What happens after registration?",
      answer: "After registering, you will receive an email with detailed guidelines for abstract submission and further updates."
    },
    {
      question: "Can we make changes to our team after registration?",
      answer: "No, changes to team members or structure are not allowed after the registration is finalized."
    }
  ],
  "Technical Questions": [
    {
      question: "What are the development topics for this hackathon?",
      answer: "The tracks include Precision Agriculture, Supply Chain Optimization, Farmers' Empowerment, Biofuel Innovation, and Open Innovation in Agriculture."
    },
    {
      question: "What technologies are recommended for project development?",
      answer: "Participants are encouraged to use AI, IoT, Blockchain, and Data Analytics. Other innovative tools are also welcome."
    },
    {
      question: "Will any development server or database environment be provided?",
      answer: "No, participants must use their own resources, tools, and environments for development."
    },
    {
      question: "What kind of projects are expected?",
      answer: "Projects should focus on solving real-world agricultural challenges through innovative, scalable, and impactful solutions."
    },
    {
      question: "Is prior experience with AI, IoT, or Blockchain required?",
      answer: "No, prior experience is not mandatory, but familiarity with these technologies will be beneficial."
    },
    {
      question: "What is the required development environment for the competition?",
      answer: "You can use any development environment or tools that suit your project needs. Ensure your setup is ready before the hackathon."
    },
    {
      question: "Will there be mentorship during the hackathon?",
      answer: "Yes, mentors will be available to guide teams and help troubleshoot technical challenges during the event."
    }
  ]
};

const Rules = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="section-container">
      <h1 className="faq-title mb-16">
        {['F', 'A', 'Q'].map((letter, i) => (
          <span key={i} className="letter">{letter}</span>
        ))}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {Object.entries(rulesData).map(([category, questions], sectionIndex) => (
          <div key={category} className="space-y-4">
            <h2 className="text-2xl font-bold text-lime-400 mb-6 border-b border-lime-400/30 pb-2">
              {category}
            </h2>
            
            <div className="space-y-3">
              {questions.map((item, index) => {
                const uniqueIndex = `${sectionIndex}-${index}`;
                const isOpen = openIndex === uniqueIndex;
                
                return (
                  <motion.div
                    key={uniqueIndex}
                    className="glass-card overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => toggleFAQ(uniqueIndex)}
                      className="w-full flex items-center justify-between text-left p-4 hover:bg-white/5 transition-colors duration-200"
                    >
                      <span className="font-semibold text-white pr-4">
                        {item.question}
                      </span>
                      <span className="flex-shrink-0 text-lime-400">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-4 pb-4 text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rules;
