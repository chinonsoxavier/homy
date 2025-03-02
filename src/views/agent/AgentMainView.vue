<script setup lang="ts" >
import AgentDashboardNavbar from '../../components/layout/AgentDashboardNavbar.vue';
import AgentDashboardSideMenu from '../../components/layout/AgentDashboardSideMenu.vue';

import { useMainStore } from "../../utilities/store";
import { computed } from 'vue';
const store = useMainStore();
const menuMode = computed(() => store.agentSidebar);
</script>

<template>

    <div class="flex items-start p-3 h-screen gap-3 w-screen bg-darkPrimary overflow-y-hidden justify-between" >
    
        <aside :class="[menuMode ? '' :'flex-1']" class="h-full mobile:hidden max-w-[230px] basis] duration-500 " >
        <AgentDashboardSideMenu/>
       </aside>
       <div class="rounded-md flex-1 bg-[#f9f3ef] h-full overflow-hidden" >
        <nav class="bg-white h-[12%] shadowmd border-b" >
            <AgentDashboardNavbar/>
        </nav>
               <!-- <div class="bg-white" > -->
        <router-view></router-view>
       </div>
       <!-- </div> -->
    </div>
</template>