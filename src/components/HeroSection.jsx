const HeroSection = () => {
  return (
<section class="text-gray-400 bg-gray-900 body-font h-screen">
  <div class="container mx-auto flex h-full px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="/images/font.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Programacion paralela</h1>
      <p class="leading-relaxed mb-8">La programación paralela es un enfoque en el desarrollo de software donde se utilizan múltiples procesadores o núcleos de manera simultánea para realizar tareas computacionales. Esto permite que los programas se ejecuten más rápido al dividir la carga de trabajo entre los diferentes procesadores, lo que puede mejorar significativamente el rendimiento y la eficiencia de las aplicaciones. La programación paralela es especialmente útil para resolver problemas computacionalmente intensivos que se pueden dividir en tareas más pequeñas y ejecutarlas de forma concurrente.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Más información</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default HeroSection
