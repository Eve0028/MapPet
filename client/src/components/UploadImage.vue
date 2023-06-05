<script setup>
import UploadService from "../services/UploadFilesService";
import { computed, onMounted, ref } from "vue";

const currentImage = ref(undefined)
const previewImage = ref(undefined)
const progress = ref(0)
const message = ref("")
const imageInfos = ref(null)
const uploaded = ref(false)

const uploadImg = ref(null)

function selectImage() {
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

  currentImage.value = uploadImg.value.files[0];
  console.log(currentImage.value)
  message.value = "";
  if (!allowedTypes.includes(currentImage.value.type)) {
    message.value = "Filetype is wrong!!"
  }
  if (currentImage.value.size > 500000) {
    message.value = 'Too large, max size allowed is 500kb'
  }
  uploaded.value = message.value === "";
  previewImage.value = URL.createObjectURL(currentImage.value);
  console.log(previewImage.value)

  progress.value = 0;
}

function upload() {
  progress.value = 0;

  UploadService.upload(currentImage.value, (event) => {
    progress.value = Math.round((100 * event.loaded) / event.total);
  })
      .then((response) => {
        uploaded.value = false
        message.value = response.data.message;
        imageInfos.value = response.data.image
      })
      .catch((err) => {
        progress.value = 0;
        message.value = "Could not upload the image! " + err;
        currentImage.value = undefined;
      });
}

defineExpose({
  imageInfos
})

</script>

<template>
  <div class="image-upload">
    <div class="row">
      <div class="col-8">
        <label class="btn btn-default p-0">
          <input
              type="file"
              accept="image/*"
              ref="uploadImg"
              @change="selectImage"
          />
        </label>
      </div>

      <div class="col-4">
        <button
            class="btn btn-success btn-sm float-right"
            :disabled="!uploaded"
            @click="upload"
        >
          Upload
        </button>
      </div>
    </div>

    <div v-if="currentImage" class="progress">
      <div
          class="progress-bar progress-bar-info"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>

    <div v-if="previewImage">
      <div>
        <img class="preview my-3" :src="previewImage" alt="" width="340"/>
      </div>
    </div>

    <div v-if="message" class="alert alert-secondary" role="alert">
      {{ message }}
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>