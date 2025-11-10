<script setup lang='js'>
    import {ref} from 'vue';

    //Variable

    const unLivre = ref("Les mémoires de Steven Seagal");
    const isOnline = ref(false);
    const unNombre = ref(1234567890);
    const unTableau = ref(["du texte", 99]);
    const unObjet = ref({"name":"COOL", "tel":"0605040302"});

    function functionTest() {
        return ("Hello World!");
    }

    // Compteur

    const compteur = ref(0)

    function augmenter() {
        compteur.value += 99
    }

    function reduire() {
        compteur.value -= 11
    }

    //V-bind

    const texte = ref('')

    const tempTexte = ref('')
    const texteConfirme = ref('')

    function mettreAJourTexte(event) {
        texte.value = event.target.value
    }

    function confirmerTexte() {
        texteConfirme.value = tempTexte.value
    }

    function afficherAlerte() {
        alert('🚀 Alerte : bouton cliqué !')
    }

    // V-model

    const compteur2 = ref(0)
    const nameUser = ref('Mario')

    function augmenter2() {
        compteur2.value++
    }

    function reduire2() {
        compteur2.value--
    }

    function afficherNameUser() {
        console.log('La fonction du name est exécutée 1 fois')
        if (nameUser.value && nameUser.value.trim() !== '') {
            return 'User Connecté'
        } else {
            return 'User Offline'
        }
    }
</script>

<template>
    <h1>Variables</h1>
    <div class="overflow-x-auto">
        <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th>Variable</th>
                <th>Valeur</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>unLivre</td>
                <td>{{unLivre}}</td>
            </tr>
            <tr>
                <td>isOnline</td>
                <td>{{isOnline}}</td>
            </tr>
            <tr>
                <td>unNombre</td>
                <td>{{unNombre}}</td>
            </tr>
            <tr>
                <td>unTableau</td>
                <td>{{unTableau}}</td>
            </tr>
            <tr>
                <td>unTableau[0]</td>
                <td>{{unTableau[0]}}</td>
            </tr>
            <tr>
                <td>unObjet</td>
                <td>{{unObjet}}</td>
            </tr>
            <tr>
                <td>unObjet.name</td>
                <td>{{unObjet.name}}</td>
            </tr>
            <tr>
                <td>unObjet['name']</td>
                <td>{{unObjet['name']}}</td>
            </tr>
            <tr>
                <td>unObjet.tel</td>
                <td>{{unObjet.tel}}</td>
            </tr>
            
            <tr>
                <td>functionTest()</td>
                <td>{{functionTest()}}</td>
            </tr>
            <tr>
                <td>un ternaire pour la route</td>
                <td>{{1===1?'Cool':'Pas Cool'}}</td>
            </tr>
            </tbody>
        </table>
    </div>

    <div>
        <h1>Compteur magique</h1>
        <p>{{ compteur }}</p>
        <div>
            <button @click.middle="reduire">-11</button>
            <button @click.right.prevent="augmenter">+99</button>
        </div>
        <small>(Clic du milieu pour -11, clic droit pour +99)</small>
    </div>

    <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold mb-4">TP Event Binding Mode</h5>

            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2"><code>v-on:keyup</code> ou <code>@keyup</code></h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte</span>
                    </div>
                    <input type="text" placeholder="Tapez ici..." class="input input-bordered w-full" @keyup="mettreAJourTexte" />
                </label>

                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>Le contenu de l'input est : <span class="badge badge-accent">{{ texte }}</span></p>
                </div>
            </div>

            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Modificateur d'événement</h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte et appuyez sur 'Échap'</span>
                    </div>
                    <input type="text" placeholder="Tapez et appuyez sur 'Esc'" class="input input-bordered w-full" v-model="tempTexte" @keyup.esc="confirmerTexte" />
                </label>

                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>
                        La valeur confirmée par 'Échap' est :
                        <span class="badge badge-primary">{{ texteConfirme }}</span>
                    </p>
                </div>
            </div>

            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Événement <code>@click</code></h6>
                <button class="btn btn-error text-white" @click="afficherAlerte">Afficher une alerte</button>
            </div>
        </div>
    </div>

    <h1>V-Model</h1>
    <div>
        <h2>Compteur & État Utilisateur</h2>

        <p>Valeur du compteur : <span>{{ compteur2 }}</span></p>

        <div>
            <button @click="reduire2">Réduire (-1)</button>
            <button @click="augmenter2">Augmenter (+1)</button>
        </div>

        <div>
            <p>État utilisateur :<span>{{ afficherNameUser() }}</span></p>
        </div>
    </div>

    
</template>