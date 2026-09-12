/* =========================================================================
   SAHEL BTP — Application de gestion des matériaux
   HTML / CSS / JavaScript pur — sans framework, sans étape de build.
   Toutes les données sont stockées dans le navigateur (localStorage).
   ========================================================================= */

// ---------------------------------------------------------------------------
// Icônes (SVG inline, style trait fin façon Feather Icons)
// ---------------------------------------------------------------------------
const ICONS = {
  dashboard: '<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>',
  boxes: '<path d="M2 8l10-5 10 5-10 5-10-5zm0 8l10 5 10-5M2 8v8m20-8v8M12 13v8"/>',
  tag: '<path d="M20.59 13.41L11 3.83A2 2 0 009.59 3.2H4a1 1 0 00-1 1v5.59a2 2 0 00.59 1.41l9.58 9.58a2 2 0 002.82 0l4.6-4.6a2 2 0 000-2.83z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  warehouse: '<path d="M3 21V9l9-5 9 5v12H3z"/><path d="M9 21v-6h6v6"/>',
  arrowDown: '<path d="M12 3v14m0 0l6-6m-6 6l-6-6"/>',
  arrowUp: '<path d="M12 21V7m0 0l6 6m-6-6l-6 6"/>',
  arrowLR: '<path d="M17 3l4 4-4 4M3 7h18M7 21l-4-4 4-4M21 17H3"/>',
  clipboardList: '<path d="M9 3h6v3H9zM6 3h1v4h10V3h1a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M8 11h8M8 15h8M8 19h5"/>',
  hardHat: '<path d="M4 18v-2a8 8 0 0116 0v2"/><path d="M12 8v3M2 18h20"/>',
  fileText: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>',
  clipboardType: '<path d="M9 3h6v3H9zM6 3h1v4h10V3h1a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M9 12h6M12 12v6"/>',
  packageCheck: '<path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8"/><path d="M9 12l1.5 1.5L14 10"/>',
  bell: '<path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>',
  userCog: '<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 014-4h3.5"/><circle cx="18" cy="17" r="2.5"/><path d="M18 13.5v1M18 19.5v1M14.5 17h1M20.5 17h1M15.5 14l.7.7M20 19l.7.7M15.5 20l.7-.7M20 15l.7-.7"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.14.36.4.66.73.86"/>',
  scroll: '<path d="M8 21h8a2 2 0 002-2V9l-6-6H6a2 2 0 00-2 2v8"/><path d="M4 15a2 2 0 002 2h1a2 2 0 002-2v-1H6a2 2 0 00-2 2z"/><path d="M14 3v6h6"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pencil: '<path d="M17 3a2.85 2.85 0 114 4L7.5 20.5 2 22l1.5-5.5z"/>',
  trash: '<path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6z"/>',
  x: '<path d="M18 6L6 18M6 6l12 12"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  alertTriangle: '<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4M12 17h.01"/>',
  xCircle: '<circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/>',
  qrcode: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z"/>',
  download: '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  logout: '<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>',
  menu: '<path d="M3 12h18M3 6h18M3 18h18"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/>',
};
function icon(name, size) {
  size = size || 16;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||'')+'</svg>';
}

// ---------------------------------------------------------------------------
// Couche de données (localStorage) — remplaçable par Supabase plus tard
// ---------------------------------------------------------------------------
const PREFIX = "sbtp_";
function uid(){ return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);}); }
function readTable(t){ const raw = localStorage.getItem(PREFIX+t); return raw ? JSON.parse(raw) : []; }
function writeTable(t, rows){ localStorage.setItem(PREFIX+t, JSON.stringify(rows)); }

const db = {
  list(table, filterFn){ const rows = readTable(table); return filterFn ? rows.filter(filterFn) : rows; },
  get(table, id){ return readTable(table).find(r=>r.id===id) || null; },
  insert(table, obj){
    const rows = readTable(table);
    const row = Object.assign({ id: obj.id || uid(), created_at: new Date().toISOString() }, obj);
    rows.push(row); writeTable(table, rows);
    logActivity(table, "create", row);
    pushToSupabase(table, "create", row);
    return row;
  },
  update(table, id, patch){
    const rows = readTable(table);
    const idx = rows.findIndex(r=>r.id===id);
    if (idx===-1) return null;
    rows[idx] = Object.assign({}, rows[idx], patch, { updated_at: new Date().toISOString() });
    writeTable(table, rows);
    logActivity(table, "update", rows[idx]);
    pushToSupabase(table, "update", patch, id);
    return rows[idx];
  },
  remove(table, id){
    const rows = readTable(table);
    const row = rows.find(r=>r.id===id);
    writeTable(table, rows.filter(r=>r.id!==id));
    if (row) logActivity(table, "delete", row);
    pushToSupabase(table, "delete", null, id);
    return true;
  },
  clearAll(){
    Object.keys(localStorage).filter(k=>k.startsWith(PREFIX)).forEach(k=>localStorage.removeItem(k));
  },
};
window.db = db; // exposé pour le débogage / les tests

// ---------------------------------------------------------------------------
// Synchronisation Supabase (rend l'application dynamique / multi-appareils)
// ---------------------------------------------------------------------------
// Principe : la lecture/écriture locale (ci-dessus) reste synchrone et
// instantanée pour l'interface. En parallèle, dès qu'un projet Supabase est
// configuré dans config.js :
//   - au démarrage, toutes les tables sont téléchargées et remplacent le
//     cache local, pour repartir des données les plus à jour ;
//   - chaque création/modification/suppression est aussi répercutée vers
//     Supabase en arrière-plan ;
//   - une resynchronisation automatique a lieu toutes les 20 secondes pour
//     récupérer les changements faits par d'autres utilisateurs/appareils.
const SYNCED_TABLES = ["users","categories","warehouses","suppliers","materials","stock",
  "stock_movements","projects","project_material_requests","project_material_allocations",
  "purchase_requests","purchase_orders","goods_receipts","invoices",
  "customers","quotes","sales_orders","sales_invoices",
  "inventories","notifications","activity_logs"];

const supabaseClient = (window.CONFIG && CONFIG.SUPABASE_URL && CONFIG.SUPABASE_ANON_KEY && window.supabase)
  ? window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY)
  : null;

let lastSyncError = null;

async function syncFromSupabase(){
  if (!supabaseClient) return false;
  try {
    for (const table of SYNCED_TABLES){
      const { data, error } = await supabaseClient.from(table).select("*").order("created_at", { ascending: true });
      if (error) throw error;
      writeTable(table, data || []);
    }
    lastSyncError = null;
    return true;
  } catch (err) {
    console.warn("Synchronisation Supabase impossible :", err.message);
    lastSyncError = err.message;
    return false;
  }
}

function pushToSupabase(table, action, row, id){
  if (!supabaseClient) return;
  (async () => {
    try {
      if (action === "create") {
        const { error } = await supabaseClient.from(table).insert(row);
        if (error) throw error;
      } else if (action === "update") {
        const { error } = await supabaseClient.from(table).update(row).eq("id", id);
        if (error) throw error;
      } else if (action === "delete") {
        const { error } = await supabaseClient.from(table).delete().eq("id", id);
        if (error) throw error;
      }
      lastSyncError = null;
    } catch (err) {
      console.warn("Envoi vers Supabase impossible ("+table+" / "+action+") :", err.message);
      lastSyncError = err.message;
    }
  })();
}

function logActivity(table, action, row){
  if (table === "activity_logs") return;
  const rows = readTable("activity_logs");
  const session = JSON.parse(localStorage.getItem(PREFIX+"session") || "null");
  rows.unshift({
    id: uid(), created_at: new Date().toISOString(),
    user: session ? session.name : "Système",
    table, action,
    label: row.name || row.reference || row.number || row.title || row.id,
  });
  writeTable("activity_logs", rows.slice(0,500));
}

// ---- Logique de stock ------------------------------------------------------
function getStockLevel(materialId, warehouseId){
  const row = db.list("stock").find(s=>s.material_id===materialId && s.warehouse_id===warehouseId);
  return row ? row.quantity : 0;
}
function totalStockForMaterial(materialId){
  return db.list("stock", s=>s.material_id===materialId).reduce((sum,s)=>sum+s.quantity,0);
}
function setStockLevel(materialId, warehouseId, quantity){
  const rows = readTable("stock");
  const idx = rows.findIndex(s=>s.material_id===materialId && s.warehouse_id===warehouseId);
  if (idx===-1) rows.push({ id: uid(), material_id: materialId, warehouse_id: warehouseId, quantity });
  else rows[idx].quantity = quantity;
  writeTable("stock", rows);
}

function recordMovement(opts){
  const { type, direction, materialId, warehouseId, destinationWarehouseId, quantity, projectId, reference, reason, comment, user } = opts;
  const current = getStockLevel(materialId, warehouseId);
  if (direction === "out" && quantity > current) throw new Error("Stock insuffisant : disponible "+current+", demandé "+quantity+".");
  setStockLevel(materialId, warehouseId, direction==="out" ? current-quantity : current+quantity);
  if (type === "transfert" && destinationWarehouseId){
    const destCurrent = getStockLevel(materialId, destinationWarehouseId);
    setStockLevel(materialId, destinationWarehouseId, destCurrent + quantity);
  }
  const material = db.get("materials", materialId);
  const movement = db.insert("stock_movements", {
    number: "MVT-"+Date.now().toString().slice(-8),
    type, direction, material_id: materialId, material_name: material ? material.name : "",
    unit: material ? material.unit : "", warehouse_id: warehouseId,
    destination_warehouse_id: destinationWarehouseId || null, project_id: projectId || null,
    quantity, reference: reference||"", reason: reason||"", comment: comment||"",
    user: user||"Système", date: new Date().toISOString(),
  });
  checkStockAlerts(materialId);
  return movement;
}

function checkStockAlerts(materialId){
  const material = db.get("materials", materialId);
  if (!material) return;
  const total = totalStockForMaterial(materialId);
  const existing = db.list("notifications", n=>n.material_id===materialId && !n.read && n.category==="stock")[0];
  if (total <= 0){
    if (!existing || existing.level!=="rupture")
      db.insert("notifications",{category:"stock",level:"rupture",material_id:materialId,message:"Le matériau "+material.name+" est en rupture de stock.",read:false});
  } else if (material.min_stock && total <= Number(material.min_stock)){
    if (!existing || existing.level!=="faible")
      db.insert("notifications",{category:"stock",level:"faible",material_id:materialId,message:"Le stock de "+material.name+" est inférieur au seuil minimum ("+total+" "+material.unit+" restant).",read:false});
  }
}

// ---------------------------------------------------------------------------
// Rôles et permissions
// ---------------------------------------------------------------------------
const ROLES = {
  super_admin: "Super Administrateur", admin: "Administrateur",
  store_manager: "Responsable magasin", site_manager: "Responsable chantier",
  purchasing: "Responsable achats", accountant: "Comptable", user: "Simple utilisateur",
};
const PERMISSIONS = {
  super_admin: ["*"],
  admin: ["dashboard.view","materials.view","materials.create","materials.edit","materials.delete",
    "categories.manage","warehouses.manage","suppliers.manage","stock.view","stock.move",
    "projects.manage","projects.view","requests.validate","inventory.manage","reports.view","reports.export",
    "purchases.manage","purchases.receive","invoices.manage","sales.manage","notifications.view","users.view"],
  store_manager: ["dashboard.view","materials.view","stock.view","stock.move","inventory.manage","purchases.receive","notifications.view"],
  site_manager: ["dashboard.view","materials.view","projects.view","requests.create","requests.view","notifications.view"],
  purchasing: ["dashboard.view","materials.view","suppliers.manage","stock.view","purchases.manage","purchases.receive","invoices.manage","sales.manage","notifications.view"],
  accountant: ["dashboard.view","reports.view","reports.export","invoices.manage","sales.manage","notifications.view"],
  user: ["dashboard.view","materials.view","notifications.view"],
};
function can(user, perm){
  if (!user) return false;
  const perms = PERMISSIONS[user.role] || [];
  return perms.includes("*") || perms.includes(perm);
}

// ---------------------------------------------------------------------------
// Données de démonstration
// ---------------------------------------------------------------------------
function hasAnyUser(){
  return db.list("users").length > 0;
}

// ---------------------------------------------------------------------------
// Aides de formatage / export
// ---------------------------------------------------------------------------
function formatXAF(n){ return Number(n||0).toLocaleString("fr-FR") + " FCFA"; }
function formatDate(d){ if(!d) return "—"; return new Date(d).toLocaleDateString("fr-FR",{day:"2-digit",month:"short",year:"numeric"}); }
function formatDateTime(d){ if(!d) return "—"; return new Date(d).toLocaleString("fr-FR",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}); }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

