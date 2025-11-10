<template>
    EXO EMIT 1
    <ul>
        <li>------</li>
        <li>PHASE 1 : on va confiurer le composant OneFriend</li>
        <li>------</li>
        <li>1-mettre en place un bouton qui permet d'afficher ou non les détails de l'utilisateur (l'id, le téléphone,
            le mail)</li>
        <li>1- Indice : une ref boolean pour gérer l'affichage, une méthode pour basculer la valeur de la ref, un v-if
            pour afficher ou non les détails</li>
        <li>------</li>
        <li>PHASE 2 : Toujours dans le composant OneFriend on va mettre en place un bouton Update Premium qui va envoyer une information au parent dans un évènement</li>
        <li>------</li>
        <li>Mettre en place un bouton qui permet de mettre à jour la ref (premiumData, l'alias de la props unAmiPremium) premium de l'utilisateur</li>
        <li>On va utiliser defineEmits pour déclarer l'évènement 'mon-event-premium-update'</li>
        <li>On va utiliser emit pour émettre l'évènement 'mon-event-premium-update' avec la props de l'id (en fait ca sera le parent qui recevra l'id et mettra à jour le tableau contenant les données)</li>
        <li>------</li>
        <li>PHASE 3 : on va confiurer le composant Parent pour recevoir l'évènement 'mon-event-premium-update' et mettre à jour le tableau lesAmis</li>
        <li>Comme l'enfant emet l'id dans l'évènement, on va faire une fonction parentUpdatePremium qui va recevoir l'id en paramètre et mettre à jour le premium de l'utilisateur avec cet id dans le tableau lesAmis</li>
        <li>On peut utiliser la méthode find (ou autre, comme filter, map, ...) pour trouver l'utilisateur avec l'id passé en paramètre</li>
        <li>On peut ensuite mettre à jour la props premium de l'utilisateur avec la nouvelle valeur</li>
        <li>------</li>
    </ul>
    <div class="flex flex-col md:flex-row gap-4">
        <div class="md:w-1/2">
            <!-- Liste des amis avec le composant OneFriendEmit -->
            <OneFriendEmit 
            v-for="ami in lesAmis" 
            :unAmiId="ami.id" 
            :unAmiName="ami.name" 
            :unAmiPhone="ami.phone"
            :unAmiMail="ami.email" 
            :unAmiPremium="ami.premium"
            v-on:mon-event-premium-update="parentUpdatePremium"
            v-on:deleteFriend="parentDeleteFriend"
            ></OneFriendEmit>
        </div>

        <div class="md:w-1/2 bg-green-200 p-4 rounded-md shadow-md">
            <!-- Ici on va afficher le tableau lesAmis en direct -->
            <h3 class="text-lg font-bold mb-2">Données du tableau lesAmis dans le parent Exercice Emit :</h3>
            <ul>
                <li v-for="ami in lesAmis" :key="ami.id">{{ ami }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue'
import OneFriendEmit from '../../components/OneFriendEmit.vue';


const lesAmis = ref([
    {
        id: '001',
        name: 'Janine De La Vega',
        phone: '01234 5678 991',
        email: 'janine@delavega.com',
        premium: false
    },
    {
        id: '002',
        name: 'Eric Reptile',
        phone: '01234 5678 991',
        email: 'eric@reptile.com',
        premium: true
    },
    {
        id: '003',
        name: "Jean Kreps",
        phone: '+338765477',
        email: 'jean@kreps.com',
        premium: true
    },
    {
        id: '004',
        name: "Goulive",
        phone: '+338765477',
        email: 'goulive@seagal.com',
        premium: true
    },
    {
        id: '005',
        name: "JAROD",
        phone: '+338765477',
        email: 'jarod@seagal.com',
        premium: true
    },
    {
        id: '006',
        name: "GussDX",
        phone: '+338765477',
        email: 'gussdx@seagal.com',
        premium: true
    }
]);

const parentUpdatePremium=(id)=>{
    console.log('id', id);

    // On va mettre à jour le premium de l'utilisateur avec l'id passé en paramètre
    // On va utiliser la méthode find pour trouver l'utilisateur avec l'id passé en paramètre
    const ami = lesAmis.value.find(ami => ami.id === id);
    // On va mettre à jour la props premium de l'utilisateur
    ami.premium = !ami.premium;
}

const parentDeleteFriend = (unId) => {
    console.log('unId', unId);
	lesAmis.value = lesAmis.value.filter(unAmi => unAmi.id!== unId);
    // splice permet de supprimer un élément dans un tableau à l'index passé en paramètre
    // lesAmis.value.splice(ami, 1);
    //Slice permet de créer un nouveau tableau en retirant les éléments à partir de l'index passé en paramètre
    // lesAmis.value = lesAmis.value.slice(ami, 1);
}




// onMounted(() => {
// })


</script>
