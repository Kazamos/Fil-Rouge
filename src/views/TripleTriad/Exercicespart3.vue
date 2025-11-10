<script setup>
import { ref } from 'vue'
import OneFriend from '../../components/OneFriend2.vue'

const lesAmis = ref([
    { id: '001', name: 'Janine De La Vega', phone: '01234 5678 991', email: 'janine@delavega.com', premium: false },
    { id: '002', name: 'Eric Reptile', phone: '01234 5678 991', email: 'eric@reptile.com', premium: false },
    { id: '003', name: 'Jean Kreps', phone: '+338765477', email: 'jean@kreps.com', premium: true },
    { id: '004', name: 'Goulive', phone: '+338765477', email: 'goulive@seagal.com', premium: true },
    { id: '005', name: 'JAROD', phone: '+338765477', email: 'jarod@seagal.com', premium: true },
    { id: '006', name: 'GussDX', phone: '+338765477', email: 'gussdx@seagal.com', premium: true }
])

const updatePremiumInParent = (id) => {
    const ami = lesAmis.value.find(p => p.id === id)
    if (ami) ami.premium = !ami.premium
}

const deleteFriendInParent = (id) => {
    lesAmis.value = lesAmis.value.filter(p => p.id !== id)
}
</script>

<template>
    <div>
        <h2>EXO EMIT 1</h2>

        <div class="amis-container">
        <OneFriend
            v-for="unPote in lesAmis"
            :key="unPote.id"
            v-bind="unPote"
            @mon-event-premium-update="updatePremiumInParent"
            @delete-friend="deleteFriendInParent"
        />
        </div>
    </div>
</template>

<style scoped>

.amis-container {
    flex-direction: column;
}

</style>