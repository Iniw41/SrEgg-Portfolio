import { motion } from 'motion/react';
import { Palette } from 'lucide-react';
import artwork1 from 'figma:asset/4f196e90b5df2651155789bbf57f95529239fed3.png';
import artwork2 from 'figma:asset/705e42fc5db165b4d07b0610f288896c406b3eeb.png';
import artwork3 from 'figma:asset/3daca469b8f91447ec92df7bb9e9c294d49e9620.png';
import artwork4 from 'figma:asset/3bab9e9ec4e4d447bdc06c4b51e35dd0ca67aef7.png';
import artwork5 from 'figma:asset/1550af205550ae03fb6a7c35294eea39f8c39cc2.png';
import artwork6 from 'figma:asset/91dda2d0d6bb1c6933ad8002b3888604f9e151e0.png';
import artwork7 from 'figma:asset/024b685082b7023aa6dff4fe9533ad1318e1cd39.png';
import artwork8 from 'figma:asset/0975bae91a87385eeb4bd119d04ab2c69a8a60ec.png';

const artworks = [
  {
    id: 1,
    image: artwork1,
    title: 'Casual Portrait',
    style: 'Digital Art',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 2,
    image: artwork2,
    title: 'Energetic Expression',
    style: 'Digital Art',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 3,
    image: artwork3,
    title: 'Silhouette Study',
    style: 'Monochrome',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    image: artwork4,
    title: 'Bold Character',
    style: 'Digital Art',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 5,
    image: artwork5,
    title: 'Cheerful Moment',
    style: 'Digital Art',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 6,
    image: artwork6,
    title: 'Bright Eyes',
    style: 'Digital Art',
    gridClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 7,
    image: artwork7,
    title: 'Dark Aesthetic',
    style: 'Monochrome',
    gridClass: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 8,
    image: artwork8,
    title: 'Side Profile',
    style: 'Digital Art',
    gridClass: 'md:col-span-2 md:row-span-1',
  },
];

export function ArtGallery() {
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Art Gallery</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of character designs and illustrations showcasing various styles and techniques
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`group relative ${artwork.gridClass}`}
              >
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                  <div className="h-full relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-bold text-lg mb-1">{artwork.title}</h3>
                        <p className="text-purple-300 text-sm font-medium">{artwork.style}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <p className="text-white text-lg mb-2">
                More artwork coming soon!
              </p>
              <p className="text-purple-300 text-sm">
                Follow for updates on new illustrations and character designs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
