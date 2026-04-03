AOS.init({
  duration: 800,
  once: true,
});
const notyf = new Notyf({
  duration: 1000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'warning',
      background: 'orange',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning'
      }
    },
    {
      type: 'error',
      background: 'indianred',
      duration: 2000,
      dismissible: true
    }
  ]
});

let panier=[];
const menu = [
  {
    nom: "Sauce gombo",
    description: "Sauce traditionnelle à base de gombo, d'épices et de viande, servie avec du riz ou du foufou",
    prix: "3500 FCFA",
    image: "images/Sauce-Gombo-1024x715.jpg",
    categorie: "Plats"
  },
  {
    nom: "Riz au Gras",
    description: "Riz cuisiné avec viande tendre et épices africaines, un classique réconfortant",
    prix: "1500 FCFA",
    image: "images/cuisine-camerounaise-et-africaine-riz-au-gras-cote-d-ivoire.png",
    categorie: "Plats"
  },
  {
    nom: "Steak avec Frites",
    description: "Steak grillé à point accompagné de frites dorées et d'une sauce au choix",
    prix: "5500 FCFA",
    image: "images/52096452-f9c1-49e9-9e76-46c694bee2ba--2020-1124_steak-frites_3x2_rocky-luten_032.jpg",
    categorie: "Plats"
  },
  {
    nom: "Jus de bissap",
    description: "Boisson rafraîchissante et naturelle à base de fleurs d'hibiscus, légèrement sucrée",
    prix: "500 FCFA",
    image: "images/bissap-healthy-alie-2.jpg",
    categorie: "Boissons"
  },
  {
    nom: "Spaghetti à la bolognaise",
    description: "Pâtes al dente nappées d'une sauce bolognaise maison mijotée aux herbes fraîches",
    prix: "2500 FCFA",
    image: "images/1755254772350-9s77ozkm.jpg",
    categorie: "Plats"
  },
  {
    nom: "Coca-Cola",
    description: "Boisson gazeuse bien fraîche, parfaite pour accompagner votre repas",
    prix: "700 FCFA",
    image: "images/0024_Coca-Cola-33-CL.jpg",
    categorie: "Boissons"
  },
  {
    nom: "Poulet Yassa",
    description: "Poulet mariné au citron et aux oignons caramélisés, une spécialité sénégalaise savoureuse",
    prix: "4500 FCFA",
    image: "images/Poulet-Yassa-Senegalais.jpg",
    categorie: "Plats"
  },
  {
    nom: "Alloco",
    description: "Bananes plantains mûres frites, croustillantes à l'extérieur et fondantes à l'intérieur",
    prix: "1000 FCFA",
    image: "images/ALLOCO_AUX_OEUFS_BOUILLIS.jpg",
    categorie: "Snacks"
  },
  {
    nom: "Attieké Poisson",
    description: "Semoule de manioc fraîche accompagnée de poisson grillé et de sauce tomate pimentée",
    prix: "2000 FCFA",
    image: "images/3371073_uploaded_image1_1633514483.jpg",
    categorie: "Plats"
  },
  {
    nom: "Pizza Napolitaine",
    description: "Pizza à pâte fine garnie de tomate fraîche, mozzarella et basilic, cuite au four",
    prix: "3500 FCFA",
    image: "images/content_lg.jpg",
    categorie: "Plats"
  },
  {
    nom: "Tiramisu",
    description: "Dessert italien crémeux au mascarpone, café et cacao, préparé maison chaque jour",
    prix: "3500 FCFA",
    image: "images/tiramisu-maison.jpg",
    categorie: "Desserts"
  },
  {
    nom: "Big Mac",
    description: "Double steak haché, laitue, fromage fondu et sauce spéciale dans un pain brioché",
    prix: "5000 FCFA",
    image: "images/sddefault.jpg",
    categorie: "Plats"
  },
  {
    nom: "Djama",
    description: "Boisson locale traditionnelle togolaise, douce et désaltérante",
    prix: "500 FCFA",
    image: "images/408c0041-e4e7-4549-bc08-fa405fd6d163.jpg",
    categorie: "Boissons"
  },
  {
    nom: "Tacos",
    description: "Galette grillée garnie de viande, fromage fondu, frites et sauce fromagère maison",
    prix: "5500 FCFA",
    image: "images/UFV.jpg",
    categorie: "Plats"
  },
  {
    nom: "Salad Pasta",
    description: "Salade de pâtes fraîches avec légumes croquants, herbes aromatiques et vinaigrette légère",
    prix: "3500 FCFA",
    image: "images/Steak-Pasta-Salad-6352.jpg",
    categorie: "Plats"
  },
  {
    nom: "Crêpes au Chocolat",
    description: "Crêpes maison fines et dorées, généreusement nappées de chocolat fondant",
    prix: "1500 FCFA",
    image: "images/IMG_0851.jpg",
    categorie: "Desserts"
  },
];

