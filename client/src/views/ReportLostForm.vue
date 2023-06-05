<script setup>
import LostButton from "../components/buttons/LostButton.vue";
import ShareButton from "../components/buttons/ShareButton.vue";
import UploadImage from "../components/UploadImage.vue";
import ReportDataService from "../services/ReportDataService";
import { computed, onMounted, reactive, ref } from "vue";
import { useAuthStore } from "../stores/auth.js";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
const {user} = storeToRefs(authStore)

const initialState = {
  id: "",
  publisherName: "",
  ownerName: "",
  phoneNumber: "",
  emailAddress: "",
  imageUrl: "",
  petType: "",
  petName: "",
  microchip: "",
  registrationNumber: "",
  reportType: "lost",
  lastSeen: "",
  timeOfReport: "",
  timeOfLastSeen: "",
  details: "",
  published: "true",
  authorId: user.value ? user.value.id : null
}

const petData = reactive({...initialState});
const imageComponent = ref(null)

function resetForm() {
  Object.assign(petData, initialState);
}

const submitted = ref(false)

const imageData = ref(undefined)

onMounted(() => {
  imageData.value = imageComponent.value.imageInfos
})

const getImageFilename = computed(() => {
  if(imageComponent.value && imageComponent.value.imageInfos){
    return imageComponent.value.imageInfos.filename
  } else {
    return ""
  }
})

function saveReport() {
  petData.imageUrl = getImageFilename

  ReportDataService.create(petData)
      .then(response => {
        petData.id = response.data.id;
        console.log(response.data);
        submitted.value = true;
      })
      .catch(e => {
        console.log(e);
      });
}

function newReport() {
  submitted.value = false;
  resetForm();
}

</script>

<template>
  <h1 class="report-missing-header">Report a missing pet</h1>
  <section class="missing-form" v-if="!submitted">
    <section class="your-details form-column">
      <h3 class="report-missing-your-details">Your details</h3>
      <form class="form-vertical">
        <input name="your-name" type="text" required placeholder="Your name*"
               v-model.trim="petData.publisherName">
        <input name="owner-name" type="text" placeholder="Owner's name"
               v-model.trim="petData.ownerName">
        <input name="phone" type="tel" placeholder="Phone number"
               v-model.trim="petData.phoneNumber">
        <input name="email" type="email" required placeholder="Email address*"
               v-model.trim="petData.emailAddress">
      </form>
      <div class="photo-upload">
        <img src=""/> upload a photo of your pet
        <div class="photo-place">
          <UploadImage ref="imageComponent"/>
        </div>
      </div>
    </section>

    <section class="your-details form-column">
      <h3 class="report-missing-your-details">Your pet's details</h3>
      <form class="form-vertical">
        <input name="pet-name" type="text" required placeholder="Pet's name*"
               v-model.trim="petData.petName">
        <input name="microchip" type="text" placeholder="Microchip number"
               v-model.trim="petData.microchip">
        <input name="registration-number" type="tel" placeholder="Registration number"
               v-model.trim="petData.registrationNumber">

        <div class="form-radio">
          <label class="form-control"><input type="radio" name="pet-type" value="dog"
                                             v-model="petData.petType"/>Dog</label>
          <label class="form-control"><input type="radio" name="pet-type" value="cat"
                                             v-model="petData.petType"/>Cat</label>
          <label class="form-control"><input type="radio" name="pet-type" value="other"
                                             v-model="petData.petType"/>Other pet</label>
        </div>

        <div>
          <p>Where did you last seen your pet?</p>
          <div class="inline lost-place">
            <input name="where-lost" type="text" required placeholder="Last place of seen"
                   v-model="petData.lastSeen">
          </div>
        </div>

        <div>
          <p>When was it?</p>
          <div class="inline lost-date-time">
            <input name="when-lost-date" type="date" required placeholder="When was it?">
            <input name="when-lost-time" type="time" required placeholder="When was it?">
          </div>
        </div>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Other details about pet missing"
                  v-model="petData.details"/>
      </form>
    </section>
  </section>
  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="missing-button add-report" @click="newReport">Report another pet</button>
  </div>

  <section class="form-lost-buttons" v-if="!submitted">
    <LostButton class="missing-button send-button" @click="saveReport"/>
    <ShareButton class="share-button"/>
  </section>

</template>

<style lang="scss" scoped>
h1 {
  padding-bottom: 0.5em;
}

h3 {
  padding-top: 1.5em;
  padding-bottom: 1em;
}

.missing-form {
  display: flex;
  flex-wrap: wrap;
  column-gap: 3em;
  justify-content: center;

  .form-column {
    text-align: left;
    width: 45%;
    max-width: 28em;
    min-width: 15em;

    input {
      flex-grow: 1;
    }
  }

  .form-radio {
    display: flex;
  }

  .photo-upload {
    padding-top: 1em;
  }
}

.form-lost-buttons {
  width: 100%;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5em;
  margin: 0 auto;
  margin-top: 2em;

  .missing-button, .share-button {
    flex-grow: 1;
    width: 100%;
  }
}

.add-report {
  color: white;
  background-color: $main-color-lost;
  margin-top: 1em;
}
</style>