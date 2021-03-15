<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>
<script>
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import useAlert from '../Hooks/alert.js';
export default {
  components: {UserAlert},
  setup() {
    const title = ref('Delete User!!');
    const [alertIsVisible,showAlert,hideAlert]=useAlert();
    return { title,alertIsVisible,showAlert,hideAlert};
  },
};
/*import UserAlert from './UserAlert.vue';
import AlertMixin from '../Mixin/alert.js';
export default {
components:{UserAlert},
mixins:[AlertMixin]
};**/
</script>