function exportToCSV(filename, rows){
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const csv = [headers.join(","), ...rows.map(r=>headers.map(h=>'"'+String(r[h]==null?"":r[h]).replace(/"/g,'""')+'"').join(","))].join("\n");
  const blob = new Blob(["\uFEFF"+csv], {type:"text/csv;charset=utf-8;"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href=url; a.download=filename; a.click();
  URL.revokeObjectURL(url);
}

function emptyState(label){
  return '<div class="empty-state">'+icon("inbox",30)+'<div style="margin-top:8px">'+esc(label)+'</div></div>';
}

// ---------------------------------------------------------------------------
// État global de l'application
// ---------------------------------------------------------------------------
const state = { page: "dashboard", sidebarOpen: false, modal: null };
window.appState = state; // exposé pour le débogage / les tests

function currentUser(){
  const raw = localStorage.getItem(PREFIX+"session");
  return raw ? JSON.parse(raw) : null;
}
function login(email, password){
  const found = db.list("users").find(u=>u.email.toLowerCase()===email.toLowerCase() && u.password===password);
  if (!found) throw new Error("Email ou mot de passe incorrect.");
  const session = {id:found.id, name:found.name, email:found.email, role:found.role};
  localStorage.setItem(PREFIX+"session", JSON.stringify(session));
  return session;
}
function logout(){ localStorage.removeItem(PREFIX+"session"); state.page="dashboard"; render(); }

// ---------------------------------------------------------------------------
// Modale générique
// ---------------------------------------------------------------------------
function openModal(title, bodyHtml, width){
  state.modal = { title, bodyHtml, width };
  renderModal();
}
function closeModal(){ state.modal = null; renderModal(); }
function renderModal(){
  const el = document.getElementById("modal-root");
  if (!state.modal){ el.innerHTML=""; return; }
  el.innerHTML =
    '<div class="modal-overlay" id="modal-overlay">'+
      '<div class="modal" style="'+(state.modal.width?('max-width:'+state.modal.width+'px'):'')+'">'+
        '<div class="modal-header"><h3>'+esc(state.modal.title)+'</h3>'+
          '<button class="modal-close" data-action="close-modal">'+icon("x",17)+'</button></div>'+
        '<div class="modal-body">'+state.modal.bodyHtml+'</div>'+
      '</div>'+
    '</div>';
  document.getElementById("modal-overlay").addEventListener("mousedown",(e)=>{ if(e.target.id==="modal-overlay") closeModal(); });
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
const NAV = [
  { section:null, items:[
    {id:"dashboard", label:"Tableau de bord", icon:"dashboard", perm:"dashboard.view"},
  ]},
  { section:"Stock", items:[
    {id:"materiaux", label:"Matériaux", icon:"boxes", perm:"materials.view"},
    {id:"categories", label:"Catégories", icon:"tag", perm:"categories.manage"},
    {id:"depots", label:"Dépôts / magasins", icon:"warehouse", perm:"warehouses.manage"},
    {id:"entrees", label:"Entrées", icon:"arrowDown", perm:"stock.move"},
    {id:"sorties", label:"Sorties", icon:"arrowUp", perm:"stock.move"},
    {id:"transferts", label:"Transferts", icon:"arrowLR", perm:"stock.move"},
    {id:"inventaire", label:"Inventaire", icon:"clipboardList", perm:"inventory.manage"},
  ]},
  { section:"Achats", items:[
    {id:"fournisseurs", label:"Fournisseurs", icon:"cart", perm:"suppliers.manage"},
    {id:"demandes-achat", label:"Demandes d'achat", icon:"fileText", perm:"purchases.manage"},
    {id:"commandes", label:"Bons de commande", icon:"clipboardType", perm:"purchases.manage"},
    {id:"receptions", label:"Réceptions", icon:"packageCheck", perm:"purchases.receive"},
    {id:"factures", label:"Factures", icon:"fileText", perm:"invoices.manage"},
  ]},
  { section:"Chantiers", items:[
    {id:"chantiers", label:"Liste des chantiers", icon:"hardHat", perm:"projects.view"},
    {id:"besoins", label:"Besoins", icon:"fileText", perm:"projects.view"},
    {id:"affectations", label:"Affectations", icon:"clipboardList", perm:"projects.view"},
    {id:"consommations", label:"Consommations", icon:"arrowUp", perm:"projects.view"},
    {id:"couts", label:"Coûts", icon:"fileText", perm:"projects.view"},
  ]},
  { section:"Ventes", items:[
    {id:"clients", label:"Clients", icon:"userCog", perm:"sales.manage"},
    {id:"devis", label:"Devis", icon:"fileText", perm:"sales.manage"},
    {id:"commandes-vente", label:"Commandes", icon:"cart", perm:"sales.manage"},
    {id:"factures-vente", label:"Factures", icon:"fileText", perm:"sales.manage"},
  ]},
  { section:"Suivi", items:[
    {id:"rapports", label:"Rapports", icon:"fileText", perm:"reports.view"},
    {id:"notifications", label:"Notifications", icon:"bell", perm:"notifications.view"},
    {id:"journal", label:"Journal d'activité", icon:"scroll", perm:"reports.view"},
  ]},
  { section:"Administration", items:[
    {id:"utilisateurs", label:"Utilisateurs", icon:"userCog", perm:"users.view"},
    {id:"permissions", label:"Permissions", icon:"shield", perm:"users.view"},
    {id:"parametres", label:"Paramètres", icon:"settings", perm:null},
  ]},
];
function navLabel(pageId){
  for (const sec of NAV) for (const it of sec.items) if (it.id===pageId) return it.label;
  return "Sahel BTP";
}

// ---------------------------------------------------------------------------
// Rendu principal
// ---------------------------------------------------------------------------
function render(){
  const user = currentUser();
  const app = document.getElementById("app");
  if (!user){
    if (!hasAnyUser()){
      app.innerHTML = renderSetup();
      attachSetupEvents();
      return;
    }
    app.innerHTML = renderLogin();
    attachLoginEvents();
    return;
  }
  app.innerHTML = renderShell(user);
  attachShellEvents();
  renderPage();
}

function renderLogin(){
  return '<div class="login-screen">'+
    '<div class="login-visual">'+
      '<div class="top"><div class="mark2">SB</div><div class="brand">SAHEL BTP</div></div>'+
      '<div class="headline">Chaque matériau, traçable de l\'achat jusqu\'au chantier.</div>'+
      '<div class="stats"><div><b>'+db.list("materials").length+'</b>matériaux suivis</div><div><b>'+db.list("warehouses").length+'</b>dépôts</div><div><b>'+db.list("projects").filter(p=>p.status==="En cours").length+'</b>chantiers actifs</div></div>'+
    '</div>'+
    '<div class="login-form-col"><form class="login-form" id="login-form">'+
      '<h2>Connexion</h2><div class="sub">Accédez à la plateforme de gestion des matériaux.</div>'+
      '<div id="login-error"></div>'+
      '<div class="form-field" style="margin-bottom:12px"><label>Adresse e-mail</label><input type="email" id="login-email" placeholder="vous@sahelbtp.cm" required /></div>'+
      '<div class="form-field"><label>Mot de passe</label><input type="password" id="login-password" placeholder="••••••••" required /></div>'+
      '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px">Se connecter</button>'+
    '</form></div>'+
  '</div>';
}
function attachLoginEvents(){
  document.getElementById("login-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    try{
      login(document.getElementById("login-email").value, document.getElementById("login-password").value);
      render();
    }catch(err){
      document.getElementById("login-error").innerHTML = '<div class="login-error">'+esc(err.message)+'</div>';
    }
  });
}

// ---------------------------------------------------------------------------
// Écran de configuration initiale (premier lancement, aucun utilisateur)
// ---------------------------------------------------------------------------
function renderSetup(){
  return '<div class="login-screen">'+
    '<div class="login-visual">'+
      '<div class="top"><div class="mark2">SB</div><div class="brand">SAHEL BTP</div></div>'+
      '<div class="headline">Bienvenue. Créons votre compte administrateur pour commencer.</div>'+
      '<div class="stats"><div style="max-width:320px">Aucune donnée de démonstration : l\'application démarre totalement vide. Vous créerez vos matériaux, dépôts, fournisseurs et chantiers vous-même.</div></div>'+
    '</div>'+
    '<div class="login-form-col"><form class="login-form" id="setup-form">'+
      '<h2>Premier lancement</h2><div class="sub">Ce compte aura tous les droits (Super Administrateur).</div>'+
      '<div id="setup-error"></div>'+
      '<div class="form-field" style="margin-bottom:12px"><label>Votre nom complet</label><input id="setup-name" placeholder="Ex : Ibrahim Barrou" required /></div>'+
      '<div class="form-field" style="margin-bottom:12px"><label>Adresse e-mail</label><input type="email" id="setup-email" placeholder="vous@sahelbtp.cm" required /></div>'+
      '<div class="form-field"><label>Mot de passe</label><input type="password" id="setup-password" placeholder="Choisissez un mot de passe" minlength="4" required /></div>'+
      '<button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px">'+icon("check",14)+' Créer mon compte et démarrer</button>'+
    '</form></div>'+
  '</div>';
}
function attachSetupEvents(){
  document.getElementById("setup-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("setup-name").value.trim();
    const email = document.getElementById("setup-email").value.trim();
    const password = document.getElementById("setup-password").value;
    if (!name || !email || !password){
      document.getElementById("setup-error").innerHTML = '<div class="login-error">Merci de remplir tous les champs.</div>';
      return;
    }
    db.insert("users", { name, email, password, role: "super_admin" });
    try{
      login(email, password);
      render();
    }catch(err){
      document.getElementById("setup-error").innerHTML = '<div class="login-error">'+esc(err.message)+'</div>';
    }
  });
}

function renderShell(user){
  const initials = user.name.split(" ").map(p=>p[0]).slice(0,2).join("").toUpperCase();
  const unread = db.list("notifications", n=>!n.read).length;
  let navHtml = "";
  NAV.forEach(sec=>{
    const visible = sec.items.filter(it=>!it.perm || can(user,it.perm));
    if (!visible.length) return;
    navHtml += (sec.section ? '<div class="nav-label">'+esc(sec.section)+'</div>' : '');
    visible.forEach(it=>{
      navHtml += '<a href="#" class="nav-item'+(state.page===it.id?' active':'')+'" data-nav="'+it.id+'">'+icon(it.icon,15)+'<span>'+esc(it.label)+'</span></a>';
    });
  });
  return (
    '<div class="sidebar-overlay'+(state.sidebarOpen?' open':'')+'" id="sidebar-overlay"></div>'+
    '<div class="app-shell">'+
      '<aside class="sidebar'+(state.sidebarOpen?' open':'')+'" id="sidebar">'+
        '<div class="sidebar-brand"><div class="mark">SB</div><div><div class="name">SAHEL BTP</div><div class="sub">Gestion des matériaux</div></div></div>'+
        '<nav class="sidebar-nav">'+navHtml+'</nav>'+
        '<div class="sidebar-footer">'+esc(user.name)+'<br>Sahel BTP © 2026</div>'+
      '</aside>'+
      '<div class="main-col">'+
        '<header class="topbar">'+
          '<div style="display:flex;align-items:center;gap:6px">'+
            '<button class="hamburger" id="hamburger-btn">'+icon("menu",20)+'</button>'+
            '<div class="topbar-title">'+esc(navLabel(state.page))+'</div>'+
          '</div>'+
          '<div style="display:flex;align-items:center;gap:14px">'+
            (supabaseClient ? '<span class="sync-indicator online" title="Connecté à Supabase">'+icon("check",11)+' En ligne</span>' : '<span class="sync-indicator offline" title="Mode local, non connecté à Supabase">'+icon("alertTriangle",11)+' Local</span>')+
            '<button class="icon-btn" id="notif-btn" title="Notifications">'+icon("bell",18)+(unread>0?'<span class="dot"></span>':'')+'</button>'+
            '<div class="user-chip"><div class="avatar">'+esc(initials)+'</div><div class="who"><div class="n">'+esc(user.name)+'</div><div class="r">'+esc(ROLES[user.role]||user.role)+'</div></div></div>'+
            '<button class="icon-btn" id="logout-btn" title="Déconnexion">'+icon("logout",18)+'</button>'+
          '</div>'+
        '</header>'+
        '<div id="page-content"></div>'+
      '</div>'+
    '</div>'+
    '<div id="modal-root"></div>'
  );
}

function attachShellEvents(){
  document.querySelectorAll("[data-nav]").forEach(a=>{
    a.addEventListener("click",(e)=>{ e.preventDefault(); state.page=a.dataset.nav; state.sidebarOpen=false; render(); });
  });
  document.getElementById("logout-btn").addEventListener("click", logout);
  document.getElementById("notif-btn").addEventListener("click",()=>{ state.page="notifications"; render(); });
  const hb = document.getElementById("hamburger-btn");
  if (hb) hb.addEventListener("click",()=>{ state.sidebarOpen=true; render(); });
  const ov = document.getElementById("sidebar-overlay");
  if (ov) ov.addEventListener("click",()=>{ state.sidebarOpen=false; render(); });
}

function renderPage(){
  const user = currentUser();
  const container = document.getElementById("page-content");
  const pageDef = NAV.flatMap(s=>s.items).find(it=>it.id===state.page);
  if (pageDef && pageDef.perm && !can(user, pageDef.perm)){
    container.innerHTML = '<div class="page">'+emptyState("Vous n'avez pas la permission d'accéder à cette page.")+'</div>';
    return;
  }
  const renderers = {
    dashboard: pageDashboard, materiaux: pageMaterials, categories: pageCategories, depots: pageWarehouses,
    entrees: ()=>pageStockMove("in"), sorties: ()=>pageStockMove("out"), transferts: pageTransfers,
    inventaire: pageInventory, fournisseurs: pageSuppliers, "demandes-achat": pagePurchaseRequests,
    commandes: pagePurchaseOrders, receptions: pageReceptions, factures: pageInvoices,
    chantiers: pageProjects, besoins: pageRequests, affectations: pageAffectations,
    consommations: pageConsommations, couts: pageCouts,
    clients: pageClients, devis: pageQuotes, "commandes-vente": pageSalesOrders, "factures-vente": pageSalesInvoices,
    rapports: pageReports, notifications: pageNotifications,
    journal: pageActivityLog, utilisateurs: pageUsers, permissions: pagePermissions, parametres: pageSettings,
  };
  const fn = renderers[state.page] || pageDashboard;
  container.innerHTML = fn();
  const after = AFTER_RENDER[state.page];
  if (after) after();
}
const AFTER_RENDER = {}; // pages register post-render DOM listeners here

// ---------------------------------------------------------------------------
// Page : Tableau de bord
// ---------------------------------------------------------------------------
function pageDashboard(){
  const materials = db.list("materials");
  const warehouses = db.list("warehouses");
  const projects = db.list("projects");
  const suppliers = db.list("suppliers");
  const movements = db.list("stock_movements");
  const purchaseOrders = db.list("purchase_orders");

  const startOfMonth = new Date(); startOfMonth.setDate(1); startOfMonth.setHours(0,0,0,0);
  const monthMovements = movements.filter(m=>new Date(m.date)>=startOfMonth);
  const entriesThisMonth = monthMovements.filter(m=>m.direction==="in").length;
  const exitsThisMonth = monthMovements.filter(m=>m.direction==="out").length;
  const purchasesThisMonth = purchaseOrders.filter(o=>new Date(o.created_at)>=startOfMonth)
    .reduce((sum,o)=>sum+o.lines.reduce((s,l)=>s+l.quantity_ordered*l.unit_price,0),0);
  const stockValue = materials.reduce((sum,m)=>sum+totalStockForMaterial(m.id)*Number(m.purchase_price||0),0);
  const lowStock = materials.filter(m=>{ const q=totalStockForMaterial(m.id); return m.min_stock && q<=Number(m.min_stock) && q>0; });
  const outOfStock = materials.filter(m=>totalStockForMaterial(m.id)<=0);
  const activeProjects = projects.filter(p=>p.status==="En cours").length;

  function kpi(label, value, tone){
    return '<div class="kpi'+(tone?' '+tone:'')+'"><div class="label">'+esc(label)+'</div><div class="value">'+value+'</div></div>';
  }

  const alertsRows = [...outOfStock, ...lowStock].map(m=>{
    const q = totalStockForMaterial(m.id);
    return '<tr><td>'+esc(m.name)+'</td><td class="mono muted">'+esc(m.reference)+'</td><td class="num">'+q+' '+esc(m.unit)+'</td><td class="num muted">'+m.min_stock+' '+esc(m.unit)+'</td><td>'+
      (q<=0 ? '<span class="badge badge-red">'+icon("xCircle",11)+' Rupture</span>' : '<span class="badge badge-amber">'+icon("alertTriangle",11)+' Faible</span>')+'</td></tr>';
  }).join('');

  const movementRows = movements.slice(0,8).map(m=>
    '<tr><td>'+(m.direction==="in"?icon("arrowDown",14):icon("arrowUp",14))+'</td><td>'+esc(m.material_name)+'</td><td class="num">'+(m.direction==="in"?"+":"-")+m.quantity+' '+esc(m.unit)+'</td><td class="muted">'+formatDateTime(m.date)+'</td></tr>'
  ).join('');

  return '<div class="page">'+
    '<div class="page-header"><div><h1>Tableau de bord</h1><div class="desc">Vue d\'ensemble de l\'activité Sahel BTP en temps réel.</div></div></div>'+
    '<div class="kpi-grid">'+
      kpi("Matériaux référencés", materials.length)+
      kpi("Dépôts / magasins", warehouses.length)+
      kpi("Chantiers actifs", activeProjects)+
      kpi("Fournisseurs", suppliers.length)+
      kpi("Entrées du mois", entriesThisMonth)+
      kpi("Sorties du mois", exitsThisMonth)+
      kpi("Achats du mois", formatXAF(purchasesThisMonth))+
      kpi("Valeur du stock", formatXAF(stockValue))+
      kpi("Stock faible", lowStock.length, "warn")+
      kpi("Ruptures", outOfStock.length, "danger")+
    '</div>'+
    '<div class="grid-2" style="margin-bottom:16px">'+
      '<div class="card"><div class="card-header"><h3>Évolution du stock (valeur, 6 derniers mois)</h3></div><div class="card-body"><canvas id="chart-stock-evolution" height="220"></canvas></div></div>'+
      '<div class="card"><div class="card-header"><h3>Consommation par chantier</h3></div><div class="card-body"><canvas id="chart-project-consumption" height="220"></canvas></div></div>'+
    '</div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Entrées vs sorties vs ajustements (14 derniers jours)</h3></div><div class="card-body"><canvas id="chart-flow" height="220"></canvas></div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Alertes de stock</h3></div>'+
      (alertsRows ? '<table class="data-table"><thead><tr><th>Matériau</th><th>Référence</th><th>Stock actuel</th><th>Seuil min</th><th>Statut</th></tr></thead><tbody>'+alertsRows+'</tbody></table>'
        : '<div class="card-body muted" style="font-size:13px">Aucune alerte active — tous les niveaux de stock sont sains.</div>')+
    '</div>'+
    '<div class="card"><div class="card-header"><h3>Derniers mouvements</h3></div>'+
      (movementRows ? '<table class="data-table"><thead><tr><th></th><th>Matériau</th><th>Quantité</th><th>Date</th></tr></thead><tbody>'+movementRows+'</tbody></table>'
        : '<div class="card-body muted" style="font-size:13px">Aucun mouvement enregistré.</div>')+
    '</div>'+
  '</div>';
}

// ---- Données pour les graphiques du tableau de bord ------------------------
const MONTH_NAMES_FR = ["Janv.","Févr.","Mars","Avr.","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."];

function computeStockEvolutionData(){
  const materials = db.list("materials");
  const movements = db.list("stock_movements");
  const currentValue = materials.reduce((sum,m)=>sum+totalStockForMaterial(m.id)*Number(m.purchase_price||0),0);
  const priceByMaterial = Object.fromEntries(materials.map(m=>[m.id, Number(m.purchase_price||0)]));

  const months = [];
  const now = new Date();
  for (let i=5;i>=0;i--){
    const d = new Date(now.getFullYear(), now.getMonth()-i, 1);
    months.push(d);
  }
  const labels = months.map(d=>MONTH_NAMES_FR[d.getMonth()]);
  const values = months.map((monthStart)=>{
    const monthEnd = new Date(monthStart.getFullYear(), monthStart.getMonth()+1, 1);
    // valeur à la fin du mois = valeur actuelle - effet net des mouvements survenus APRÈS cette date
    let delta = 0;
    movements.forEach(m=>{
      if (m.type === "transfert") return; // ne change pas le stock total de l'entreprise
      if (new Date(m.date) > monthEnd){
        const price = priceByMaterial[m.material_id] || 0;
        delta += (m.direction === "in" ? 1 : -1) * Number(m.quantity) * price;
      }
    });
    return Math.max(0, Math.round(currentValue - delta));
  });
  return { labels, values };
}

function computeFlowData(){
  const movements = db.list("stock_movements");
  const days = [];
  for (let i=13;i>=0;i--){ const d=new Date(); d.setDate(d.getDate()-i); days.push(d); }
  const labels = days.map(d=>d.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit"}));
  const entrees = [], sorties = [], ajustements = [];
  days.forEach(d=>{
    const dayStr = d.toISOString().slice(0,10);
    const dayMovs = movements.filter(m=>(m.date||"").slice(0,10)===dayStr);
    entrees.push(dayMovs.filter(m=>m.direction==="in" && !m.type.startsWith("ajustement")).reduce((s,m)=>s+Number(m.quantity),0));
    sorties.push(dayMovs.filter(m=>m.direction==="out" && !m.type.startsWith("ajustement")).reduce((s,m)=>s+Number(m.quantity),0));
    ajustements.push(dayMovs.filter(m=>m.type.startsWith("ajustement")).reduce((s,m)=>s+Number(m.quantity),0));
  });
  return { labels, entrees, sorties, ajustements };
}

function computeProjectConsumptionData(){
  const projects = db.list("projects");
  const movements = db.list("stock_movements");
  const materials = db.list("materials");
  const priceByMaterial = Object.fromEntries(materials.map(m=>[m.id, Number(m.purchase_price||0)]));
  const labels = projects.map(p=>p.code);
  const values = projects.map(p=>
    movements.filter(m=>m.project_id===p.id && m.direction==="out")
      .reduce((s,m)=>s+Number(m.quantity)*(priceByMaterial[m.material_id]||0),0)
  );
  return { labels, values };
}

const dashboardCharts = {};
function destroyDashboardCharts(){
  Object.values(dashboardCharts).forEach(c=>{ if (c) c.destroy(); });
}
AFTER_RENDER["dashboard"] = function(){
  if (typeof Chart === "undefined") return; // Chart.js non chargé (ex. pas de connexion internet)
  try {
    destroyDashboardCharts();
    const stockEvo = computeStockEvolutionData();
    const flow = computeFlowData();
    const consumption = computeProjectConsumptionData();

    const ctx1 = document.getElementById("chart-stock-evolution");
    if (ctx1) dashboardCharts.stockEvolution = new Chart(ctx1, {
      type: "bar",
      data: { labels: stockEvo.labels, datasets: [{ label: "Valeur du stock (FCFA)", data: stockEvo.values, backgroundColor: "#016FBA", borderRadius: 3 }] },
      options: { responsive:true, plugins:{legend:{display:false}}, scales:{ y:{ beginAtZero:true, ticks:{ callback:(v)=>Number(v).toLocaleString("fr-FR") } } } },
    });

    const ctx2 = document.getElementById("chart-flow");
    if (ctx2) dashboardCharts.flow = new Chart(ctx2, {
      type: "line",
      data: { labels: flow.labels, datasets: [
        { label:"Entrées", data: flow.entrees, borderColor:"#2E7D4F", backgroundColor:"#2E7D4F", tension:0.3 },
        { label:"Sorties", data: flow.sorties, borderColor:"#E8590C", backgroundColor:"#E8590C", tension:0.3 },
        { label:"Ajustements", data: flow.ajustements, borderColor:"#B8860B", backgroundColor:"#B8860B", tension:0.3 },
      ]},
      options: { responsive:true, plugins:{legend:{position:"bottom", labels:{boxWidth:10, font:{size:11}}}}, scales:{ y:{ beginAtZero:true } } },
    });

    const ctx3 = document.getElementById("chart-project-consumption");
    if (ctx3) dashboardCharts.consumption = new Chart(ctx3, {
      type: "bar",
      data: { labels: consumption.labels.length?consumption.labels:["Aucun chantier"], datasets: [{ label:"Consommation (FCFA)", data: consumption.values.length?consumption.values:[0], backgroundColor:"#013F6B", borderRadius:3 }] },
      options: { responsive:true, indexAxis:"y", plugins:{legend:{display:false}}, scales:{ x:{ beginAtZero:true, ticks:{ callback:(v)=>Number(v).toLocaleString("fr-FR") } } } },
    });
  } catch(err){
    console.warn("Impossible d'afficher les graphiques du tableau de bord :", err.message);
  }
};

// ---------------------------------------------------------------------------
// Page : Matériaux
// ---------------------------------------------------------------------------
const UNITS = ["pièce","sac","kg","tonne","mètre","m²","m³","litre","carton","paquet","rouleau","barre","palette","feuille"];
let materialSearchQuery = "";

function pageMaterials(){
  const user = currentUser();
  const materials = db.list("materials").filter(m=>{
    const q = materialSearchQuery.toLowerCase();
    return m.name.toLowerCase().includes(q) || m.reference.toLowerCase().includes(q);
  });
  const categories = db.list("categories");
  const suppliers = db.list("suppliers");

  const rows = materials.map(m=>{
    const qty = totalStockForMaterial(m.id);
    const cat = categories.find(c=>c.id===m.category_id);
    const sup = suppliers.find(s=>s.id===m.supplier_id);
    const low = m.min_stock && qty<=Number(m.min_stock);
    return '<tr><td class="mono">'+esc(m.reference)+'</td><td>'+esc(m.name)+'</td>'+
      '<td><span class="badge badge-grey">'+esc(cat?cat.name:"—")+'</span></td>'+
      '<td class="muted">'+esc(m.unit)+'</td>'+
      '<td class="num">'+(low?('<span class="badge '+(qty<=0?"badge-red":"badge-amber")+'">'+qty+' '+esc(m.unit)+'</span>'):(qty+' '+esc(m.unit)))+'</td>'+
      '<td class="num">'+Number(m.purchase_price||0).toLocaleString("fr-FR")+' F</td>'+
      '<td class="num">'+Number(m.sale_price||0).toLocaleString("fr-FR")+' F</td>'+
      '<td class="muted">'+esc(sup?sup.company:"—")+'</td>'+
      '<td><div style="display:flex;gap:4px">'+
        '<button class="btn btn-ghost btn-sm" onclick="openQrModal(\''+m.id+'\')" title="QR Code">'+icon("qrcode",14)+'</button>'+
        (can(user,"materials.edit")?'<button class="btn btn-ghost btn-sm" onclick="openMaterialModal(\''+m.id+'\')">'+icon("pencil",14)+'</button>':'')+
        (can(user,"materials.delete")?'<button class="btn btn-ghost btn-sm" onclick="deleteMaterial(\''+m.id+'\')">'+icon("trash",14)+'</button>':'')+
      '</div></td></tr>';
  }).join('');

  return '<div class="page">'+
    '<div class="page-header"><div><h1>Matériaux</h1><div class="desc">Fiche complète de chaque matériau : prix, seuils, fournisseur, catégorie.</div></div>'+
      (can(user,"materials.create") ? '<button class="btn btn-primary" onclick="openMaterialModal()">'+icon("plus",14)+' Nouveau matériau</button>' : '')+
    '</div>'+
    '<div class="card">'+
      '<div class="table-toolbar"><div class="search-input">'+icon("search",13)+'<input id="material-search" placeholder="Rechercher par nom ou référence…" value="'+esc(materialSearchQuery)+'" oninput="materialSearchQuery=this.value; renderPage();" /></div>'+
      '<div class="muted" style="font-size:12px">'+materials.length+' matériau(x)</div></div>'+
      (rows ? '<table class="data-table"><thead><tr><th>Référence</th><th>Nom</th><th>Catégorie</th><th>Unité</th><th>Stock total</th><th>Prix achat</th><th>Prix vente</th><th>Fournisseur</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'
        : emptyState("Aucun matériau. Ajoutez-en un pour démarrer."))+
    '</div>'+
  '</div>';
}

function openMaterialModal(id){
  const user = currentUser();
  const m = id ? db.get("materials", id) : {reference:"",name:"",category_id:(db.list("categories")[0]||{}).id,unit:"pièce",purchase_price:"",sale_price:"",min_stock:"",max_stock:"",supplier_id:(db.list("suppliers")[0]||{}).id,status:"actif"};
  const categories = db.list("categories");
  const suppliers = db.list("suppliers");
  const body =
    '<form id="material-form" onsubmit="submitMaterial(event,\''+(id||'')+'\')">'+
      '<div class="form-grid">'+
        '<div class="form-field"><label>Référence / code</label><input required id="mf-reference" value="'+esc(m.reference)+'" placeholder="CIM-001" /></div>'+
        '<div class="form-field"><label>Nom du matériau</label><input required id="mf-name" value="'+esc(m.name)+'" placeholder="Ciment 50 kg" /></div>'+
        '<div class="form-field"><label>Catégorie</label><select id="mf-category">'+categories.map(c=>'<option value="'+c.id+'"'+(c.id===m.category_id?' selected':'')+'>'+esc(c.name)+'</option>').join('')+'</select></div>'+
        '<div class="form-field"><label>Unité</label><select id="mf-unit">'+UNITS.map(u=>'<option value="'+u+'"'+(u===m.unit?' selected':'')+'>'+u+'</option>').join('')+'</select></div>'+
        '<div class="form-field"><label>Prix d\'achat (FCFA)</label><input type="number" min="0" id="mf-purchase" value="'+esc(m.purchase_price)+'" /></div>'+
        '<div class="form-field"><label>Prix de vente (FCFA)</label><input type="number" min="0" id="mf-sale" value="'+esc(m.sale_price)+'" /></div>'+
        '<div class="form-field"><label>Stock minimum</label><input type="number" min="0" id="mf-min" value="'+esc(m.min_stock)+'" /></div>'+
        '<div class="form-field"><label>Stock maximum</label><input type="number" min="0" id="mf-max" value="'+esc(m.max_stock)+'" /></div>'+
        '<div class="form-field full"><label>Fournisseur principal</label><select id="mf-supplier">'+suppliers.map(s=>'<option value="'+s.id+'"'+(s.id===m.supplier_id?' selected':'')+'>'+esc(s.company)+'</option>').join('')+'</select></div>'+
      '</div>'+
      '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div>'+
    '</form>';
  openModal(id?"Modifier le matériau":"Nouveau matériau", body, 620);
}
function submitMaterial(e, id){
  e.preventDefault();
  const data = {
    reference: document.getElementById("mf-reference").value,
    name: document.getElementById("mf-name").value,
    category_id: document.getElementById("mf-category").value,
    unit: document.getElementById("mf-unit").value,
    purchase_price: Number(document.getElementById("mf-purchase").value||0),
    sale_price: Number(document.getElementById("mf-sale").value||0),
    min_stock: Number(document.getElementById("mf-min").value||0),
    max_stock: Number(document.getElementById("mf-max").value||0),
    supplier_id: document.getElementById("mf-supplier").value,
    status: "actif",
  };
  if (id) db.update("materials", id, data); else db.insert("materials", data);
  closeModal(); render();
}
function deleteMaterial(id){
  const m = db.get("materials", id);
  if (confirm('Supprimer le matériau « '+m.name+' » ?')){ db.remove("materials", id); render(); }
}
function openQrModal(id){
  const m = db.get("materials", id);
  const warehouses = db.list("warehouses");
  const lines = warehouses.map(w=>w.name+": "+getStockLevel(m.id,w.id)+" "+m.unit).join('\n');
  const payload = m.reference+"\n"+m.name+"\n\nStock par dépôt:\n"+lines+"\n\nTotal: "+totalStockForMaterial(m.id)+" "+m.unit;
  const body = '<div style="text-align:center"><div id="qr-target" style="display:inline-block;margin-bottom:14px"></div>'+
    '<div class="mono muted" style="font-size:12px;margin-bottom:14px">'+esc(m.reference)+'</div>'+
    '<button class="btn btn-primary" style="width:100%;justify-content:center" onclick="downloadQr(\''+esc(m.reference)+'\')">'+icon("download",14)+' Télécharger le QR Code</button></div>';
  openModal("QR Code — "+m.name, body, 320);
  setTimeout(()=>{
    const target = document.getElementById("qr-target");
    if (target && window.QRCode) new QRCode(target, { text: payload, width:220, height:220, colorDark:"#0A2540", colorLight:"#ffffff" });
  }, 10);
}
function downloadQr(ref){
  const canvas = document.querySelector("#qr-target canvas");
  const img = document.querySelector("#qr-target img");
  const src = canvas ? canvas.toDataURL("image/png") : (img ? img.src : null);
  if (!src) return;
  const a = document.createElement("a"); a.href = src; a.download = "qr-"+ref+".png"; a.click();
}

// ---------------------------------------------------------------------------
// Page : Catégories
// ---------------------------------------------------------------------------
function pageCategories(){
  const items = db.list("categories");
  const materials = db.list("materials");
  const rows = items.map(c=>
    '<tr><td>'+esc(c.name)+'</td><td class="num muted">'+materials.filter(m=>m.category_id===c.id).length+'</td>'+
    '<td><button class="badge '+(c.active?"badge-green":"badge-grey")+'" style="border:none" onclick="toggleCategory(\''+c.id+'\')">'+(c.active?"Active":"Désactivée")+'</button></td>'+
    '<td><div style="display:flex;gap:4px">'+
      '<button class="btn btn-ghost btn-sm" onclick="openCategoryModal(\''+c.id+'\')">'+icon("pencil",14)+'</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="deleteCategory(\''+c.id+'\')">'+icon("trash",14)+'</button>'+
    '</div></td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Catégories</h1><div class="desc">Classement des matériaux par catégorie. Modifiables ou désactivables.</div></div>'+
    '<button class="btn btn-primary" onclick="openCategoryModal()">'+icon("plus",14)+' Nouvelle catégorie</button></div>'+
    '<div class="card">'+(rows?'<table class="data-table"><thead><tr><th>Nom</th><th>Matériaux liés</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>':emptyState("Aucune catégorie créée."))+'</div></div>';
}
function openCategoryModal(id){
  const c = id ? db.get("categories", id) : {name:""};
  const body = '<form onsubmit="submitCategory(event,\''+(id||'')+'\')"><div class="form-field"><label>Nom de la catégorie</label><input required id="cf-name" value="'+esc(c.name)+'" /></div>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier la catégorie":"Nouvelle catégorie", body);
}
function submitCategory(e,id){ e.preventDefault(); const data={name:document.getElementById("cf-name").value, active:true}; if(id) db.update("categories",id,data); else db.insert("categories",data); closeModal(); render(); }
function toggleCategory(id){ const c=db.get("categories",id); db.update("categories",id,{active:!c.active}); render(); }
function deleteCategory(id){ const c=db.get("categories",id); if(confirm('Supprimer la catégorie « '+c.name+' » ?')){ db.remove("categories",id); render(); } }

// ---------------------------------------------------------------------------
// Page : Dépôts / magasins
// ---------------------------------------------------------------------------
function pageWarehouses(){
  const items = db.list("warehouses");
  const materials = db.list("materials");
  function occupancy(w){ return materials.reduce((s,m)=>s+getStockLevel(m.id,w.id),0); }
  const rows = items.map(w=>
    '<tr><td>'+esc(w.name)+'</td><td class="muted">'+esc(w.address||"")+'</td><td>'+esc(w.manager||"")+'</td>'+
    '<td class="num muted">'+(w.capacity||"—")+'</td><td class="num">'+occupancy(w)+'</td>'+
    '<td><span class="badge badge-green">'+esc(w.status)+'</span></td>'+
    '<td><div style="display:flex;gap:4px">'+
      '<button class="btn btn-ghost btn-sm" onclick="openWarehouseModal(\''+w.id+'\')">'+icon("pencil",14)+'</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="deleteWarehouse(\''+w.id+'\')">'+icon("trash",14)+'</button>'+
    '</div></td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Dépôts / magasins</h1><div class="desc">Sahel BTP peut disposer de plusieurs lieux de stockage.</div></div>'+
    '<button class="btn btn-primary" onclick="openWarehouseModal()">'+icon("plus",14)+' Nouveau dépôt</button></div>'+
    '<div class="card">'+(rows?'<table class="data-table"><thead><tr><th>Nom</th><th>Adresse</th><th>Responsable</th><th>Capacité</th><th>Occupation</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>':emptyState("Aucun dépôt créé."))+'</div></div>';
}
function openWarehouseModal(id){
  const w = id ? db.get("warehouses", id) : {name:"",address:"",manager:"",phone:"",capacity:"",status:"actif"};
  const body = '<form onsubmit="submitWarehouse(event,\''+(id||'')+'\')"><div class="form-grid">'+
    '<div class="form-field full"><label>Nom</label><input required id="wf-name" value="'+esc(w.name)+'" /></div>'+
    '<div class="form-field full"><label>Adresse</label><input id="wf-address" value="'+esc(w.address)+'" /></div>'+
    '<div class="form-field"><label>Responsable</label><input id="wf-manager" value="'+esc(w.manager)+'" /></div>'+
    '<div class="form-field"><label>Téléphone</label><input id="wf-phone" value="'+esc(w.phone)+'" /></div>'+
    '<div class="form-field"><label>Capacité</label><input type="number" id="wf-capacity" value="'+esc(w.capacity)+'" /></div>'+
    '<div class="form-field"><label>Statut</label><select id="wf-status"><option value="actif"'+(w.status==="actif"?' selected':'')+'>Actif</option><option value="inactif"'+(w.status==="inactif"?' selected':'')+'>Inactif</option></select></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier le dépôt":"Nouveau dépôt", body);
}
function submitWarehouse(e,id){
  e.preventDefault();
  const data={name:document.getElementById("wf-name").value, address:document.getElementById("wf-address").value, manager:document.getElementById("wf-manager").value, phone:document.getElementById("wf-phone").value, capacity:document.getElementById("wf-capacity").value, status:document.getElementById("wf-status").value};
  if(id) db.update("warehouses",id,data); else db.insert("warehouses",data);
  closeModal(); render();
}
function deleteWarehouse(id){ const w=db.get("warehouses",id); if(confirm('Supprimer le dépôt « '+w.name+' » ?')){ db.remove("warehouses",id); render(); } }

// ---------------------------------------------------------------------------
// Page : Fournisseurs
// ---------------------------------------------------------------------------
function pageSuppliers(){
  const items = db.list("suppliers");
  const materials = db.list("materials");
  const movements = db.list("stock_movements");
  function purchasesTotal(s){ const ids=materials.filter(m=>m.supplier_id===s.id).map(m=>m.id); return movements.filter(m=>m.direction==="in" && ids.includes(m.material_id)).length; }
  const rows = items.map(s=>
    '<tr><td>'+esc(s.company)+'</td><td>'+esc(s.contact||"")+'</td><td class="muted">'+esc(s.phone||"")+'</td><td class="muted">'+esc(s.city||"")+'</td>'+
    '<td class="num">'+materials.filter(m=>m.supplier_id===s.id).length+'</td><td class="num">'+purchasesTotal(s)+'</td>'+
    '<td><div style="display:flex;gap:4px">'+
      '<button class="btn btn-ghost btn-sm" onclick="openSupplierModal(\''+s.id+'\')">'+icon("pencil",14)+'</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="deleteSupplier(\''+s.id+'\')">'+icon("trash",14)+'</button>'+
    '</div></td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Fournisseurs</h1><div class="desc">Fiche fournisseur : contact, conditions de paiement, historique d\'achats.</div></div>'+
    '<button class="btn btn-primary" onclick="openSupplierModal()">'+icon("plus",14)+' Nouveau fournisseur</button></div>'+
    '<div class="card">'+(rows?'<table class="data-table"><thead><tr><th>Société</th><th>Contact</th><th>Téléphone</th><th>Ville</th><th>Matériaux</th><th>Achats</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>':emptyState("Aucun fournisseur enregistré."))+'</div></div>';
}
function openSupplierModal(id){
  const s = id ? db.get("suppliers", id) : {company:"",contact:"",phone:"",whatsapp:"",email:"",address:"",city:"",country:"Cameroun",tax_id:"",payment_terms:""};
  const body = '<form onsubmit="submitSupplier(event,\''+(id||'')+'\')"><div class="form-grid">'+
    '<div class="form-field full"><label>Raison sociale</label><input required id="sf-company" value="'+esc(s.company)+'" /></div>'+
    '<div class="form-field"><label>Contact</label><input id="sf-contact" value="'+esc(s.contact)+'" /></div>'+
    '<div class="form-field"><label>Téléphone</label><input id="sf-phone" value="'+esc(s.phone)+'" /></div>'+
    '<div class="form-field"><label>WhatsApp</label><input id="sf-whatsapp" value="'+esc(s.whatsapp)+'" /></div>'+
    '<div class="form-field"><label>E-mail</label><input type="email" id="sf-email" value="'+esc(s.email)+'" /></div>'+
    '<div class="form-field"><label>Ville</label><input id="sf-city" value="'+esc(s.city)+'" /></div>'+
    '<div class="form-field"><label>Pays</label><input id="sf-country" value="'+esc(s.country)+'" /></div>'+
    '<div class="form-field"><label>Numéro fiscal</label><input id="sf-tax" value="'+esc(s.tax_id)+'" /></div>'+
    '<div class="form-field full"><label>Conditions de paiement</label><input id="sf-terms" value="'+esc(s.payment_terms)+'" placeholder="Ex: 30 jours net" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier le fournisseur":"Nouveau fournisseur", body, 620);
}
function submitSupplier(e,id){
  e.preventDefault();
  const data={company:document.getElementById("sf-company").value, contact:document.getElementById("sf-contact").value, phone:document.getElementById("sf-phone").value, whatsapp:document.getElementById("sf-whatsapp").value, email:document.getElementById("sf-email").value, city:document.getElementById("sf-city").value, country:document.getElementById("sf-country").value, tax_id:document.getElementById("sf-tax").value, payment_terms:document.getElementById("sf-terms").value};
  if(id) db.update("suppliers",id,data); else db.insert("suppliers",data);
  closeModal(); render();
}
function deleteSupplier(id){ const s=db.get("suppliers",id); if(confirm('Supprimer le fournisseur « '+s.company+' » ?')){ db.remove("suppliers",id); render(); } }

// ---------------------------------------------------------------------------
// Page : Entrées / Sorties de stock
// ---------------------------------------------------------------------------
const IN_TYPES = [["achat","Achat"],["retour_chantier","Retour chantier"],["retour_client","Retour client"],["transfert_entrant","Transfert entrant"],["ajustement_positif","Ajustement positif"]];
const OUT_TYPES = [["chantier","Sortie chantier"],["vente","Vente"],["perte","Perte"],["deterioration","Détérioration"],["ajustement_negatif","Ajustement négatif"]];
function typeLabel(list,val){ const f=list.find(x=>x[0]===val); return f?f[1]:val; }

function pageStockMove(direction){
  const materials = db.list("materials");
  const warehouses = db.list("warehouses");
  const projects = db.list("projects");
  const isIn = direction==="in";
  const movements = db.list("stock_movements", m=>m.direction===direction && m.type!=="transfert").sort((a,b)=>new Date(b.date)-new Date(a.date));
  const types = isIn ? IN_TYPES : OUT_TYPES;

  const rows = movements.map(m=>
    '<tr><td class="mono muted">'+esc(m.number)+'</td><td class="muted">'+formatDateTime(m.date)+'</td>'+
    '<td><span class="badge '+(isIn?"badge-green":"badge-orange")+'">'+esc(typeLabel(types,m.type))+'</span></td>'+
    '<td>'+esc(m.material_name)+'</td><td class="num">'+(isIn?"+":"-")+m.quantity+' '+esc(m.unit)+'</td>'+
    '<td class="muted">'+esc((warehouses.find(w=>w.id===m.warehouse_id)||{}).name||"")+'</td>'+
    (isIn ? '<td class="mono muted">'+esc(m.reference||"—")+'</td>' : '<td class="muted">'+esc((projects.find(p=>p.id===m.project_id)||{}).code||"—")+'</td>')+
    '<td class="muted">'+esc(m.user)+'</td></tr>').join('');

  return '<div class="page"><div class="page-header"><div><h1>'+(isIn?"Entrées":"Sorties")+' de stock</h1>'+
    '<div class="desc">'+(isIn?"Achats, retours de chantier, retours client, transferts entrants, ajustements positifs.":"Chaque sortie est enregistrée avec matériau, quantité, magasin, chantier et responsable.")+'</div></div>'+
    '<button class="btn btn-primary" onclick="openMoveModal(\''+direction+'\')">'+icon("plus",14)+' Nouvelle '+(isIn?"entrée":"sortie")+'</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Type</th><th>Matériau</th><th>Quantité</th><th>Dépôt</th><th>'+(isIn?"Référence":"Chantier")+'</th><th>Utilisateur</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun mouvement enregistré."))+'</div></div>';
}

function openMoveModal(direction){
  const isIn = direction==="in";
  const materials = db.list("materials");
  const warehouses = db.list("warehouses");
  const projects = db.list("projects");
  const types = isIn ? IN_TYPES : OUT_TYPES;
  const body = '<form id="move-form" onsubmit="submitMove(event,\''+direction+'\')"><div id="move-error"></div><div class="form-grid">'+
    '<div class="form-field"><label>Type</label><select id="mv-type" onchange="onMoveTypeChange()">'+types.map(t=>'<option value="'+t[0]+'">'+t[1]+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Matériau</label><select id="mv-material" onchange="updateMoveStockHint()">'+materials.map(m=>'<option value="'+m.id+'">'+esc(m.name)+' ('+esc(m.reference)+')</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Dépôt / magasin</label><select id="mv-warehouse" onchange="updateMoveStockHint()">'+warehouses.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Quantité <span id="mv-stock-hint" class="muted" style="font-weight:400"></span></label><input type="number" min="1" required id="mv-quantity" /></div>'+
    (!isIn ? '<div class="form-field full" id="mv-project-wrap"><label>Chantier destinataire</label><select id="mv-project">'+projects.map(p=>'<option value="'+p.id+'">'+esc(p.code)+' — '+esc(p.name)+'</option>').join('')+'</select></div>' : '')+
    '<div class="form-field"><label>Référence document</label><input id="mv-reference" /></div>'+
    (!isIn ? '<div class="form-field"><label>Motif</label><input id="mv-reason" /></div>' : '')+
    '<div class="form-field full"><label>Observation</label><textarea rows="2" id="mv-comment"></textarea></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn '+(isIn?"btn-primary":"btn-primary")+'">'+icon(isIn?"arrowDown":"arrowUp",14)+' Enregistrer</button></div></form>';
  openModal("Nouvelle "+(isIn?"entrée":"sortie")+" de stock", body);
  setTimeout(()=>{ updateMoveStockHint(); onMoveTypeChange(); }, 10);
}
function onMoveTypeChange(){
  const wrap = document.getElementById("mv-project-wrap");
  if (!wrap) return;
  wrap.style.display = document.getElementById("mv-type").value === "chantier" ? "" : "none";
}
function updateMoveStockHint(){
  const matEl = document.getElementById("mv-material"), whEl = document.getElementById("mv-warehouse"), hint=document.getElementById("mv-stock-hint");
  if (!matEl || !whEl || !hint) return;
  hint.textContent = "(dispo : "+getStockLevel(matEl.value, whEl.value)+")";
}
function submitMove(e, direction){
  e.preventDefault();
  const isIn = direction==="in";
  try{
    recordMovement({
      type: document.getElementById("mv-type").value, direction,
      materialId: document.getElementById("mv-material").value,
      warehouseId: document.getElementById("mv-warehouse").value,
      projectId: (!isIn && document.getElementById("mv-type").value==="chantier") ? document.getElementById("mv-project").value : null,
      quantity: Number(document.getElementById("mv-quantity").value),
      reference: document.getElementById("mv-reference").value,
      reason: !isIn ? document.getElementById("mv-reason").value : "",
      comment: document.getElementById("mv-comment").value,
      user: currentUser().name,
    });
    closeModal(); render();
  }catch(err){
    document.getElementById("move-error").innerHTML = '<div class="login-error">'+esc(err.message)+'</div>';
  }
}

// ---------------------------------------------------------------------------
// Page : Transferts
// ---------------------------------------------------------------------------
function pageTransfers(){
  const materials = db.list("materials"); const warehouses = db.list("warehouses");
  const movements = db.list("stock_movements", m=>m.type==="transfert").sort((a,b)=>new Date(b.date)-new Date(a.date));
  const rows = movements.map(m=>
    '<tr><td class="mono muted">'+esc(m.number)+'</td><td class="muted">'+formatDateTime(m.date)+'</td><td>'+esc(m.material_name)+'</td>'+
    '<td class="num">'+m.quantity+' '+esc(m.unit)+'</td><td class="muted">'+esc((warehouses.find(w=>w.id===m.warehouse_id)||{}).name||"")+'</td>'+
    '<td class="muted">'+esc((warehouses.find(w=>w.id===m.destination_warehouse_id)||{}).name||"")+'</td><td class="muted">'+esc(m.user)+'</td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Transferts de stock</h1><div class="desc">Déplacement de matériaux entre deux dépôts / magasins.</div></div>'+
    '<button class="btn btn-primary" onclick="openTransferModal()">'+icon("plus",14)+' Nouveau transfert</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Matériau</th><th>Quantité</th><th>De</th><th>Vers</th><th>Utilisateur</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun transfert enregistré."))+'</div></div>';
}
function openTransferModal(){
  const materials = db.list("materials"); const warehouses = db.list("warehouses");
  const body = '<form id="transfer-form" onsubmit="submitTransfer(event)"><div id="transfer-error"></div><div class="form-grid">'+
    '<div class="form-field full"><label>Matériau</label><select id="tf-material" onchange="updateTransferHint()">'+materials.map(m=>'<option value="'+m.id+'">'+esc(m.name)+' ('+esc(m.reference)+')</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Dépôt source</label><select id="tf-from" onchange="updateTransferHint()">'+warehouses.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Dépôt destination</label><select id="tf-to">'+warehouses.map((w,i)=>'<option value="'+w.id+'"'+(i===1?' selected':'')+'>'+esc(w.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field full"><label>Quantité <span id="tf-hint" class="muted" style="font-weight:400"></span></label><input type="number" min="1" required id="tf-quantity" /></div>'+
    '<div class="form-field full"><label>Référence</label><input id="tf-reference" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("arrowLR",14)+' Enregistrer le transfert</button></div></form>';
  openModal("Nouveau transfert de stock", body);
  setTimeout(updateTransferHint, 10);
}
function updateTransferHint(){
  const mat=document.getElementById("tf-material"), from=document.getElementById("tf-from"), hint=document.getElementById("tf-hint");
  if (!mat||!from||!hint) return;
  hint.textContent = "(dispo au départ : "+getStockLevel(mat.value, from.value)+")";
}
function submitTransfer(e){
  e.preventDefault();
  const from = document.getElementById("tf-from").value, to = document.getElementById("tf-to").value;
  if (from===to){ document.getElementById("transfer-error").innerHTML='<div class="login-error">Le dépôt source et le dépôt de destination doivent être différents.</div>'; return; }
  try{
    recordMovement({ type:"transfert", direction:"out", materialId: document.getElementById("tf-material").value,
      warehouseId: from, destinationWarehouseId: to, quantity: Number(document.getElementById("tf-quantity").value),
      reference: document.getElementById("tf-reference").value, user: currentUser().name });
    closeModal(); render();
  }catch(err){ document.getElementById("transfer-error").innerHTML = '<div class="login-error">'+esc(err.message)+'</div>'; }
}

// ---------------------------------------------------------------------------
// Page : Inventaire
// ---------------------------------------------------------------------------
let inventoryWarehouseId = null;
function pageInventory(){
  const materials = db.list("materials");
  const warehouses = db.list("warehouses");
  if (!inventoryWarehouseId) inventoryWarehouseId = (warehouses[0]||{}).id;
  const history = db.list("inventories").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));

  const rows = materials.map(m=>{
    const th = getStockLevel(m.id, inventoryWarehouseId);
    return '<tr data-material="'+m.id+'"><td>'+esc(m.name)+' <span class="muted">('+esc(m.unit)+')</span></td>'+
      '<td class="num muted">'+th+'</td>'+
      '<td><input type="number" class="inv-physical" placeholder="'+th+'" style="width:100px;padding:5px 8px;border:1px solid var(--line);border-radius:3px" /></td>'+
      '<td class="inv-gap num"><span class="badge badge-grey">0</span></td>'+
      '<td><input class="inv-reason" placeholder="Motif si écart…" style="width:100%;padding:5px 8px;border:1px solid var(--line);border-radius:3px" /></td></tr>';
  }).join('');

  const histRows = history.map(h=>
    '<tr><td class="muted">'+formatDateTime(h.created_at)+'</td><td>'+esc(h.warehouse_name)+'</td><td class="muted">'+esc(h.user)+'</td>'+
    '<td>'+(h.gaps_count>0?('<span class="badge badge-amber">'+icon("clipboardList",11)+' '+h.gaps_count+' écart(s)</span>'):'<span class="badge badge-green">Conforme</span>')+'</td></tr>').join('');

  return '<div class="page"><div class="page-header"><div><h1>Inventaire</h1><div class="desc">Comparer le stock théorique et le stock physique, puis valider les écarts.</div></div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-body" style="display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap">'+
      '<div class="form-field" style="min-width:240px"><label>Dépôt à inventorier</label><select id="inv-warehouse" onchange="inventoryWarehouseId=this.value; renderPage();">'+warehouses.map(w=>'<option value="'+w.id+'"'+(w.id===inventoryWarehouseId?' selected':'')+'>'+esc(w.name)+'</option>').join('')+'</select></div>'+
      '<button class="btn btn-primary" onclick="validateInventory()">'+icon("check",14)+' Valider l\'inventaire</button>'+
    '</div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Comptage — '+esc((warehouses.find(w=>w.id===inventoryWarehouseId)||{}).name||"")+'</h3></div>'+
      '<table class="data-table" id="inv-table"><thead><tr><th>Matériau</th><th>Stock théorique</th><th>Stock physique</th><th>Écart</th><th>Motif</th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
    '<div class="card"><div class="card-header"><h3>Historique des inventaires</h3></div>'+
      (histRows?('<table class="data-table"><thead><tr><th>Date</th><th>Dépôt</th><th>Par</th><th>Écarts</th></tr></thead><tbody>'+histRows+'</tbody></table>'):emptyState("Aucun inventaire réalisé pour le moment."))+'</div></div>';
}
AFTER_RENDER["inventaire"] = function(){
  document.querySelectorAll(".inv-physical").forEach(inp=>{
    inp.addEventListener("input", ()=>{
      const tr = inp.closest("tr");
      const th = Number(tr.querySelector("td:nth-child(2)").textContent.trim());
      const ph = inp.value === "" ? th : Number(inp.value);
      const gap = ph - th;
      const gapCell = tr.querySelector(".inv-gap");
      gapCell.innerHTML = gap===0 ? '<span class="badge badge-grey">0</span>' : gap>0 ? '<span class="badge badge-green">+'+gap+'</span>' : '<span class="badge badge-red">'+gap+'</span>';
    });
  });
};
function validateInventory(){
  const materials = db.list("materials");
  const rows = [];
  document.querySelectorAll("#inv-table tbody tr").forEach(tr=>{
    const materialId = tr.dataset.material;
    const m = materials.find(x=>x.id===materialId);
    const th = getStockLevel(materialId, inventoryWarehouseId);
    const physicalInput = tr.querySelector(".inv-physical").value;
    const ph = physicalInput === "" ? th : Number(physicalInput);
    const reason = tr.querySelector(".inv-reason").value;
    rows.push({material_id:materialId, material_name:m.name, unit:m.unit, theoretical:th, physical:ph, gap:ph-th, reason});
  });
  const gapsOnly = rows.filter(r=>r.gap!==0);
  db.insert("inventories", { warehouse_id: inventoryWarehouseId, warehouse_name:(db.get("warehouses",inventoryWarehouseId)||{}).name, user: currentUser().name, lines: rows, gaps_count: gapsOnly.length });
  gapsOnly.forEach(r=>{ setStockLevel(r.material_id, inventoryWarehouseId, r.physical); });
  alert("Inventaire enregistré. "+gapsOnly.length+" écart(s) détecté(s) et appliqué(s) au stock.");
  render();
}

// ---------------------------------------------------------------------------
// Page : Chantiers
// ---------------------------------------------------------------------------
const PROJECT_STATUSES = ["Planifié","En préparation","En cours","Suspendu","Terminé","Archivé"];
const PROJECT_STATUS_TONE = {"Planifié":"badge-grey","En préparation":"badge-blue","En cours":"badge-green","Suspendu":"badge-amber","Terminé":"badge-blue","Archivé":"badge-grey"};

function pageProjects(){
  const items = db.list("projects");
  const movements = db.list("stock_movements");
  function consumptionCost(p){
    return movements.filter(m=>m.project_id===p.id && m.direction==="out").reduce((sum,m)=>{
      const material = db.get("materials", m.material_id);
      return sum + Number(m.quantity) * Number(material?material.purchase_price:0);
    },0);
  }
  const rows = items.map(p=>{
    const consumed = consumptionCost(p);
    const pct = p.budget ? Math.min(100, Math.round((consumed/Number(p.budget))*100)) : 0;
    return '<tr><td class="mono">'+esc(p.code)+'</td><td>'+esc(p.name)+'</td><td class="muted">'+esc(p.client||"")+'</td><td class="muted">'+esc(p.manager||"")+'</td>'+
      '<td class="num muted">'+formatXAF(p.budget)+'</td><td class="num">'+formatXAF(consumed)+' <span class="muted">('+pct+'%)</span></td>'+
      '<td><span class="badge '+(PROJECT_STATUS_TONE[p.status]||"badge-grey")+'">'+esc(p.status)+'</span></td>'+
      '<td><div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="openProjectDetail(\''+p.id+'\')">'+icon("eye",14)+'</button>'+
      '<button class="btn btn-ghost btn-sm" onclick="openProjectModal(\''+p.id+'\')">'+icon("pencil",14)+'</button></div></td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Chantiers</h1><div class="desc">Suivi des chantiers, budgets et consommation de matériaux.</div></div>'+
    '<button class="btn btn-primary" onclick="openProjectModal()">'+icon("plus",14)+' Nouveau chantier</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Code</th><th>Nom</th><th>Client</th><th>Responsable</th><th>Budget</th><th>Consommé</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun chantier créé."))+'</div></div>';
}
function openProjectModal(id){
  const p = id ? db.get("projects", id) : {name:"",code:"",client:"",location:"",manager:"",start_date:"",end_date:"",budget:"",status:"Planifié",description:""};
  const body = '<form onsubmit="submitProject(event,\''+(id||'')+'\')"><div class="form-grid">'+
    '<div class="form-field"><label>Code chantier</label><input required id="pf-code" value="'+esc(p.code)+'" placeholder="CH-003" /></div>'+
    '<div class="form-field"><label>Nom du chantier</label><input required id="pf-name" value="'+esc(p.name)+'" /></div>'+
    '<div class="form-field"><label>Client</label><input id="pf-client" value="'+esc(p.client)+'" /></div>'+
    '<div class="form-field"><label>Localisation</label><input id="pf-location" value="'+esc(p.location)+'" /></div>'+
    '<div class="form-field"><label>Responsable</label><input id="pf-manager" value="'+esc(p.manager)+'" /></div>'+
    '<div class="form-field"><label>Statut</label><select id="pf-status">'+PROJECT_STATUSES.map(s=>'<option value="'+s+'"'+(s===p.status?' selected':'')+'>'+s+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Date de début</label><input type="date" id="pf-start" value="'+esc(p.start_date||"")+'" /></div>'+
    '<div class="form-field"><label>Date prévue de fin</label><input type="date" id="pf-end" value="'+esc(p.end_date||"")+'" /></div>'+
    '<div class="form-field full"><label>Budget (FCFA)</label><input type="number" min="0" id="pf-budget" value="'+esc(p.budget)+'" /></div>'+
    '<div class="form-field full"><label>Description</label><textarea rows="2" id="pf-description">'+esc(p.description||"")+'</textarea></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("hardHat",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier le chantier":"Nouveau chantier", body, 640);
}
function submitProject(e,id){
  e.preventDefault();
  const data={code:document.getElementById("pf-code").value, name:document.getElementById("pf-name").value, client:document.getElementById("pf-client").value,
    location:document.getElementById("pf-location").value, manager:document.getElementById("pf-manager").value, status:document.getElementById("pf-status").value,
    start_date:document.getElementById("pf-start").value, end_date:document.getElementById("pf-end").value, budget:document.getElementById("pf-budget").value,
    description:document.getElementById("pf-description").value};
  if(id) db.update("projects",id,data); else db.insert("projects",data);
  closeModal(); render();
}
function openProjectDetail(id){
  const p = db.get("projects", id);
  const movements = db.list("stock_movements", m=>m.project_id===id && m.direction==="out");
  const requests = db.list("project_material_requests", r=>r.project_id===id);
  const consumed = movements.reduce((s,m)=>s+Number(m.quantity)*Number((db.get("materials",m.material_id)||{}).purchase_price||0),0);
  const grouped = {};
  movements.forEach(m=>{ grouped[m.material_id]=grouped[m.material_id]||{name:m.material_name,unit:m.unit,qty:0}; grouped[m.material_id].qty+=Number(m.quantity); });
  const consRows = Object.values(grouped).map(r=>'<tr><td>'+esc(r.name)+'</td><td class="num">'+r.qty+' '+esc(r.unit)+'</td></tr>').join('') || '<tr><td colspan="2" class="muted">Aucune sortie enregistrée pour ce chantier.</td></tr>';
  const reqRows = requests.map(r=>'<tr><td>'+esc(r.requested_by)+'</td><td class="num">'+r.lines.length+'</td><td>'+(r.status==="validee"?'<span class="badge badge-green">Validée</span>':r.status==="rejetee"?'<span class="badge badge-red">Rejetée</span>':'<span class="badge badge-amber">En attente</span>')+'</td></tr>').join('') || '<tr><td colspan="3" class="muted">Aucune demande pour ce chantier.</td></tr>';
  const body = '<div style="margin-bottom:14px"><div class="muted" style="font-size:13px">'+esc(p.description||"")+'</div><div class="divider"></div>'+
    '<div class="form-grid" style="font-size:13px"><div><b>Client :</b> '+esc(p.client||"—")+'</div><div><b>Localisation :</b> '+esc(p.location||"—")+'</div>'+
    '<div><b>Début :</b> '+formatDate(p.start_date)+'</div><div><b>Fin prévue :</b> '+formatDate(p.end_date)+'</div>'+
    '<div><b>Budget :</b> '+formatXAF(p.budget)+'</div><div><b>Consommé :</b> '+formatXAF(consumed)+'</div></div></div>'+
    '<h3 style="font-size:14px;margin-bottom:8px">Consommation de matériaux</h3><table class="data-table"><thead><tr><th>Matériau</th><th>Quantité sortie</th></tr></thead><tbody>'+consRows+'</tbody></table>'+
    '<h3 style="font-size:14px;margin:18px 0 8px">Demandes de matériaux</h3><table class="data-table"><thead><tr><th>Demandé par</th><th>Lignes</th><th>Statut</th></tr></thead><tbody>'+reqRows+'</tbody></table>';
  openModal(p.code+" — "+p.name, body, 680);
}

// ---------------------------------------------------------------------------
// Page : Demandes de matériaux
// ---------------------------------------------------------------------------
let requestFormLines = [];
function pageRequests(){
  const user = currentUser();
  const projects = db.list("projects");
  const requests = db.list("project_material_requests").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const rows = requests.map(r=>{
    const project = projects.find(p=>p.id===r.project_id);
    return '<tr><td class="muted">'+formatDateTime(r.created_at)+'</td><td>'+esc(project?project.code+" — "+project.name:"")+'</td><td class="muted">'+esc(r.requested_by)+'</td>'+
      '<td class="muted">'+r.lines.map(l=>esc(l.material_name)+" ("+l.quantity+" "+esc(l.unit)+")").join(", ")+'</td>'+
      '<td>'+(r.status==="validee"?'<span class="badge badge-green">Validée</span>':r.status==="rejetee"?'<span class="badge badge-red">Rejetée</span>':'<span class="badge badge-amber">En attente</span>')+'</td>'+
      '<td>'+(r.status==="en_attente" && can(user,"requests.validate") ? ('<div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="openValidateRequest(\''+r.id+'\')">'+icon("check",14)+'</button><button class="btn btn-ghost btn-sm" onclick="rejectRequest(\''+r.id+'\')">'+icon("x",14)+'</button></div>') : '')+'</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Demandes de matériaux</h1><div class="desc">Un responsable de chantier crée une demande, soumise ensuite à validation.</div></div>'+
    '<button class="btn btn-primary" onclick="openRequestModal()">'+icon("plus",14)+' Nouvelle demande</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Date</th><th>Chantier</th><th>Demandé par</th><th>Lignes</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune demande de matériaux."))+'</div></div>';
}
function openRequestModal(){
  const projects = db.list("projects"); const materials = db.list("materials");
  requestFormLines = [{material_id:(materials[0]||{}).id, quantity:""}];
  renderRequestModalBody(projects, materials);
}
function renderRequestModalBody(projects, materials){
  const linesHtml = requestFormLines.map((line,i)=>
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'+
    '<select style="flex:2;padding:8px;border:1px solid var(--line);border-radius:3px" onchange="requestFormLines['+i+'].material_id=this.value">'+
      materials.map(m=>'<option value="'+m.id+'"'+(m.id===line.material_id?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select>'+
    '<input type="number" min="1" placeholder="Quantité" value="'+esc(line.quantity)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="requestFormLines['+i+'].quantity=this.value" />'+
    '<button type="button" class="btn btn-ghost btn-sm" onclick="removeRequestLine('+i+')">'+icon("trash",14)+'</button></div>').join('');
  const body = '<form onsubmit="submitRequest(event)"><div class="form-field full" style="margin-bottom:14px"><label>Chantier</label><select id="rf-project">'+projects.map(p=>'<option value="'+p.id+'">'+esc(p.code)+' — '+esc(p.name)+'</option>').join('')+'</select></div>'+
    '<label style="font-size:12px;font-weight:600;color:var(--steel-700)">Matériaux demandés</label>'+
    '<div id="request-lines">'+linesHtml+'</div>'+
    '<button type="button" class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="addRequestLine()">'+icon("plus",13)+' Ajouter une ligne</button>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("fileText",14)+' Soumettre la demande</button></div></form>';
  openModal("Nouvelle demande de matériaux", body, 640);
}
function addRequestLine(){ requestFormLines.push({material_id:(db.list("materials")[0]||{}).id, quantity:""}); renderRequestModalBody(db.list("projects"), db.list("materials")); }
function removeRequestLine(i){ requestFormLines.splice(i,1); renderRequestModalBody(db.list("projects"), db.list("materials")); }
function submitRequest(e){
  e.preventDefault();
  const materials = db.list("materials");
  const lines = requestFormLines.filter(l=>l.quantity).map(l=>{ const m=materials.find(x=>x.id===l.material_id); return {material_id:l.material_id, material_name:m.name, unit:m.unit, quantity:Number(l.quantity)}; });
  db.insert("project_material_requests", { project_id: document.getElementById("rf-project").value, requested_by: currentUser().name, status:"en_attente", lines });
  closeModal(); render();
}
function rejectRequest(id){ db.update("project_material_requests", id, {status:"rejetee"}); render(); }
function openValidateRequest(id){
  const r = db.get("project_material_requests", id);
  const warehouses = db.list("warehouses");
  const body = '<p style="font-size:13.5px;margin-bottom:14px">Choisissez le dépôt depuis lequel les matériaux seront sortis. Le stock sera mis à jour automatiquement.</p>'+
    '<div class="form-field"><label>Dépôt de sortie</label><select id="validate-warehouse">'+warehouses.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-actions"><button class="btn btn-secondary" onclick="closeModal()">Annuler</button><button class="btn btn-primary" onclick="confirmValidateRequest(\''+id+'\')">'+icon("check",14)+' Valider et sortir le stock</button></div>';
  openModal("Valider la demande et sortir le stock", body);
}
function confirmValidateRequest(id){
  const r = db.get("project_material_requests", id);
  const warehouseId = document.getElementById("validate-warehouse").value;
  try{
    r.lines.forEach(line=>{
      recordMovement({ type:"chantier", direction:"out", materialId:line.material_id, warehouseId, projectId:r.project_id, quantity:line.quantity, reference:"DEM-"+id.slice(0,8), reason:"Sortie sur demande chantier validée", user:currentUser().name });
    });
    db.update("project_material_requests", id, {status:"validee"});
    closeModal(); render();
  }catch(err){ alert(err.message); }
}

// ---------------------------------------------------------------------------
// Page : Affectations (matériaux planifiés / réservés pour un chantier)
// ---------------------------------------------------------------------------
function pageAffectations(){
  const user = currentUser();
  const projects = db.list("projects");
  const materials = db.list("materials");
  const allocations = db.list("project_material_allocations").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const rows = allocations.map(a=>{
    const project = projects.find(p=>p.id===a.project_id);
    const material = materials.find(m=>m.id===a.material_id);
    return '<tr><td>'+esc(project?project.code+" — "+project.name:"—")+'</td><td>'+esc(material?material.name:"—")+'</td>'+
      '<td class="num">'+a.quantity_allocated+' '+esc(material?material.unit:"")+'</td><td class="muted">'+formatDate(a.created_at)+'</td>'+
      '<td><button class="btn btn-ghost btn-sm" onclick="deleteAllocation(\''+a.id+'\')">'+icon("trash",14)+'</button></td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Affectations</h1><div class="desc">Matériaux planifiés / réservés pour un chantier, en amont de leur sortie effective du stock.</div></div>'+
    (can(user,"projects.manage")||can(user,"requests.validate") ? '<button class="btn btn-primary" onclick="openAllocationModal()">'+icon("plus",14)+' Nouvelle affectation</button>' : '')+
    '</div><div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Chantier</th><th>Matériau</th><th>Quantité affectée</th><th>Date</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune affectation enregistrée."))+'</div></div>';
}
function openAllocationModal(){
  const projects = db.list("projects"); const materials = db.list("materials");
  const body = '<form onsubmit="submitAllocation(event)"><div class="form-grid">'+
    '<div class="form-field full"><label>Chantier</label><select id="al-project">'+projects.map(p=>'<option value="'+p.id+'">'+esc(p.code)+' — '+esc(p.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Matériau</label><select id="al-material">'+materials.map(m=>'<option value="'+m.id+'">'+esc(m.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Quantité affectée</label><input type="number" min="1" required id="al-quantity" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div></form>';
  openModal("Nouvelle affectation de matériaux", body);
}
function submitAllocation(e){
  e.preventDefault();
  db.insert("project_material_allocations", {
    project_id: document.getElementById("al-project").value,
    material_id: document.getElementById("al-material").value,
    quantity_allocated: Number(document.getElementById("al-quantity").value||0),
  });
  closeModal(); render();
}
function deleteAllocation(id){ if (confirm("Supprimer cette affectation ?")){ db.remove("project_material_allocations", id); render(); } }

// ---------------------------------------------------------------------------
// Page : Consommations (matériaux réellement sortis vers les chantiers)
// ---------------------------------------------------------------------------
let consommationProjectFilter = "";
function pageConsommations(){
  const projects = db.list("projects");
  const movements = db.list("stock_movements", m=>m.direction==="out" && m.project_id);
  const filtered = consommationProjectFilter ? movements.filter(m=>m.project_id===consommationProjectFilter) : movements;
  const grouped = {};
  filtered.forEach(m=>{
    const key = m.project_id+"|"+m.material_id;
    grouped[key] = grouped[key] || { project_id:m.project_id, material_name:m.material_name, unit:m.unit, qty:0 };
    grouped[key].qty += Number(m.quantity);
  });
  const rows = Object.values(grouped).map(r=>{
    const project = projects.find(p=>p.id===r.project_id);
    const allocations = db.list("project_material_allocations", a=>a.project_id===r.project_id);
    const allocated = allocations.filter(a=>a.material_id && r.material_name).reduce((s,a)=>s+Number(a.quantity_allocated),0);
    return '<tr><td>'+esc(project?project.code+" — "+project.name:"—")+'</td><td>'+esc(r.material_name)+'</td>'+
      '<td class="num">'+r.qty+' '+esc(r.unit)+'</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Consommations</h1><div class="desc">Matériaux réellement consommés (sortis du stock) par chantier.</div></div></div>'+
    '<div class="card"><div class="table-toolbar"><div class="form-field" style="min-width:260px"><label>Filtrer par chantier</label>'+
    '<select onchange="consommationProjectFilter=this.value; renderPage();"><option value="">Tous les chantiers</option>'+projects.map(p=>'<option value="'+p.id+'"'+(p.id===consommationProjectFilter?' selected':'')+'>'+esc(p.code)+' — '+esc(p.name)+'</option>').join('')+'</select></div></div>'+
    (rows?('<table class="data-table"><thead><tr><th>Chantier</th><th>Matériau</th><th>Quantité consommée</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune consommation enregistrée."))+'</div></div>';
}

// ---------------------------------------------------------------------------
// Page : Coûts (comparaison budget prévu / consommation réelle par chantier)
// ---------------------------------------------------------------------------
function pageCouts(){
  const projects = db.list("projects");
  const movements = db.list("stock_movements");
  function consumptionValue(p){
    return movements.filter(m=>m.project_id===p.id && m.direction==="out").reduce((sum,m)=>{
      const material = db.get("materials", m.material_id);
      return sum + Number(m.quantity) * Number(material?material.purchase_price:0);
    },0);
  }
  const totalBudget = projects.reduce((s,p)=>s+Number(p.budget||0),0);
  const totalConsumed = projects.reduce((s,p)=>s+consumptionValue(p),0);
  const rows = projects.map(p=>{
    const consumed = consumptionValue(p);
    const pct = p.budget ? Math.round((consumed/Number(p.budget))*100) : 0;
    const over = p.budget && consumed > Number(p.budget);
    return '<tr><td class="mono">'+esc(p.code)+'</td><td>'+esc(p.name)+'</td><td class="num">'+formatXAF(p.budget)+'</td>'+
      '<td class="num">'+formatXAF(consumed)+'</td><td class="num">'+formatXAF(Number(p.budget||0)-consumed)+'</td>'+
      '<td><span class="badge '+(over?"badge-red":pct>80?"badge-amber":"badge-green")+'">'+pct+'%</span></td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Coûts</h1><div class="desc">Comparaison entre le budget prévu et la consommation réelle de matériaux par chantier.</div></div></div>'+
    '<div class="kpi-grid" style="margin-bottom:16px">'+
    '<div class="kpi"><div class="label">Budget total (tous chantiers)</div><div class="value">'+formatXAF(totalBudget)+'</div></div>'+
    '<div class="kpi"><div class="label">Consommé (valeur matériaux)</div><div class="value">'+formatXAF(totalConsumed)+'</div></div>'+
    '<div class="kpi '+(totalConsumed>totalBudget?"danger":"")+'"><div class="label">Écart global</div><div class="value">'+formatXAF(totalBudget-totalConsumed)+'</div></div>'+
    '</div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Code</th><th>Chantier</th><th>Budget</th><th>Consommé</th><th>Écart</th><th>% utilisé</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun chantier créé."))+'</div></div>';
}

// ---------------------------------------------------------------------------
// Page : Demandes d'achat (avant création du bon de commande)
// ---------------------------------------------------------------------------
const PR_STATUS_TONE = {en_attente:"badge-amber", validee:"badge-green", rejetee:"badge-red"};
const PR_STATUS_LABEL = {en_attente:"En attente", validee:"Validée (commande créée)", rejetee:"Rejetée"};
let arFormLines = [];
function pagePurchaseRequests(){
  const user = currentUser();
  const requests = db.list("purchase_requests").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const rows = requests.map(r=>
    '<tr><td class="muted">'+formatDateTime(r.created_at)+'</td><td class="muted">'+esc(r.requested_by)+'</td>'+
    '<td class="muted">'+r.lines.map(l=>esc(l.material_name)+" ("+l.quantity+" "+esc(l.unit)+")").join(", ")+'</td>'+
    '<td><span class="badge '+(PR_STATUS_TONE[r.status]||"badge-grey")+'">'+(PR_STATUS_LABEL[r.status]||r.status)+'</span></td>'+
    '<td>'+(r.status==="en_attente" && can(user,"purchases.manage") ? ('<div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="openConvertRequestModal(\''+r.id+'\')">'+icon("check",14)+'</button><button class="btn btn-ghost btn-sm" onclick="rejectPurchaseRequest(\''+r.id+'\')">'+icon("x",14)+'</button></div>') : '')+'</td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Demandes d\'achat</h1><div class="desc">Première étape avant la création d\'un bon de commande : exprimer un besoin de réapprovisionnement.</div></div>'+
    '<button class="btn btn-primary" onclick="openPurchaseRequestModal()">'+icon("plus",14)+' Nouvelle demande</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Date</th><th>Demandé par</th><th>Matériaux</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune demande d'achat."))+'</div></div>';
}
function openPurchaseRequestModal(){
  const materials = db.list("materials");
  arFormLines = [{material_id:(materials[0]||{}).id, quantity:""}];
  renderPRModalBody(materials);
}
function renderPRModalBody(materials){
  const linesHtml = arFormLines.map((line,i)=>
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'+
    '<select style="flex:2;padding:8px;border:1px solid var(--line);border-radius:3px" onchange="arFormLines['+i+'].material_id=this.value">'+materials.map(m=>'<option value="'+m.id+'"'+(m.id===line.material_id?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select>'+
    '<input type="number" min="1" placeholder="Quantité" value="'+esc(line.quantity)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="arFormLines['+i+'].quantity=this.value" />'+
    '<button type="button" class="btn btn-ghost btn-sm" onclick="removeARLine('+i+')">'+icon("trash",14)+'</button></div>').join('');
  const body = '<form onsubmit="submitPurchaseRequest(event)"><label style="font-size:12px;font-weight:600;color:var(--steel-700)">Matériaux à réapprovisionner</label>'+
    '<div id="ar-lines">'+linesHtml+'</div>'+
    '<button type="button" class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="addARLine()">'+icon("plus",13)+' Ajouter une ligne</button>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("fileText",14)+' Soumettre la demande</button></div></form>';
  openModal("Nouvelle demande d'achat", body, 600);
}
function addARLine(){ arFormLines.push({material_id:(db.list("materials")[0]||{}).id, quantity:""}); renderPRModalBody(db.list("materials")); }
function removeARLine(i){ arFormLines.splice(i,1); renderPRModalBody(db.list("materials")); }
function submitPurchaseRequest(e){
  e.preventDefault();
  const materials = db.list("materials");
  const lines = arFormLines.filter(l=>l.quantity).map(l=>{ const m=materials.find(x=>x.id===l.material_id); return {material_id:l.material_id, material_name:m.name, unit:m.unit, quantity:Number(l.quantity)}; });
  db.insert("purchase_requests", { requested_by: currentUser().name, status:"en_attente", lines });
  closeModal(); render();
}
function rejectPurchaseRequest(id){ db.update("purchase_requests", id, {status:"rejetee"}); render(); }
function openConvertRequestModal(id){
  const suppliers = db.list("suppliers");
  const body = '<p style="font-size:13.5px;margin-bottom:14px">Sélectionnez le fournisseur : un bon de commande sera créé automatiquement avec les matériaux de cette demande.</p>'+
    '<div class="form-field"><label>Fournisseur</label><select id="convert-supplier">'+suppliers.map(s=>'<option value="'+s.id+'">'+esc(s.company)+'</option>').join('')+'</select></div>'+
    '<div class="form-actions"><button class="btn btn-secondary" onclick="closeModal()">Annuler</button><button class="btn btn-primary" onclick="confirmConvertRequest(\''+id+'\')">'+icon("check",14)+' Créer le bon de commande</button></div>';
  openModal("Valider et convertir en bon de commande", body);
}
function confirmConvertRequest(id){
  const r = db.get("purchase_requests", id);
  const materials = db.list("materials");
  const supplierId = document.getElementById("convert-supplier").value;
  const lines = r.lines.map(l=>{ const m=materials.find(x=>x.id===l.material_id); return {material_id:l.material_id, material_name:l.material_name, unit:l.unit, quantity_ordered:l.quantity, quantity_received:0, unit_price:m?m.purchase_price:0}; });
  db.insert("purchase_orders", { number:"BC-"+Date.now().toString().slice(-8), supplier_id:supplierId, status:"en_attente", requested_by:currentUser().name, source_request_id:id, lines });
  db.update("purchase_requests", id, {status:"validee"});
  closeModal(); render();
}

// ---------------------------------------------------------------------------
// Page : Bons de commande
// ---------------------------------------------------------------------------
const PO_STATUS_TONE = {en_attente:"badge-amber", receptionnee:"badge-green", partielle:"badge-blue", annulee:"badge-red"};
const PO_STATUS_LABEL = {en_attente:"En attente", receptionnee:"Réceptionnée", partielle:"Partiellement reçue", annulee:"Annulée"};
let poFormLines = [];
function pagePurchaseOrders(){
  const suppliers = db.list("suppliers");
  const orders = db.list("purchase_orders").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  function total(o){ return o.lines.reduce((s,l)=>s+l.quantity_ordered*l.unit_price,0); }
  const rows = orders.map(o=>{
    const supplier = suppliers.find(s=>s.id===o.supplier_id);
    return '<tr><td class="mono">'+esc(o.number)+'</td><td class="muted">'+formatDateTime(o.created_at)+'</td><td>'+esc(supplier?supplier.company:"")+'</td>'+
      '<td class="muted">'+o.lines.length+' matériau(x)</td><td class="num">'+formatXAF(total(o))+'</td>'+
      '<td><span class="badge '+(PO_STATUS_TONE[o.status]||"badge-grey")+'">'+(PO_STATUS_LABEL[o.status]||o.status)+'</span></td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Bons de commande</h1><div class="desc">Demande d\'achat → validation → bon de commande → fournisseur → réception.</div></div>'+
    '<button class="btn btn-primary" onclick="openPurchaseOrderModal()">'+icon("plus",14)+' Nouveau bon de commande</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Fournisseur</th><th>Lignes</th><th>Montant</th><th>Statut</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun bon de commande créé."))+'</div></div>';
}
function openPurchaseOrderModal(){
  const suppliers = db.list("suppliers"); const materials = db.list("materials");
  poFormLines = [{material_id:(materials[0]||{}).id, quantity_ordered:"", unit_price:""}];
  renderPOModalBody(suppliers, materials);
}
function renderPOModalBody(suppliers, materials){
  const linesHtml = poFormLines.map((line,i)=>
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'+
    '<select style="flex:2;padding:8px;border:1px solid var(--line);border-radius:3px" onchange="poFormLines['+i+'].material_id=this.value">'+materials.map(m=>'<option value="'+m.id+'"'+(m.id===line.material_id?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select>'+
    '<input type="number" min="1" placeholder="Quantité" value="'+esc(line.quantity_ordered)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="poFormLines['+i+'].quantity_ordered=this.value" />'+
    '<input type="number" min="0" placeholder="Prix unit." value="'+esc(line.unit_price)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="poFormLines['+i+'].unit_price=this.value" />'+
    '<button type="button" class="btn btn-ghost btn-sm" onclick="removePOLine('+i+')">'+icon("trash",14)+'</button></div>').join('');
  const body = '<form onsubmit="submitPurchaseOrder(event)"><div class="form-field full" style="margin-bottom:14px"><label>Fournisseur</label><select id="po-supplier">'+suppliers.map(s=>'<option value="'+s.id+'">'+esc(s.company)+'</option>').join('')+'</select></div>'+
    '<label style="font-size:12px;font-weight:600;color:var(--steel-700)">Matériaux commandés</label><div id="po-lines">'+linesHtml+'</div>'+
    '<button type="button" class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="addPOLine()">'+icon("plus",13)+' Ajouter une ligne</button>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("clipboardType",14)+' Créer le bon de commande</button></div></form>';
  openModal("Nouveau bon de commande", body, 660);
}
function addPOLine(){ poFormLines.push({material_id:(db.list("materials")[0]||{}).id, quantity_ordered:"", unit_price:""}); renderPOModalBody(db.list("suppliers"), db.list("materials")); }
function removePOLine(i){ poFormLines.splice(i,1); renderPOModalBody(db.list("suppliers"), db.list("materials")); }
function submitPurchaseOrder(e){
  e.preventDefault();
  const materials = db.list("materials");
  const lines = poFormLines.filter(l=>l.quantity_ordered).map(l=>{
    const m = materials.find(x=>x.id===l.material_id);
    return {material_id:l.material_id, material_name:m.name, unit:m.unit, quantity_ordered:Number(l.quantity_ordered), quantity_received:0, unit_price:Number(l.unit_price||m.purchase_price||0)};
  });
  db.insert("purchase_orders", {number:"BC-"+Date.now().toString().slice(-8), supplier_id:document.getElementById("po-supplier").value, status:"en_attente", requested_by:currentUser().name, lines});
  closeModal(); render();
}

// ---------------------------------------------------------------------------
// Page : Réceptions
// ---------------------------------------------------------------------------
let receivingLines = [];
let receivingOrderId = null;
function pageReceptions(){
  const suppliers = db.list("suppliers");
  const orders = db.list("purchase_orders").filter(o=>o.status!=="receptionnee" && o.status!=="annulee");
  const receipts = db.list("goods_receipts").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const orderRows = orders.map(o=>
    '<tr><td class="mono">'+esc(o.number)+'</td><td>'+esc((suppliers.find(s=>s.id===o.supplier_id)||{}).company||"")+'</td>'+
    '<td class="muted">'+o.lines.length+' matériau(x)</td><td><span class="badge badge-amber">'+(o.status==="partielle"?"Partiellement reçue":"En attente")+'</span></td>'+
    '<td><button class="btn btn-secondary btn-sm" onclick="openReceiveModal(\''+o.id+'\')">'+icon("packageCheck",13)+' Réceptionner</button></td></tr>').join('');
  const receiptRows = receipts.map(r=>
    '<tr><td class="muted">'+formatDateTime(r.created_at)+'</td><td>'+esc((suppliers.find(s=>s.id===r.supplier_id)||{}).company||"")+'</td>'+
    '<td class="mono muted">'+esc(r.delivery_number||"—")+'</td><td class="muted">'+r.items.map(it=>esc(it.material_name)+" ("+it.quantity_received+")").join(", ")+'</td><td class="muted">'+esc(r.received_by)+'</td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Réceptions de marchandises</h1><div class="desc">Contrôle des quantités reçues, manquantes et endommagées. Le stock est mis à jour automatiquement.</div></div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Bons de commande en attente de réception</h3></div>'+
      (orderRows?('<table class="data-table"><thead><tr><th>N°</th><th>Fournisseur</th><th>Lignes</th><th>Statut</th><th></th></tr></thead><tbody>'+orderRows+'</tbody></table>'):emptyState("Aucun bon de commande en attente."))+'</div>'+
    '<div class="card"><div class="card-header"><h3>Historique des réceptions</h3></div>'+
      (receiptRows?('<table class="data-table"><thead><tr><th>Date</th><th>Fournisseur</th><th>N° livraison</th><th>Lignes reçues</th><th>Reçu par</th></tr></thead><tbody>'+receiptRows+'</tbody></table>'):emptyState("Aucune réception enregistrée."))+'</div></div>';
}
function openReceiveModal(orderId){
  const order = db.get("purchase_orders", orderId);
  receivingOrderId = orderId;
  receivingLines = order.lines.map(l=>({material_id:l.material_id, material_name:l.material_name, unit:l.unit, ordered:l.quantity_ordered, remaining:l.quantity_ordered-(l.quantity_received||0), received:l.quantity_ordered-(l.quantity_received||0), damaged:0}));
  renderReceiveModalBody(order);
}
function renderReceiveModalBody(order){
  const warehouses = db.list("warehouses");
  const linesHtml = receivingLines.map((l,i)=>
    '<tr><td>'+esc(l.material_name)+'</td><td class="num muted">'+l.ordered+' '+esc(l.unit)+'</td><td class="num muted">'+l.remaining+' '+esc(l.unit)+'</td>'+
    '<td><input type="number" min="0" max="'+l.remaining+'" value="'+l.received+'" style="width:80px;padding:5px 8px;border:1px solid var(--line);border-radius:3px" oninput="receivingLines['+i+'].received=this.value" /></td>'+
    '<td><input type="number" min="0" value="'+l.damaged+'" style="width:80px;padding:5px 8px;border:1px solid var(--line);border-radius:3px" oninput="receivingLines['+i+'].damaged=this.value" /></td></tr>').join('');
  const body = '<div class="form-grid" style="margin-bottom:14px">'+
    '<div class="form-field"><label>N° de livraison</label><input id="recv-delivery" placeholder="LIV-2026-xxx" /></div>'+
    '<div class="form-field"><label>Dépôt de réception</label><select id="recv-warehouse">'+warehouses.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></div></div>'+
    '<table class="data-table"><thead><tr><th>Matériau</th><th>Commandé</th><th>Reste dû</th><th>Reçu</th><th>Endommagé</th></tr></thead><tbody>'+linesHtml+'</tbody></table>'+
    '<div class="form-actions"><button class="btn btn-secondary" onclick="closeModal()">Annuler</button><button class="btn btn-primary" onclick="confirmReceipt()">'+icon("packageCheck",14)+' Valider la réception</button></div>';
  openModal("Réception — "+order.number, body, 700);
}
function confirmReceipt(){
  const order = db.get("purchase_orders", receivingOrderId);
  const warehouseId = document.getElementById("recv-warehouse").value;
  const deliveryNumber = document.getElementById("recv-delivery").value;
  const items = receivingLines.map(l=>({material_id:l.material_id, material_name:l.material_name, unit:l.unit, quantity_ordered:l.ordered, quantity_received:Number(l.received)||0, quantity_missing:Math.max(0,l.remaining-(Number(l.received)||0)), quantity_damaged:Number(l.damaged)||0}));
  db.insert("goods_receipts", { purchase_order_id: order.id, supplier_id: order.supplier_id, delivery_number: deliveryNumber, warehouse_id: warehouseId, items, received_by: currentUser().name });
  items.forEach(it=>{
    if (it.quantity_received > 0){
      recordMovement({ type:"achat", direction:"in", materialId:it.material_id, warehouseId, quantity:it.quantity_received, reference:order.number, comment: deliveryNumber?("Livraison "+deliveryNumber):"", user: currentUser().name });
    }
  });
  const updatedLines = order.lines.map(l=>{ const it=items.find(x=>x.material_id===l.material_id); return Object.assign({},l,{quantity_received:(l.quantity_received||0)+(it?it.quantity_received:0)}); });
  const fullyReceived = updatedLines.every(l=>l.quantity_received>=l.quantity_ordered);
  db.update("purchase_orders", order.id, { lines: updatedLines, status: fullyReceived?"receptionnee":"partielle" });
  closeModal(); render();
}

// ---------------------------------------------------------------------------
// Page : Factures fournisseurs
// ---------------------------------------------------------------------------
const INV_STATUS_TONE = {en_attente:"badge-amber", payee:"badge-green", en_retard:"badge-red"};
const INV_STATUS_LABEL = {en_attente:"En attente", payee:"Payée", en_retard:"En retard"};
function pageInvoices(){
  const suppliers = db.list("suppliers");
  const orders = db.list("purchase_orders");
  const invoices = db.list("invoices").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const totalDue = invoices.filter(i=>i.status!=="payee").reduce((s,i)=>s+Number(i.amount||0),0);
  const rows = invoices.map(inv=>{
    const supplier = suppliers.find(s=>s.id===inv.supplier_id);
    const order = orders.find(o=>o.id===inv.purchase_order_id);
    const overdue = inv.status!=="payee" && inv.due_date && new Date(inv.due_date) < new Date();
    const status = overdue ? "en_retard" : inv.status;
    return '<tr><td class="mono">'+esc(inv.number)+'</td><td class="muted">'+formatDate(inv.created_at)+'</td>'+
      '<td>'+esc(supplier?supplier.company:"—")+'</td><td class="muted">'+esc(order?order.number:"—")+'</td>'+
      '<td class="num">'+formatXAF(inv.amount)+'</td><td class="muted">'+formatDate(inv.due_date)+'</td>'+
      '<td><span class="badge '+(INV_STATUS_TONE[status]||"badge-grey")+'">'+(INV_STATUS_LABEL[status]||status)+'</span></td>'+
      '<td>'+(inv.status!=="payee" ? '<button class="btn btn-secondary btn-sm" onclick="markInvoicePaid(\''+inv.id+'\')">'+icon("check",13)+' Marquer payée</button>' : '')+'</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Factures fournisseurs</h1><div class="desc">Suivi des factures reçues et des paiements effectués.</div></div>'+
    '<button class="btn btn-primary" onclick="openInvoiceModal()">'+icon("plus",14)+' Nouvelle facture</button></div>'+
    '<div class="kpi-grid" style="margin-bottom:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">'+
    '<div class="kpi warn"><div class="label">Montant restant dû</div><div class="value">'+formatXAF(totalDue)+'</div></div>'+
    '<div class="kpi"><div class="label">Factures enregistrées</div><div class="value">'+invoices.length+'</div></div>'+
    '</div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Fournisseur</th><th>Bon de commande</th><th>Montant</th><th>Échéance</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune facture enregistrée."))+'</div></div>';
}
function openInvoiceModal(){
  const suppliers = db.list("suppliers");
  const orders = db.list("purchase_orders");
  const body = '<form onsubmit="submitInvoice(event)"><div class="form-grid">'+
    '<div class="form-field"><label>Fournisseur</label><select id="inv-supplier">'+suppliers.map(s=>'<option value="'+s.id+'">'+esc(s.company)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Bon de commande lié (optionnel)</label><select id="inv-po" onchange="onInvoicePoChange()"><option value="">—</option>'+orders.map(o=>'<option value="'+o.id+'">'+esc(o.number)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>N° de facture</label><input required id="inv-number" placeholder="FACT-2026-001" /></div>'+
    '<div class="form-field"><label>Montant (FCFA)</label><input type="number" min="0" required id="inv-amount" /></div>'+
    '<div class="form-field full"><label>Date d\'échéance</label><input type="date" id="inv-due" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("fileText",14)+' Enregistrer la facture</button></div></form>';
  openModal("Nouvelle facture fournisseur", body, 560);
}
function onInvoicePoChange(){
  const poId = document.getElementById("inv-po").value;
  if (!poId) return;
  const order = db.get("purchase_orders", poId);
  if (!order) return;
  document.getElementById("inv-supplier").value = order.supplier_id;
  const total = order.lines.reduce((s,l)=>s+l.quantity_ordered*l.unit_price,0);
  document.getElementById("inv-amount").value = total;
}
function submitInvoice(e){
  e.preventDefault();
  db.insert("invoices", {
    number: document.getElementById("inv-number").value,
    supplier_id: document.getElementById("inv-supplier").value,
    purchase_order_id: document.getElementById("inv-po").value || null,
    amount: Number(document.getElementById("inv-amount").value||0),
    due_date: document.getElementById("inv-due").value || null,
    status: "en_attente",
  });
  closeModal(); render();
}
function markInvoicePaid(id){ db.update("invoices", id, {status:"payee", paid_at:new Date().toISOString()}); render(); }

// ---------------------------------------------------------------------------
// Page : Clients
// ---------------------------------------------------------------------------
function pageClients(){
  const items = db.list("customers");
  const rows = items.map(c=>
    '<tr><td>'+esc(c.name)+'</td><td class="muted">'+esc(c.phone||"")+'</td><td class="muted">'+esc(c.email||"")+'</td><td class="muted">'+esc(c.address||"")+'</td>'+
    '<td><div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="openClientModal(\''+c.id+'\')">'+icon("pencil",14)+'</button>'+
    '<button class="btn btn-ghost btn-sm" onclick="deleteClient(\''+c.id+'\')">'+icon("trash",14)+'</button></div></td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Clients</h1><div class="desc">Répertoire des clients pour devis, commandes et facturation.</div></div>'+
    '<button class="btn btn-primary" onclick="openClientModal()">'+icon("plus",14)+' Nouveau client</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Nom</th><th>Téléphone</th><th>E-mail</th><th>Adresse</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun client enregistré."))+'</div></div>';
}
function openClientModal(id){
  const c = id ? db.get("customers", id) : {name:"",phone:"",email:"",address:""};
  const body = '<form onsubmit="submitClient(event,\''+(id||'')+'\')"><div class="form-grid">'+
    '<div class="form-field full"><label>Nom</label><input required id="cl-name" value="'+esc(c.name)+'" /></div>'+
    '<div class="form-field"><label>Téléphone</label><input id="cl-phone" value="'+esc(c.phone)+'" /></div>'+
    '<div class="form-field"><label>E-mail</label><input type="email" id="cl-email" value="'+esc(c.email)+'" /></div>'+
    '<div class="form-field full"><label>Adresse</label><input id="cl-address" value="'+esc(c.address)+'" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("check",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier le client":"Nouveau client", body);
}
function submitClient(e,id){
  e.preventDefault();
  const data = {name:document.getElementById("cl-name").value, phone:document.getElementById("cl-phone").value, email:document.getElementById("cl-email").value, address:document.getElementById("cl-address").value};
  if(id) db.update("customers",id,data); else db.insert("customers",data);
  closeModal(); render();
}
function deleteClient(id){ const c=db.get("customers",id); if(confirm('Supprimer le client « '+c.name+' » ?')){ db.remove("customers",id); render(); } }

// ---------------------------------------------------------------------------
// Page : Devis
// ---------------------------------------------------------------------------
const QUOTE_STATUS_TONE = {brouillon:"badge-grey", envoye:"badge-blue", accepte:"badge-green", refuse:"badge-red"};
const QUOTE_STATUS_LABEL = {brouillon:"Brouillon", envoye:"Envoyé", accepte:"Accepté", refuse:"Refusé"};
let quoteFormLines = [];
function pageQuotes(){
  const customers = db.list("customers");
  const quotes = db.list("quotes").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  function total(q){ return q.lines.reduce((s,l)=>s+l.quantity*l.unit_price,0); }
  const rows = quotes.map(q=>{
    const customer = customers.find(c=>c.id===q.customer_id);
    return '<tr><td class="mono">'+esc(q.number)+'</td><td class="muted">'+formatDate(q.created_at)+'</td><td>'+esc(customer?customer.name:"—")+'</td>'+
      '<td class="muted">'+q.lines.length+' article(s)</td><td class="num">'+formatXAF(total(q))+'</td>'+
      '<td><span class="badge '+(QUOTE_STATUS_TONE[q.status]||"badge-grey")+'">'+(QUOTE_STATUS_LABEL[q.status]||q.status)+'</span></td>'+
      '<td>'+(q.status==="brouillon"?('<button class="btn btn-ghost btn-sm" onclick="markQuoteSent(\''+q.id+'\')" title="Marquer envoyé">'+icon("check",14)+'</button>'):'')+
      (q.status==="envoye"?('<div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="acceptQuote(\''+q.id+'\')" title="Accepter">'+icon("check",14)+'</button><button class="btn btn-ghost btn-sm" onclick="refuseQuote(\''+q.id+'\')" title="Refuser">'+icon("x",14)+'</button></div>'):'')+
      (q.status==="accepte"?('<button class="btn btn-secondary btn-sm" onclick="convertQuoteToOrder(\''+q.id+'\')">'+icon("cart",13)+' Créer commande</button>'):'')+
      '</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Devis</h1><div class="desc">Brouillon → envoyé → accepté/refusé. Un devis accepté peut être converti en commande.</div></div>'+
    '<button class="btn btn-primary" onclick="openQuoteModal()">'+icon("plus",14)+' Nouveau devis</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Client</th><th>Articles</th><th>Montant</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun devis créé."))+'</div></div>';
}
function openQuoteModal(){
  const customers = db.list("customers"); const materials = db.list("materials");
  quoteFormLines = [{material_id:(materials[0]||{}).id, quantity:"", unit_price: materials[0]?materials[0].sale_price:""}];
  renderQuoteModalBody(customers, materials);
}
function renderQuoteModalBody(customers, materials){
  const linesHtml = quoteFormLines.map((line,i)=>
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'+
    '<select style="flex:2;padding:8px;border:1px solid var(--line);border-radius:3px" onchange="quoteFormLines['+i+'].material_id=this.value; quoteFormLines['+i+'].unit_price=(db.get(\'materials\',this.value)||{}).sale_price||0; renderQuoteModalBody(db.list(\'customers\'),db.list(\'materials\'));">'+materials.map(m=>'<option value="'+m.id+'"'+(m.id===line.material_id?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select>'+
    '<input type="number" min="1" placeholder="Quantité" value="'+esc(line.quantity)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="quoteFormLines['+i+'].quantity=this.value" />'+
    '<input type="number" min="0" placeholder="Prix unit." value="'+esc(line.unit_price)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="quoteFormLines['+i+'].unit_price=this.value" />'+
    '<button type="button" class="btn btn-ghost btn-sm" onclick="removeQuoteLine('+i+')">'+icon("trash",14)+'</button></div>').join('');
  const body = '<form onsubmit="submitQuote(event)"><div class="form-field full" style="margin-bottom:14px"><label>Client</label><select id="qt-customer">'+customers.map(c=>'<option value="'+c.id+'">'+esc(c.name)+'</option>').join('')+'</select></div>'+
    '<label style="font-size:12px;font-weight:600;color:var(--steel-700)">Articles</label><div id="quote-lines">'+linesHtml+'</div>'+
    '<button type="button" class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="addQuoteLine()">'+icon("plus",13)+' Ajouter une ligne</button>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("fileText",14)+' Créer le devis</button></div></form>';
  openModal("Nouveau devis", body, 660);
}
function addQuoteLine(){ const materials=db.list("materials"); quoteFormLines.push({material_id:(materials[0]||{}).id, quantity:"", unit_price:materials[0]?materials[0].sale_price:""}); renderQuoteModalBody(db.list("customers"), materials); }
function removeQuoteLine(i){ quoteFormLines.splice(i,1); renderQuoteModalBody(db.list("customers"), db.list("materials")); }
function submitQuote(e){
  e.preventDefault();
  const materials = db.list("materials");
  const lines = quoteFormLines.filter(l=>l.quantity).map(l=>{ const m=materials.find(x=>x.id===l.material_id); return {material_id:l.material_id, material_name:m.name, unit:m.unit, quantity:Number(l.quantity), unit_price:Number(l.unit_price||m.sale_price||0)}; });
  db.insert("quotes", { number:"DEV-"+Date.now().toString().slice(-8), customer_id: document.getElementById("qt-customer").value, status:"brouillon", lines });
  closeModal(); render();
}
function markQuoteSent(id){ db.update("quotes", id, {status:"envoye"}); render(); }
function acceptQuote(id){ db.update("quotes", id, {status:"accepte"}); render(); }
function refuseQuote(id){ db.update("quotes", id, {status:"refuse"}); render(); }
function convertQuoteToOrder(id){
  const q = db.get("quotes", id);
  db.insert("sales_orders", { number:"CMD-"+Date.now().toString().slice(-8), customer_id:q.customer_id, quote_id:q.id, status:"en_attente", lines: q.lines.map(l=>Object.assign({},l,{quantity_delivered:0})) });
  render();
  state.page = "commandes-vente"; render();
}

// ---------------------------------------------------------------------------
// Page : Commandes (ventes)
// ---------------------------------------------------------------------------
const SO_STATUS_TONE = {en_attente:"badge-amber", livree:"badge-green", partielle:"badge-blue", annulee:"badge-red"};
const SO_STATUS_LABEL = {en_attente:"En attente de livraison", livree:"Livrée", partielle:"Partiellement livrée", annulee:"Annulée"};
function pageSalesOrders(){
  const customers = db.list("customers");
  const orders = db.list("sales_orders").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  function total(o){ return o.lines.reduce((s,l)=>s+l.quantity*l.unit_price,0); }
  const rows = orders.map(o=>{
    const customer = customers.find(c=>c.id===o.customer_id);
    return '<tr><td class="mono">'+esc(o.number)+'</td><td class="muted">'+formatDate(o.created_at)+'</td><td>'+esc(customer?customer.name:"—")+'</td>'+
      '<td class="muted">'+o.lines.length+' article(s)</td><td class="num">'+formatXAF(total(o))+'</td>'+
      '<td><span class="badge '+(SO_STATUS_TONE[o.status]||"badge-grey")+'">'+(SO_STATUS_LABEL[o.status]||o.status)+'</span></td>'+
      '<td>'+(o.status!=="livree" && o.status!=="annulee" ? '<button class="btn btn-secondary btn-sm" onclick="openDeliverModal(\''+o.id+'\')">'+icon("packageCheck",13)+' Livrer</button>' : '')+
      (o.status==="livree" ? '<button class="btn btn-secondary btn-sm" onclick="createInvoiceFromOrder(\''+o.id+'\')">'+icon("fileText",13)+' Facturer</button>' : '')+'</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Commandes</h1><div class="desc">Commandes clients, créées directement ou depuis un devis accepté.</div></div>'+
    '<button class="btn btn-primary" onclick="openSalesOrderModal()">'+icon("plus",14)+' Nouvelle commande</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Client</th><th>Articles</th><th>Montant</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune commande créée."))+'</div></div>';
}
let salesOrderFormLines = [];
function openSalesOrderModal(){
  const customers = db.list("customers"); const materials = db.list("materials");
  salesOrderFormLines = [{material_id:(materials[0]||{}).id, quantity:"", unit_price: materials[0]?materials[0].sale_price:""}];
  renderSalesOrderModalBody(customers, materials);
}
function renderSalesOrderModalBody(customers, materials){
  const linesHtml = salesOrderFormLines.map((line,i)=>
    '<div style="display:flex;gap:8px;margin-top:8px;align-items:center">'+
    '<select style="flex:2;padding:8px;border:1px solid var(--line);border-radius:3px" onchange="salesOrderFormLines['+i+'].material_id=this.value">'+materials.map(m=>'<option value="'+m.id+'"'+(m.id===line.material_id?' selected':'')+'>'+esc(m.name)+'</option>').join('')+'</select>'+
    '<input type="number" min="1" placeholder="Quantité" value="'+esc(line.quantity)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="salesOrderFormLines['+i+'].quantity=this.value" />'+
    '<input type="number" min="0" placeholder="Prix unit." value="'+esc(line.unit_price)+'" style="flex:1;padding:8px;border:1px solid var(--line);border-radius:3px" oninput="salesOrderFormLines['+i+'].unit_price=this.value" />'+
    '<button type="button" class="btn btn-ghost btn-sm" onclick="removeSOLine('+i+')">'+icon("trash",14)+'</button></div>').join('');
  const body = '<form onsubmit="submitSalesOrder(event)"><div class="form-field full" style="margin-bottom:14px"><label>Client</label><select id="so-customer">'+customers.map(c=>'<option value="'+c.id+'">'+esc(c.name)+'</option>').join('')+'</select></div>'+
    '<label style="font-size:12px;font-weight:600;color:var(--steel-700)">Articles</label><div id="so-lines">'+linesHtml+'</div>'+
    '<button type="button" class="btn btn-secondary btn-sm" style="margin-top:10px" onclick="addSOLine()">'+icon("plus",13)+' Ajouter une ligne</button>'+
    '<div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("cart",14)+' Créer la commande</button></div></form>';
  openModal("Nouvelle commande client", body, 660);
}
function addSOLine(){ const materials=db.list("materials"); salesOrderFormLines.push({material_id:(materials[0]||{}).id, quantity:"", unit_price:materials[0]?materials[0].sale_price:""}); renderSalesOrderModalBody(db.list("customers"), materials); }
function removeSOLine(i){ salesOrderFormLines.splice(i,1); renderSalesOrderModalBody(db.list("customers"), db.list("materials")); }
function submitSalesOrder(e){
  e.preventDefault();
  const materials = db.list("materials");
  const lines = salesOrderFormLines.filter(l=>l.quantity).map(l=>{ const m=materials.find(x=>x.id===l.material_id); return {material_id:l.material_id, material_name:m.name, unit:m.unit, quantity:Number(l.quantity), unit_price:Number(l.unit_price||m.sale_price||0), quantity_delivered:0}; });
  db.insert("sales_orders", { number:"CMD-"+Date.now().toString().slice(-8), customer_id: document.getElementById("so-customer").value, status:"en_attente", lines });
  closeModal(); render();
}
let deliveringOrderId = null, deliveringLines = [];
function openDeliverModal(orderId){
  const order = db.get("sales_orders", orderId);
  deliveringOrderId = orderId;
  deliveringLines = order.lines.map(l=>({material_id:l.material_id, material_name:l.material_name, unit:l.unit, ordered:l.quantity, remaining:l.quantity-(l.quantity_delivered||0), deliver:l.quantity-(l.quantity_delivered||0)}));
  renderDeliverModalBody(order);
}
function renderDeliverModalBody(order){
  const warehouses = db.list("warehouses");
  const linesHtml = deliveringLines.map((l,i)=>
    '<tr><td>'+esc(l.material_name)+'</td><td class="num muted">'+l.ordered+' '+esc(l.unit)+'</td><td class="num muted">'+l.remaining+' '+esc(l.unit)+'</td>'+
    '<td><input type="number" min="0" max="'+l.remaining+'" value="'+l.deliver+'" style="width:80px;padding:5px 8px;border:1px solid var(--line);border-radius:3px" oninput="deliveringLines['+i+'].deliver=this.value" /></td></tr>').join('');
  const body = '<div class="form-field" style="margin-bottom:14px"><label>Dépôt de sortie</label><select id="deliver-warehouse">'+warehouses.map(w=>'<option value="'+w.id+'">'+esc(w.name)+'</option>').join('')+'</select></div>'+
    '<table class="data-table"><thead><tr><th>Article</th><th>Commandé</th><th>Reste dû</th><th>À livrer</th></tr></thead><tbody>'+linesHtml+'</tbody></table>'+
    '<div id="deliver-error"></div>'+
    '<div class="form-actions"><button class="btn btn-secondary" onclick="closeModal()">Annuler</button><button class="btn btn-primary" onclick="confirmDeliver()">'+icon("packageCheck",14)+' Confirmer la livraison</button></div>';
  openModal("Livraison — "+order.number, body, 640);
}
function confirmDeliver(){
  const order = db.get("sales_orders", deliveringOrderId);
  const warehouseId = document.getElementById("deliver-warehouse").value;
  try{
    deliveringLines.forEach(l=>{
      const qty = Number(l.deliver)||0;
      if (qty > 0){
        recordMovement({ type:"vente", direction:"out", materialId:l.material_id, warehouseId, quantity:qty, reference:order.number, reason:"Livraison commande client", user:currentUser().name });
      }
    });
    const updatedLines = order.lines.map(l=>{ const dl=deliveringLines.find(x=>x.material_id===l.material_id); return Object.assign({},l,{quantity_delivered:(l.quantity_delivered||0)+(dl?Number(dl.deliver)||0:0)}); });
    const fullyDelivered = updatedLines.every(l=>l.quantity_delivered>=l.quantity);
    db.update("sales_orders", order.id, { lines: updatedLines, status: fullyDelivered?"livree":"partielle" });
    closeModal(); render();
  }catch(err){
    document.getElementById("deliver-error").innerHTML = '<div class="login-error">'+esc(err.message)+'</div>';
  }
}
function createInvoiceFromOrder(orderId){
  const order = db.get("sales_orders", orderId);
  const total = order.lines.reduce((s,l)=>s+l.quantity*l.unit_price,0);
  db.insert("sales_invoices", { number:"FV-"+Date.now().toString().slice(-8), customer_id:order.customer_id, sales_order_id:order.id, amount: total, status:"en_attente" });
  state.page = "factures-vente"; render();
}

// ---------------------------------------------------------------------------
// Page : Factures (ventes)
// ---------------------------------------------------------------------------
function pageSalesInvoices(){
  const customers = db.list("customers");
  const orders = db.list("sales_orders");
  const invoices = db.list("sales_invoices").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const totalDue = invoices.filter(i=>i.status!=="payee").reduce((s,i)=>s+Number(i.amount||0),0);
  const rows = invoices.map(inv=>{
    const customer = customers.find(c=>c.id===inv.customer_id);
    const order = orders.find(o=>o.id===inv.sales_order_id);
    return '<tr><td class="mono">'+esc(inv.number)+'</td><td class="muted">'+formatDate(inv.created_at)+'</td>'+
      '<td>'+esc(customer?customer.name:"—")+'</td><td class="muted">'+esc(order?order.number:"—")+'</td>'+
      '<td class="num">'+formatXAF(inv.amount)+'</td><td><span class="badge '+(inv.status==="payee"?"badge-green":"badge-amber")+'">'+(inv.status==="payee"?"Payée":"En attente")+'</span></td>'+
      '<td>'+(inv.status!=="payee" ? '<button class="btn btn-secondary btn-sm" onclick="markSalesInvoicePaid(\''+inv.id+'\')">'+icon("check",13)+' Marquer payée</button>' : '')+'</td></tr>';
  }).join('');
  return '<div class="page"><div class="page-header"><div><h1>Factures (ventes)</h1><div class="desc">Facturation des commandes clients livrées.</div></div>'+
    '<button class="btn btn-primary" onclick="openSalesInvoiceModal()">'+icon("plus",14)+' Nouvelle facture</button></div>'+
    '<div class="kpi-grid" style="margin-bottom:16px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">'+
    '<div class="kpi warn"><div class="label">Montant restant à encaisser</div><div class="value">'+formatXAF(totalDue)+'</div></div>'+
    '<div class="kpi"><div class="label">Factures émises</div><div class="value">'+invoices.length+'</div></div>'+
    '</div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>N°</th><th>Date</th><th>Client</th><th>Commande</th><th>Montant</th><th>Statut</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune facture émise."))+'</div></div>';
}
function openSalesInvoiceModal(){
  const customers = db.list("customers");
  const orders = db.list("sales_orders");
  const body = '<form onsubmit="submitSalesInvoice(event)"><div class="form-grid">'+
    '<div class="form-field"><label>Client</label><select id="fv-customer">'+customers.map(c=>'<option value="'+c.id+'">'+esc(c.name)+'</option>').join('')+'</select></div>'+
    '<div class="form-field"><label>Commande liée (optionnel)</label><select id="fv-order" onchange="onSalesInvoiceOrderChange()"><option value="">—</option>'+orders.map(o=>'<option value="'+o.id+'">'+esc(o.number)+'</option>').join('')+'</select></div>'+
    '<div class="form-field full"><label>Montant (FCFA)</label><input type="number" min="0" required id="fv-amount" /></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("fileText",14)+' Enregistrer</button></div></form>';
  openModal("Nouvelle facture client", body, 560);
}
function onSalesInvoiceOrderChange(){
  const orderId = document.getElementById("fv-order").value;
  if (!orderId) return;
  const order = db.get("sales_orders", orderId);
  if (!order) return;
  document.getElementById("fv-customer").value = order.customer_id;
  document.getElementById("fv-amount").value = order.lines.reduce((s,l)=>s+l.quantity*l.unit_price,0);
}
function submitSalesInvoice(e){
  e.preventDefault();
  db.insert("sales_invoices", {
    number: "FV-"+Date.now().toString().slice(-8),
    customer_id: document.getElementById("fv-customer").value,
    sales_order_id: document.getElementById("fv-order").value || null,
    amount: Number(document.getElementById("fv-amount").value||0),
    status: "en_attente",
  });
  closeModal(); render();
}
function markSalesInvoicePaid(id){ db.update("sales_invoices", id, {status:"payee", paid_at:new Date().toISOString()}); render(); }

// ---------------------------------------------------------------------------
// Page : Rapports
// ---------------------------------------------------------------------------
const REPORT_DEFS = [["stock","Rapport de stock"],["movements","Rapport des mouvements"],["projects","Rapport chantiers"],["suppliers","Rapport fournisseurs"]];
let activeReport = "stock";
function buildReportRows(active){
  const materials = db.list("materials"); const movements = db.list("stock_movements"); const projects = db.list("projects"); const suppliers = db.list("suppliers");
  if (active==="stock") return materials.map(m=>{ const q=totalStockForMaterial(m.id); return {reference:m.reference, nom:m.name, stock_actuel:q, unite:m.unit, seuil_min:m.min_stock, valeur:q*Number(m.purchase_price||0), statut: q<=0?"Rupture":(q<=Number(m.min_stock||0)?"Faible":"Normal")}; });
  if (active==="movements") return movements.map(m=>({numero:m.number, date:formatDateTime(m.date), type:m.type, materiau:m.material_name, quantite:m.quantity, sens:m.direction==="in"?"Entrée":"Sortie", utilisateur:m.user, reference:m.reference}));
  if (active==="projects") return projects.map(p=>{ const consumed = movements.filter(m=>m.project_id===p.id && m.direction==="out").reduce((s,m)=>s+Number(m.quantity)*Number((db.get("materials",m.material_id)||{}).purchase_price||0),0); return {code:p.code, nom:p.name, statut:p.status, budget:p.budget, consomme:consumed}; });
  if (active==="suppliers") return suppliers.map(s=>{ const ids=materials.filter(m=>m.supplier_id===s.id).map(m=>m.id); const purchases=movements.filter(m=>m.direction==="in" && ids.includes(m.material_id)); const amount=purchases.reduce((sum,m)=>sum+Number(m.quantity)*Number((db.get("materials",m.material_id)||{}).purchase_price||0),0); return {societe:s.company, ville:s.city, nb_achats:purchases.length, montant_achete:amount}; });
  return [];
}
function pageReports(){
  const rows = buildReportRows(activeReport);
  const moneyKeys = ["valeur","budget","consomme","montant_achete"];
  const tableHtml = rows.length ? ('<table class="data-table"><thead><tr>'+Object.keys(rows[0]).map(h=>'<th>'+h.replace(/_/g," ")+'</th>').join('')+'</tr></thead><tbody>'+
    rows.map(r=>'<tr>'+Object.entries(r).map(([k,v])=>'<td class="'+(typeof v==="number"?"num":"")+'">'+(moneyKeys.includes(k)?formatXAF(v):esc(v==null?"—":v))+'</td>').join('')+'</tr>').join('')+
    '</tbody></table>') : emptyState("Aucune donnée disponible pour ce rapport.");
  return '<div class="page"><div class="page-header"><div><h1>Rapports</h1><div class="desc">Génération de rapports exportables (CSV, compatible Excel).</div></div>'+
    '<button class="btn btn-primary" onclick="exportCurrentReport()">'+icon("download",14)+' Exporter en CSV</button></div>'+
    '<div class="tabs">'+REPORT_DEFS.map(r=>'<div class="tab'+(activeReport===r[0]?' active':'')+'" onclick="activeReport=\''+r[0]+'\'; renderPage();">'+r[1]+'</div>').join('')+'</div>'+
    '<div class="card">'+tableHtml+'</div></div>';
}
function exportCurrentReport(){ exportToCSV("sahelbtp_"+activeReport+".csv", buildReportRows(activeReport)); }

// ---------------------------------------------------------------------------
// Page : Notifications
// ---------------------------------------------------------------------------
function pageNotifications(){
  const items = db.list("notifications").sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
  const rows = items.map(n=>
    '<div style="display:flex;align-items:flex-start;gap:12px;padding:13px 16px;border-bottom:1px solid var(--line);background:'+(n.read?"#fff":"#F5FAFE")+'">'+
    '<div style="margin-top:2px">'+(n.level==="rupture"?icon("xCircle",16):n.level==="faible"?icon("alertTriangle",16):icon("bell",16))+'</div>'+
    '<div style="flex:1"><div style="font-size:13px">'+esc(n.message)+'</div><div class="muted" style="font-size:11px;margin-top:2px">'+formatDateTime(n.created_at)+'</div></div>'+
    (!n.read ? '<button class="btn btn-ghost btn-sm" onclick="markNotifRead(\''+n.id+'\')">'+icon("check",13)+' Marquer comme lu</button>' : '')+
    '</div>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Notifications</h1><div class="desc">Alertes automatiques : stock faible, ruptures, demandes en attente, réceptions.</div></div>'+
    '<button class="btn btn-secondary" onclick="markAllNotifsRead()">'+icon("check",14)+' Tout marquer comme lu</button></div>'+
    '<div class="card">'+(rows||emptyState("Aucune notification pour le moment."))+'</div></div>';
}
function markNotifRead(id){ db.update("notifications", id, {read:true}); render(); }
function markAllNotifsRead(){ db.list("notifications", n=>!n.read).forEach(n=>db.update("notifications", n.id, {read:true})); render(); }

// ---------------------------------------------------------------------------
// Page : Journal d'activité
// ---------------------------------------------------------------------------
const ACTIVITY_LABEL = {create:"Création", update:"Modification", delete:"Suppression"};
const ACTIVITY_TONE = {create:"badge-green", update:"badge-blue", delete:"badge-red"};
function pageActivityLog(){
  const items = db.list("activity_logs");
  const rows = items.map(l=>'<tr><td class="muted">'+formatDateTime(l.created_at)+'</td><td>'+esc(l.user)+'</td>'+
    '<td><span class="badge '+(ACTIVITY_TONE[l.action]||"badge-grey")+'">'+(ACTIVITY_LABEL[l.action]||l.action)+'</span></td>'+
    '<td class="mono muted">'+esc(l.table)+'</td><td>'+esc(l.label)+'</td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Journal d\'activité</h1><div class="desc">Historique complet de toutes les opérations.</div></div></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Date</th><th>Utilisateur</th><th>Action</th><th>Table</th><th>Élément</th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucune activité enregistrée."))+'</div></div>';
}

// ---------------------------------------------------------------------------
// Page : Utilisateurs
// ---------------------------------------------------------------------------
function pageUsers(){
  const current = currentUser();
  const items = db.list("users");
  const rows = items.map(u=>'<tr><td>'+esc(u.name)+'</td><td class="muted">'+esc(u.email)+'</td><td><span class="badge badge-blue">'+esc(ROLES[u.role]||u.role)+'</span></td>'+
    '<td><div style="display:flex;gap:4px"><button class="btn btn-ghost btn-sm" onclick="openUserModal(\''+u.id+'\')">'+icon("pencil",14)+'</button>'+
    '<button class="btn btn-ghost btn-sm" onclick="deleteUser(\''+u.id+'\')">'+icon("trash",14)+'</button></div></td></tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Utilisateurs</h1><div class="desc">Gestion des comptes et des rôles d\'accès à la plateforme.</div></div>'+
    '<button class="btn btn-primary" onclick="openUserModal()">'+icon("plus",14)+' Nouvel utilisateur</button></div>'+
    '<div class="card">'+(rows?('<table class="data-table"><thead><tr><th>Nom</th><th>E-mail</th><th>Rôle</th><th></th></tr></thead><tbody>'+rows+'</tbody></table>'):emptyState("Aucun utilisateur."))+'</div></div>';
}
function openUserModal(id){
  const u = id ? db.get("users", id) : {name:"",email:"",password:"",role:"user"};
  const body = '<form onsubmit="submitUser(event,\''+(id||'')+'\')"><div class="form-grid">'+
    '<div class="form-field full"><label>Nom complet</label><input required id="uf-name" value="'+esc(u.name)+'" /></div>'+
    '<div class="form-field full"><label>E-mail</label><input type="email" required id="uf-email" value="'+esc(u.email)+'" /></div>'+
    '<div class="form-field"><label>Mot de passe</label><input required id="uf-password" value="'+esc(u.password)+'" /></div>'+
    '<div class="form-field"><label>Rôle</label><select id="uf-role">'+Object.entries(ROLES).map(([k,v])=>'<option value="'+k+'"'+(k===u.role?' selected':'')+'>'+v+'</option>').join('')+'</select></div>'+
    '</div><div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal()">Annuler</button><button type="submit" class="btn btn-primary">'+icon("userCog",14)+' Enregistrer</button></div></form>';
  openModal(id?"Modifier l'utilisateur":"Nouvel utilisateur", body);
}
function submitUser(e,id){
  e.preventDefault();
  const data = {name:document.getElementById("uf-name").value, email:document.getElementById("uf-email").value, password:document.getElementById("uf-password").value, role:document.getElementById("uf-role").value};
  if(id) db.update("users",id,data); else db.insert("users",data);
  closeModal(); render();
}
function deleteUser(id){
  if (id===currentUser().id){ alert("Vous ne pouvez pas supprimer votre propre compte."); return; }
  const u = db.get("users", id);
  if (confirm('Supprimer l\'utilisateur « '+u.name+' » ?')){ db.remove("users",id); render(); }
}

// ---------------------------------------------------------------------------
// Page : Permissions (matrice en lecture)
// ---------------------------------------------------------------------------
const ALL_PERM_DEFS = [
  ["materials.view","Voir matériaux"],["materials.create","Créer matériau"],["materials.edit","Modifier matériau"],["materials.delete","Supprimer matériau"],
  ["stock.view","Voir stock"],["stock.move","Faire une entrée/sortie"],["inventory.manage","Gérer l'inventaire"],
  ["suppliers.manage","Gérer les fournisseurs"],["purchases.manage","Créer demandes/bons de commande"],["purchases.receive","Réceptionner marchandises"],
  ["invoices.manage","Gérer les factures fournisseurs"],["sales.manage","Gérer clients/devis/commandes/factures de vente"],
  ["projects.view","Voir chantiers"],["requests.validate","Valider demandes matériaux"],
  ["reports.view","Voir rapports"],["reports.export","Exporter données"],["users.view","Gérer utilisateurs"],
];
function hasPerm(role, perm){ const perms = PERMISSIONS[role]||[]; return perms.includes("*") || perms.includes(perm); }
function pagePermissions(){
  const roleKeys = Object.keys(ROLES);
  const rows = ALL_PERM_DEFS.map(p=>'<tr><td>'+p[1]+'</td>'+roleKeys.map(r=>'<td style="text-align:center">'+(hasPerm(r,p[0])?'<span style="color:var(--green);font-weight:700">✓</span>':'<span style="color:var(--steel-300)">✕</span>')+'</td>').join('')+'</tr>').join('');
  return '<div class="page"><div class="page-header"><div><h1>Permissions</h1><div class="desc">Matrice des accès par rôle.</div></div></div>'+
    '<div class="card" style="overflow-x:auto"><table class="data-table"><thead><tr><th>Permission</th>'+roleKeys.map(r=>'<th style="text-align:center">'+ROLES[r]+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}

// ---------------------------------------------------------------------------
// Page : Paramètres
// ---------------------------------------------------------------------------
function pageSettings(){
  const connected = !!supabaseClient;
  const statusHtml = connected
    ? ('<span class="sync-indicator online">'+icon("check",12)+' Connecté à Supabase</span>'+(lastSyncError?(' <span class="muted" style="font-size:11.5px">— dernière erreur : '+esc(lastSyncError)+'</span>'):''))
    : '<span class="sync-indicator offline">'+icon("alertTriangle",12)+' Mode local (non connecté)</span>';
  return '<div class="page"><div class="page-header"><div><h1>Paramètres</h1><div class="desc">Configuration générale de la plateforme.</div></div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Stockage des données</h3></div><div class="card-body" style="font-size:13.5px">'+
    '<div style="margin-bottom:10px">'+statusHtml+'</div>'+
    (connected
      ? 'Les données sont stockées dans votre projet Supabase et partagées entre tous les utilisateurs et appareils connectés à cette application. Une synchronisation automatique a lieu toutes les 20 secondes.'
      : 'Toutes les données sont stockées localement dans ce navigateur (localStorage) — elles ne sont pas partagées avec d\'autres appareils. Renseignez <code>SUPABASE_URL</code> et <code>SUPABASE_ANON_KEY</code> dans <code>config.js</code> (voir README.md) pour activer le mode connecté.')+
    (connected ? '<div style="margin-top:12px"><button class="btn btn-secondary btn-sm" onclick="manualSync()">'+icon("arrowLR",13)+' Synchroniser maintenant</button></div>' : '')+
    '</div></div>'+
    '<div class="card" style="margin-bottom:16px"><div class="card-header"><h3>Unités et conversions</h3></div><div class="card-body">'+
    '<table class="data-table"><thead><tr><th>Conversion</th><th>Équivalence</th></tr></thead><tbody>'+
    '<tr><td>1 tonne</td><td class="num">1 000 kg</td></tr><tr><td>1 palette</td><td class="num">50 sacs</td></tr><tr><td>1 carton</td><td class="num">12 pièces</td></tr>'+
    '</tbody></table></div></div>'+
    '<div class="card"><div class="card-header"><h3>Zone de danger</h3></div><div class="card-body">'+
    '<p style="font-size:13.5px;color:var(--steel-500);margin-top:0">Supprime définitivement toutes les données locales de cette application (matériaux, mouvements, chantiers, utilisateurs...) et revient à l\'écran de création de compte'+(connected?' (n\'affecte pas les données déjà présentes sur Supabase)':'')+'.</p>'+
    '<button class="btn btn-danger" onclick="resetAllData()">'+icon("trash",14)+' Réinitialiser l\'application</button></div></div></div>';
}
async function manualSync(){
  const ok = await syncFromSupabase();
  render();
  if (ok) alert("Synchronisation réussie."); else alert("Échec de la synchronisation : "+(lastSyncError||"erreur inconnue"));
}
function resetAllData(){
  if (confirm("Supprimer TOUTES les données locales de l'application ? Cette action est irréversible.")){
    db.clearAll(); location.reload();
  }
}

// ---------------------------------------------------------------------------
// Démarrage de l'application
// ---------------------------------------------------------------------------
async function boot(){
  const loader = document.getElementById("boot-loader");
  if (supabaseClient){
    await syncFromSupabase();
  }
  if (loader) loader.classList.add("hidden");
  render();
  if (supabaseClient){
    setInterval(async () => {
      const changed = await syncFromSupabase();
      if (changed && currentUser()) render();
    }, 20000);
  }
}
boot();
