<script setup>
  import WeatherForm from './components/WeatherForm.vue'
  import useClima from './composables/useClima'

  const { obtenerClima } = useClima()
</script>

<template>
    <h1 class="titulo">Buscador de Clima</h1>
    <div class="contenedor buscador-clima">
      <WeatherForm
        @obtener-clima="obtenerClima"
      />
    </div>
</template>

<style scoped>

</style>
