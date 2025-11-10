<template>
    <div class="container mx-auto p-4 md:p-8">
        <div class="text-center mb-8 md:mb-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-primary">
                Comprendre la Directive <code class="text-secondary">v-html</code>
            </h1>
            <p class="text-lg md:text-xl text-base-content opacity-75 mt-2 max-w-2xl mx-auto">
                La directive `v-html` permet d'insérer dynamiquement du contenu HTML.
            </p>
        </div>

        <!-- Section Définition -->
        <div class="card bg-base-100 shadow-xl mb-6">
            <div class="card-body">
                <h2 class="card-title text-2xl font-bold mb-4">Qu'est-ce que <code class="text-secondary">v-html</code> ?</h2>
                <p>
                    La directive `v-html` est utilisée pour insérer du HTML brut dans un élément du DOM. Contrairement aux moustaches <code class="text-accent">{{ message }}</code>, qui affichent le texte tel quel, `v-html` interprète le HTML.
                </p>
                <div class="alert alert-warning mt-4 rounded-box">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span class="font-bold">Attention :</span> L'utilisation de `v-html` peut introduire des failles de sécurité si le contenu n'est pas contrôlé (risque d'injection de script).
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Exemple de Base -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple de Base</h2>
                    <p class="mb-4">
                        Un titre HTML est rendu dynamiquement :
                    </p>
                    <div class="mockup-code">
                        <pre><code><span class="text-info">&lt;template&gt;</span>
  &lt;div&gt;
    &lt;h2 <span class="text-warning">v-html</span>="htmlContent"&gt;&lt;/h2&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const htmlContent = '&lt;span style="color: blue;"&gt;Bonjour, Vue.js!&lt;/span&gt;';
&lt;/script&gt;
</code></pre>
                    </div>
                    <div class="card-actions justify-center mt-4">
                        <div class="p-4 border rounded-box w-full text-center" v-html="htmlContent"></div>
                    </div>
                </div>
            </div>

            <!-- Exemple Dynamique -->
            <div class="card bg-base-100 shadow-xl rounded-box">
                <div class="card-body">
                    <h2 class="card-title text-2xl font-bold">Exemple Dynamique</h2>
                    <p class="mb-4">
                        L'utilisateur peut modifier le contenu HTML :
                    </p>
                    <div class="mockup-code mb-4">
                        <pre><code><span class="text-info">&lt;template&gt;</span>
  &lt;div&gt;
    &lt;textarea v-model="dynamicHtml"&gt;&lt;/textarea&gt;
    &lt;div <span class="text-warning">v-html</span>="dynamicHtml"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const dynamicHtml = ref('&lt;strong&gt;Texte initial en gras&lt;/strong&gt;');
&lt;/script&gt;
</code></pre>
                    </div>
                    <div class="card-actions justify-center flex-col w-full">
                        <textarea v-model="dynamicHtml" class="textarea textarea-bordered w-full mb-3" placeholder="Tapez du HTML ici"></textarea>
                        <div v-html="dynamicHtml" class="w-full p-4 border rounded-box border-dashed"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-8">
            <p class="text-sm md:text-base text-base-content opacity-50">
                Pour plus d'informations, consultez la
                <a href="https://vuejs.org/guide/essentials/template-syntax.html#raw-html" class="link link-hover text-primary font-bold" target="_blank">
                    documentation officielle de Vue.js
                </a>.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Exemple de Base
const htmlContent = '<span style="color: #2563eb;">Bonjour, Vue.js!</span>';

// Exemple Dynamique
const dynamicHtml = ref('<strong>Texte initial en gras</strong>');
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas de CSS nécessaire ici. */
</style>
