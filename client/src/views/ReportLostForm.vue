<script setup>

import LostButton from "../components/buttons/LostButton.vue";
import ShareButton from "../components/buttons/ShareButton.vue";
</script>

<template>
  <h1 class="report-missing-header">Report a missing pet</h1>
  <section class="missing-form">
    <section class="your-details form-column">
      <h3 class="report-missing-your-details">Your details</h3>
      <form class="form-vertical">
        <input name="your-name" type="text" required placeholder="Your name*">
        <input name="owner-name" type="text" placeholder="Owner's name">
        <input name="phone" type="tel" placeholder="Phone number">
        <input name="email" type="email" required placeholder="Email address*">
      </form>
      <div class="photo-upload">
        <img src=""/> upload a photo of your pet
        <div class="photo-place"></div>
      </div>
    </section>

    <section class="your-details form-column">
      <h3 class="report-missing-your-details">Your pet's details</h3>
      <form class="form-vertical">
        <input name="pet-name" type="text" required placeholder="Pet's name*">
        <input name="microchip" type="text" placeholder="Microchip number">
        <input name="registration-number" type="tel" placeholder="Registration number">

        <div class="form-radio">
          <label class="form-control"><input type="radio" name="pet-type" value="dog" />Dog</label>
          <label class="form-control"><input type="radio" name="pet-type" value="cat" />Cat</label>
          <label class="form-control"><input type="radio" name="pet-type" value="other" />Other pet</label>
        </div>

        <div>
          <p>Where did you last seen your pet?</p>
          <div class="inline lost-place">
            <input name="where-lost" type="text" required placeholder="Last place of seen">
          </div>
        </div>

        <div>
          <p>When was it?</p>
          <div class="inline lost-date-time">
            <input name="when-lost-date" type="date" required placeholder="When was it?">
            <input name="when-lost-time" type="time" required placeholder="When was it?">
          </div>
        </div>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Other details about pet missing"/>
      </form>
    </section>
  </section>

  <section class="form-lost-buttons">
    <LostButton class="missing-button"/>
    <ShareButton class="share-button"/>
  </section>
</template>

<style lang="scss" scoped>
h1{
  padding-bottom: 0.5em;
}

h3{
  padding-top: 1.5em;
  padding-bottom: 1em;
}

.missing-form{
  display: flex;
  flex-wrap: wrap;
  column-gap: 3em;
  justify-content: center;

  .form-column{
    text-align: left;
    width: 45%;
    max-width: 28em;
    min-width: 15em;

    input{
      flex-grow: 1;
    }
  }

  .form-radio{
    display: flex;
  }

  .photo-upload{
    padding-top: 1em;
  }
}

.form-lost-buttons{
  width: 100%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5em;
  margin: 0 auto;
  margin-top: 2em;

  .missing-button, .share-button{
    flex-grow: 1;
    width: 100%;
  }
}
</style>