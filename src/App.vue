<script setup>
  import WeatherForm from './components/WeatherForm.vue'
  import useClima from './composables/useClima'
  import Clima from './components/Clima.vue'
  import Spinner from './components/Spinner.vue'
  import AlertMessage from './components/AlertMessage.vue'

  const { obtenerClima, clima , mostrarClima, cargando, error} = useClima()
</script>

<template>
    <h1 class="titulo">Buscador de Clima</h1>
    <div class="contenedor buscador-clima">
      <WeatherForm
        @obtener-clima="obtenerClima"
      />
      <Spinner v-if="cargando"/>
      <AlertMessage v-if="error">{{ error }}</AlertMessage>
      <Clima 
        v-if="mostrarClima"
        :clima="clima"
      />
    </div>
</template>