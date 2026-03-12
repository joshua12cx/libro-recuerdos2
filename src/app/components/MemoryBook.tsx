import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

// 📸 Importando tus fotos personales

import foto1 from "../../assets/Foto1.png";
import foto2 from "../../assets/Foto2.png";
import foto3 from "../../assets/Foto3.png";
import foto4 from "../../assets/Foto4.png";
import foto5 from "../../assets/Foto5.png";
import foto6 from "../../assets/Foto6.png";
import foto7 from "../../assets/Foto7.png";
import foto8 from "../../assets/Foto8.png";
import foto9 from "../../assets/Foto9.png";
interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string; // La URL de la imagen
  layout: "single" | "double" | "collage";
}


const memories: Memory[] = [
  {
    id: 1,
    title: "Atardecer Juntos", // 👈 Cambia el título aquí
    date: "Siempre en mi corazón", // 👈 Cambia la fecha o frase aquí
    description: "Cada momento a tu lado es mágico. Tu sonrisa ilumina mis días y tu amor hace que todo valga la pena.", // 👈 Cambia la descripción aquí
    image: foto1, // 👈 TU FOTO 1 - Selfie en el parque
    layout: "single"
  },
  {
    id: 2,
    title: "Nuestras Manos", // 👈 Cambia el título aquí
    date: "Unidos por siempre", // 👈 Cambia la fecha o frase aquí
    description: "Cada vez que tomo tu mano, siento que estoy en casa. Eres mi refugio, mi paz, mi amor eterno.", // 👈 Cambia la descripción aquí
    image: foto2, // 👈 CAMBIA ESTA URL POR TU IMAGEN
    layout: "single"
  },
  {
    id: 3,
    title: "Cenas Románticas", // 👈 Cambia el título aquí
    date: "Momentos especiales", // 👈 Cambia la fecha o frase aquí
    description: "Compartir una cena contigo es mi momento favorito del día. Tu compañía hace que todo sea perfecto.", // 👈 Cambia la descripción aquí
    image: foto3,
    layout: "single"
  },
  {
    id: 4,
    title: "Paseos en la Playa", // 👈 Cambia el título aquí
    date: "Recuerdos inolvidables", // 👈 Cambia la fecha o frase aquí
    description: "Caminar contigo por la playa es como caminar en un sueño. Eres todo lo que siempre soñé.", // 👈 Cambia la descripción aquí
    image: foto4,
    layout: "single"
  },
  {
    id: 5,
    title: "Más Momentos en la Playa", // 👈 Nueva página con tu segunda foto
    date: "Amor infinito", // 👈 Cambia la fecha o frase aquí
    description: "Cada momento contigo es un tesoro. Tu abrazo es mi lugar favorito en el mundo.", // 👈 Cambia la descripción aquí
    image: foto5, // 👈 TU FOTO 3 - En la playa con lentes
    layout: "single"
  },
  {
    id: 6,
    title: "Para Ti", // 👈 Cambia el título aquí
    date: "Con todo mi amor", // 👈 Cambia la fecha o frase aquí
    description: "Cada rosa representa un motivo por el que te amo. Eres mi inspiración, mi fuerza, mi todo.", // 👈 Cambia la descripción aquí
    image: "https://images.unsplash.com/photo-1712677927853-4481a1c078bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjByb3NlcyUyMHJvbWFudGljfGVufDF8fHx8MTc3MzI0OTM1MHww&ixlib=rb-4.1.0&q=80&w=1080", // 👈 CAMBIA ESTA URL POR TU IMAGEN
    layout: "single"
  },
  {
    id: 7,
    title: "Risas y Alegría", // 👈 Cambia el título aquí
    date: "Tu sonrisa es mi felicidad", // 👈 Cambia la fecha o frase aquí
    description: "Nadie me hace reír como tú. Contigo descubrí que el amor verdadero existe y es hermoso.", // 👈 Cambia la descripción aquí
    image: foto7, // 👈 TU FOTO 5 - Abrazo tierno
    layout: "single"
  },
  {
    id: 8,
    title: "Días de Picnic", // 👈 Cambia el título aquí
    date: "Momentos simples, amor infinito", // 👈 Cambia la fecha o frase aquí
    description: "Los momentos más simples contigo son los más especiales. Eres la razón de mi felicidad.", // 👈 Cambia la descripción aquí
    image: foto8,
    layout: "single"
  },
  {
    id: 9,
    title: "Noches en la Ciudad", // 👈 Cambia el título aquí
    date: "Contigo hasta el infinito", // 👈 Cambia la fecha o frase aquí
    description: "Cada aventura a tu lado es increíble. Gracias por ser mi compañera de vida, mi amor eterno.", // 👈 Cambia la descripción aquí
    image: foto9,
    layout: "single"
  }
  // 💡 CONSEJO: Puedes agregar más recuerdos copiando un bloque completo
  // y pegándolo aquí con id: 10, id: 11, etc.
];

