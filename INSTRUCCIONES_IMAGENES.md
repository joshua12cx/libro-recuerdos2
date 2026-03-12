# 📸 GUÍA: Cómo Agregar Tus Propias Imágenes al Álbum

## Opción 1: Imágenes desde Internet (Más fácil)

Si tus fotos están en Google Photos, Dropbox, Instagram, etc.:

1. **Obtén el enlace directo** de cada imagen
2. **Abre** el archivo `/src/app/components/MemoryBook.tsx`
3. **Busca** las líneas que dicen `image: "https://..."`
4. **Reemplaza** cada URL con el enlace de tu foto

### Ejemplo:
```javascript
{
  id: 1,
  title: "Nuestra primera cita",
  date: "14 de febrero, 2024",
  description: "El día que cambió mi vida para siempre",
  image: "https://TU-ENLACE-AQUI.com/foto1.jpg", // 👈 Pon tu URL aquí
  layout: "single"
}
```

---

## Opción 2: Imágenes desde tu Computadora

Si quieres usar fotos guardadas en tu computadora:

### Paso 1: Organizar tus fotos
1. Crea una carpeta llamada **`images`** dentro de `/src/app/`
2. Coloca tus fotos ahí y nómbralas claramente:
   - `foto1.jpg`
   - `foto2.jpg`
   - `foto3.jpg`
   - etc.

### Paso 2: Importar las imágenes
Al inicio del archivo `/src/app/components/MemoryBook.tsx`, después de las otras importaciones, agrega:

```javascript
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

// 👇 AGREGA ESTAS LÍNEAS PARA IMPORTAR TUS FOTOS
import foto1 from "../images/foto1.jpg";
import foto2 from "../images/foto2.jpg";
import foto3 from "../images/foto3.jpg";
import foto4 from "../images/foto4.jpg";
import foto5 from "../images/foto5.jpg";
import foto6 from "../images/foto6.jpg";
import foto7 from "../images/foto7.jpg";
import foto8 from "../images/foto8.jpg";
```

### Paso 3: Usar las fotos importadas
Luego, en cada recuerdo, reemplaza la URL por el nombre de la variable (SIN comillas):

```javascript
const memories: Memory[] = [
  {
    id: 1,
    title: "Nuestra primera cita",
    date: "14 de febrero, 2024",
    description: "El día que cambió mi vida para siempre",
    image: foto1, // 👈 Sin comillas! Usa el nombre de la variable
    layout: "single"
  },
  {
    id: 2,
    title: "Viaje a la playa",
    date: "Verano 2024",
    description: "Arena, sol y tu sonrisa perfecta",
    image: foto2, // 👈 Otra foto importada
    layout: "single"
  },
  // ... y así con todas
];
```

---

## ✏️ Personalizar Textos

También puedes cambiar:

- **title**: El título de cada recuerdo
- **date**: La fecha o una frase romántica
- **description**: El mensaje de amor para ese recuerdo

### Ejemplo personalizado completo:
```javascript
{
  id: 1,
  title: "El día que te conocí", // 👈 Tu título
  date: "15 de marzo, 2023", // 👈 Tu fecha
  description: "No sabía que ese café cambiaría mi vida. Desde ese momento supe que eras especial.", // 👈 Tu mensaje
  image: foto1, // 👈 Tu foto
  layout: "single"
}
```

---

## 🎨 Agregar Más Páginas

Para agregar más de 8 recuerdos, simplemente copia uno de los bloques completos y pégalo al final del array, cambiando el `id`:

```javascript
const memories: Memory[] = [
  // ... los 8 recuerdos existentes ...
  {
    id: 9, // 👈 Nuevo ID
    title: "Recuerdo nuevo",
    date: "Una fecha especial",
    description: "Tu mensaje aquí",
    image: foto9,
    layout: "single"
  },
  {
    id: 10, // 👈 Otro nuevo
    title: "Otro recuerdo",
    date: "Otra fecha",
    description: "Otro mensaje",
    image: foto10,
    layout: "single"
  }
];
```

---

## 💡 Consejos

1. **Formato de imágenes**: Usa JPG o PNG
2. **Tamaño recomendado**: Imágenes de al menos 1000px de ancho se ven mejor
3. **Nombres de archivo**: No uses espacios ni caracteres especiales (usa `-` o `_`)
   - ✅ Correcto: `foto-playa.jpg`, `primera_cita.jpg`
   - ❌ Incorrecto: `foto playa.jpg`, `primera cita!.jpg`

---

¡Listo! Con esto ya puedes personalizar completamente tu álbum de recuerdos 💕
