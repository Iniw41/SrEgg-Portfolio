import { motion } from 'motion/react';
import { Palette, Code2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Artist</h3>
            <p className="text-gray-600 leading-relaxed">
              With an eye for aesthetics and a passion for visual storytelling, I create art that 
              resonates and inspires. My artistic journey is driven by experimentation, color, and 
              the pursuit of unique perspectives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl flex items-center justify-center mb-6">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Programmer</h3>
            <p className="text-gray-600 leading-relaxed">
              I transform ideas into reality through clean, efficient code. Specializing in web 
              development and system design, I build applications that are not only functional 
              but also intuitive and user-friendly.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            The intersection of art and technology is where I thrive. Whether I'm designing 
            beautiful interfaces or architecting robust systems, I bring a unique perspective 
            that values both form and function.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
