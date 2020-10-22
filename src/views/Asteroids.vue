<template>
  <div class="asteroids">
    <div class="card max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Asteroid Name</div>
        <h4 class="font-bold text-gray-700 text-base">Estimated Distance:</h4>
        <p class="text-gray-700 text-base">Minimum: 6789</p>
        <p class="text-gray-700 text-base">Maximum: 56789</p>

        <div class="alerts my-4">
          <div
            class="py-2 px-6 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
            role="alert"
          >
            Dangerous
          </div>
          <!-- <div
          class="py-2 px-6 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert"
        >
        Safe
        </div> -->
        </div>

        <div>
          <button
            class="float-left bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <font-awesome-icon icon="eye" />
            <span class="px-2">View</span></button
          ><button
            class="float-right bg-gray-300 hover:bg-gray-400 text-red-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <font-awesome-icon icon="heart" />
            <span class="px-2">Favorite</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asteroids {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
}

/* Mobile Responsiveness */
@media only screen and (max-width: 48em) {
  .asteroids {
    display: flex;
    flex-direction: column;
  }
}

.card {
  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.08),
    0 4px 5px 0 rgba(0, 0, 0, 0.07), 0px -4px 1px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.alerts {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
}
</style>