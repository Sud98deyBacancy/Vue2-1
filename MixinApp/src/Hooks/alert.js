import { ref} from 'vue';
export default function useAlert(){
    const alertIsVisible = ref(false);

    function showAlert() {alertIsVisible.value = true;}
    function hideAlert() {alertIsVisible.value = false;}
    
    return [alertIsVisible,showAlert,hideAlert];
}
/*
export default {
data() {
      return { alertIsVisible: false};
    },
    methods: {
      showAlert() {this.alertIsVisible = true;},
      hideAlert() {this.alertIsVisible = false;}
    },
  };
  */