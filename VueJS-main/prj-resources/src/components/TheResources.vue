<template>
    <base-card>
    <base-button @click="setSelectedTab('store-resource')" :mode="storeResMode">Store Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResMode"> Add Resources </base-button>
    </base-card>
    <component :is="selectedTab"></component>
</template>
<script>
import storeResource from './storeResource.vue';
import addResource from './addResource.vue';
export default {
    components:{ storeResource,addResource},
    data(){
        return{ 
            selectedTab:'store-resource',
            storedResources: [
        {
          id: 'guide',
          title: 'official Guide',
          description: 'The Official VueJS Doc',
          link: 'https://vuejs.org',
        },
        {
          id: 'Google',
          title: 'Search Google',
          description: 'Learn about google',
          link: 'https://www.google.com',
        }
      ]
        };
    },
    provide(){
        return { resources: this.storedResources,addResource:this.addResource};
    },
    computed:{  
        storeResMode(){ return this.selectedTab === 'store-resource' ? null : 'flat'; },
        addResMode(){ return this.selectedTab === 'add-resource'? null : 'flat'; }
    },
    methods:{
        setSelectedTab(tab){ this.selectedTab=tab; },
        addResource(t,d,u){
            const newResource={
                id:new Date().toISOString(),
                title:t,description:d,link:u
            };
            this.storedResources.push(newResource);
            this.selectedTab = 'store-resource';
        }
    }
}
</script>