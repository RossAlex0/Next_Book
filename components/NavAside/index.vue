<script lang="ts" setup>
import "./index.css";
</script>

<template>
  <aside class="nav_container">
    <div class="aside_contain">
      <h1>- Ebook -</h1>
      <p>
        Découvrez Next eBook, la plateforme ultime pour explorer et trouver des
        e-books adaptés à vos envies. Plongez dans un univers de lecture sans
        limite et trouvez votre prochain coup de cœur littéraire dès maintenant
        !
      </p>
    </div>
    <div class="aside_input_container">
      <div><label>Titre:</label><SearchInput type="intitle" /></div>
      <div><label>Genre:</label><SearchInput type="subject" /></div>
      <div><label>Auteur:</label><SearchInput type="inauthor" /></div>
    </div>
    <div class="aside_contain"><p>Copy-2024-Ross0Dev</p></div>
  </aside>
</template>