const menuContainer = document.getElementById("menu-container");
menu.forEach((plat) => {
  menuContainer.innerHTML += `
    <div class="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow" data-aos="fade-up">
      <img src="${plat.image}" alt="${plat.nom}" class="w-full h-48 object-cover" />
      <div class="p-6">
        <span class="bg-amber-100 text-amber-600 text-xs font-semibold px-3 py-1 rounded-full">${plat.categorie}</span>
        <h3 class="text-xl font-bold mt-3 mb-2">${plat.nom}</h3>
        <p class="text-gray-500 text-sm leading-relaxed mb-4">${plat.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-amber-500 font-bold text-lg">${plat.prix}</span>
          <button onclick="ajouterAuPanier('${plat.nom}', '${plat.prix}')"
            class="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition-colors">
             Ajouter
          </button>
        </div>
      </div>
    </div>
  `;
});
function togglePanier(){
    const panel = document.getElementById("panier-panel");
    const overlay = document.getElementById("panier-overlay");
    panel.classList.toggle("translate-x-full");
    overlay.classList.toggle("opacity-0");
    overlay.classList.toggle("pointer-events-none");
    overlay.classList.toggle("opacity-50");
}


function ajouterAuPanier(nom ,prix){
    const existant= panier.find (p => p.nom == nom);
    if (existant) {
        existant.quantite++;
    }
    else{
        panier.push({nom , prix ,quantite:1});
    }
    mettreAjourPanier();
    togglePanier();
    notyf.success(`${nom} ajouté au panier !`);
}

function mettreAjourPanier(){
    const items = document.getElementById("panier-items");
    const count = document.getElementById("panier-count");
    const total= document.getElementById("panier-total");
    const vide = document.getElementById("panier-vide");

    const totalQuantite = panier.reduce((acc ,p) => acc + p.quantite , 0);
    count.textContent = totalQuantite;
    if (panier.length === 0){
          items.innerHTML = `<p id="panier-vide" class="text-gray-400 text-center mt-10">Votre panier est vide</p>`;
    total.textContent = "0 FCFA";
    return; 
    }

    let totalPrix =0;
    items.innerHTML = panier.map(p => {
        const prixNum = parseInt(p.prix.replace(/\D/g , ""));
        totalPrix += prixNum * p.quantite;
         return `
      <div class= flex items-center justify-between gap-4 py-3 border-b border-gray-100">
        <div class=" flex-1">
          <p class="font-semibold text-sm">${p.nom}</p>
          <p class="text-amber-500 text-sm">${p.prix}</p>
        </div>
        <div class="  flex items-center gap-2">
          <button onclick="changerQuantite('${p.nom}', -1)"
            class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 font-bold text-lg leading-none">−</button>
          <span class="font-semibold w-4 text-center">${p.quantite}</span>
          <button onclick="changerQuantite('${p.nom}', 1)"
            class="w-7 h-7 rounded-full border border-gray-200 hover:bg-gray-100 font-bold text-lg leading-none">+</button>
        </div>
      </div>
    `;
  }).join("");
  total.textContent= totalPrix.toLocaleString() +" FCFA"
    
}
function changerQuantite(nom ,delta){
    const item = panier.find(p => p.nom === nom);
    if(!item) return;
    item.quantite += delta;
    if(item.quantite <= 0)  panier = panier.filter(p => p.nom !== nom);
    mettreAjourPanier();
}
function viderPanier(){
    panier = [];
    item =0 ;
    items =0;
    mettreAjourPanier();
    notyf.success('Panier Vide')
}
function commanderPanier(){
    if (panier.length === 0 ) return;
const lignes = panier.map(p => `- ${p.nom} x${p.quantite} (${p.prix})`).join("\n");
  const total = document.getElementById("panier-total").textContent;
  const message = `Bonjour ROMYFOOD, je voudrais commander :\n${lignes}\n\nTotal : ${total}`;
  window.open(`https://wa.me/22891127634?text=${encodeURIComponent(message)}`, "_blank");
}