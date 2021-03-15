import { ref,computed,watch } from 'vue';
 export default function useSearch(items,SearchProp){ 
   const enteredSearchTerm=ref('');
    const activeSearchTerm=ref(''); 
    const availableItems=computed(function(){
      let filteredItems = [];
      if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
      item[SearchProp].includes(activeSearchTerm.value));
      } 
      else if (items.value) {filteredItems = items.value;} 
      return filteredItems;
    });
    
        watch(enteredSearchTerm,function(newValue){
       setTimeout(() => {
        if (newValue === enteredSearchTerm.value) 
        {  activeSearchTerm.value = newValue;}
      }, 2000);
    });
    function updateSearch(val) {enteredSearchTerm.value=val;} 
   return{ availableItems,enteredSearchTerm,updateSearch}
}