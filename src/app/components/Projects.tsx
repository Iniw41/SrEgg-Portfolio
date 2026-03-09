import { motion } from 'motion/react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const featuredProject = {
  title: 'Medical Appointment System',
  description: 'A comprehensive web-based system for managing medical appointments, patient records, and healthcare provider schedules. Built with modern web technologies to streamline healthcare administration.',
  technologies: ['Web Development', 'Database Management', 'User Authentication', 'Responsive Design'],
  githubUrl: 'https://github.com/Iniw41/Medical-Apointment-System',
  features: [
    'Patient appointment scheduling',
    'Healthcare provider management',
    'Secure patient data handling',
    'Real-time availability tracking'
  ]
};

export function Projects() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Project</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{featuredProject.title}</h3>
                  <div className="flex items-center gap-4 text-purple-100">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Healthcare System</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Collaborative Project</span>
                    </div>
                  </div>
                </div>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                  aria-label="View project on GitHub"
                >
                  <Github className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {featuredProject.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all group"
              >
                <span className="font-semibold">View on GitHub</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            More projects coming soon! Check my{' '}
            <a
              href="https://github.com/SrEgggg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 font-semibold underline"
            >
              GitHub profile
            </a>
            {' '}for more work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