export function MemoryBook() {
  const [currentPage, setCurrentPage] = useState<number>(-1); // -1 for cover
  const [direction, setDirection] = useState<number>(0);

  const nextPage = () => {
    if (currentPage < memories.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage >= 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 25 : -25,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 25 : -25,
    }),
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 overflow-hidden">
      {/* Decorative hearts */}
      <motion.div
        className="absolute top-10 left-10 text-pink-300"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-rose-300"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Heart className="w-6 h-6 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-purple-300"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles className="w-7 h-7 fill-current" />
      </motion.div>

      {/* Main book container */}
      <div className="flex items-center justify-center h-full px-4 perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          {currentPage === -1 ? (
            // Cover Page
            <motion.div
              key="cover"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.6 },
              }}
              className="relative w-full max-w-2xl h-[600px] bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 rounded-lg shadow-2xl p-12 flex flex-col items-center justify-center border-4 border-rose-200"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 80%, rgba(219, 39, 119, 0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
                `,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <Heart className="w-24 h-24 text-rose-400 fill-current" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-serif text-rose-900 mb-4 text-center"
              >
                Nuestros Recuerdos
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl text-rose-700 mb-8 text-center italic"
              >
                Un libro de amor dedicado a ti
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex gap-2 items-center text-rose-600"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span className="text-sm">Para mi amor</span>
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-8 text-rose-500 text-sm italic"
              >
                Marzo 11, 2026
              </motion.div>
            </motion.div>
          ) : (
            // Memory Page
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.6 },
              }}
              className="relative w-full max-w-4xl h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-rose-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Left side - Image */}
                <div className="relative h-full overflow-hidden bg-rose-50">
                  <motion.img
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    src={memories[currentPage].image}
                    alt={memories[currentPage].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-rose-200/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-rose-200/50 to-transparent" />
                </div>

                {/* Right side - Content */}
                <div className="relative p-8 flex flex-col justify-center bg-gradient-to-br from-rose-50/30 to-purple-50/30">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-rose-500 fill-current" />
                      <span className="text-sm text-rose-600 italic">
                        {memories[currentPage].date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-serif text-rose-900 mb-6">
                      {memories[currentPage].title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                      {memories[currentPage].description}
                    </p>
                    <div className="flex gap-2 mt-auto">
                      <Heart className="w-4 h-4 text-rose-400 fill-current" />
                      <Heart className="w-4 h-4 text-rose-400 fill-current" />
                      <Heart className="w-4 h-4 text-rose-400 fill-current" />
                    </div>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 text-rose-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-purple-200">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Page number */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-rose-400 text-sm">
                {currentPage + 1} / {memories.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        <Button
          onClick={prevPage}
          disabled={currentPage === -1}
          className="bg-rose-500 hover:bg-rose-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Anterior
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === memories.length - 1}
          className="bg-rose-500 hover:bg-rose-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          Siguiente
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div
          className={`w-3 h-3 rounded-full transition-all ${
            currentPage === -1 ? "bg-rose-500 scale-125" : "bg-rose-200"
          }`}
        />
        {memories.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === index ? "bg-rose-500 scale-125" : "bg-rose-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}