import { motion } from 'motion/react';
import { Github, Mail, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <div className="space-y-6">
              <motion.a
                href="https://github.com/SrEgggg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 rounded-xl transition-all group border border-white/10 hover:border-purple-400"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">GitHub</h3>
                  <p className="text-gray-400">@SrEgggg</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">Email</h3>
                  <p className="text-gray-400">Available on request</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Egmhar Jay Bitor. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
