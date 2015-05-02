/*
 MeleeMapper
 Hacked together with Remnant on April 4th.
 (C) 2015 Kristian Walker & Josh Smith, licensed under the ZLIB license.
 Contact: en_co_re@yahoo.ca
 Programming: Kristian Walker & Josh Smith
*/

function replaceStuff() {
 var map = document.getElementById("input").value;
 //Map objects
 map = map.replace(/\[x\]/ig, "[font color=\"grey\"][X][/font]"); // Wall
 map = map.replace(/\[H\]/g, "[font color=\"red\"][H][/font]"); // Very Armed, Very Dangerous Hostile
 map = map.replace(/\[h\]/g, "[font color=\"red\"][h][/font]"); // Unconscious Hostile
 map = map.replace(/\[\?\]/g, "[font color=\"purple\"][?][/font]"); // Unknown
 map = map.replace(/\[(GD|G=)\]/ig, "[font color=\"limegreen\"][=][/font]"); // Green Door
 map = map.replace(/\[(BD|B=)\]/ig, "[font color=\"blue\"][=][/font]"); // Blue Door
 map = map.replace(/\[(BP|BN)\]/ig, "[font color=\"blue\"][N][/font]"); // Blue Panel
 map = map.replace(/\[M(et(ool)?)?\]/ig, "[font color=\"gold\"][M][/font]"); // Metool
 map = map.replace(/\[(W|UMet(ool)?)\]/ig, "[font color=\"red\"][W][/font]"); // Upside Down Metool
 //Folks
 map = map.replace(/\[(ch(erish)?|fe(int)?)\]/ig, "[font color=\"885599\"][O][/font]"); //Cherish
 map = map.replace(/\[ja(mes(on)?)?\]/ig, "[font color=\"limegreen\"][O][/font]"); //Jameson
 map = map.replace(/\[sh(akeem)?\]/ig, "[font color=\"orange\"][O][/font]"); //Shakeem
 map = map.replace(/\[xe(nneth)?\]/ig, "[font color=\"cyan\"][O][/font]"); //Xenneth
 map = map.replace(/\[ha(do)?\]/ig, "[font color=\"gold\"][O][/font]"); // Hado
 map = map.replace(/\[(sa(ra)?|nub)\]/ig, "[font color=\"crimson\"][O][/font]"); // Sara
 //NPCS
 map = map.replace(/\[te(nma)?\]/ig, "[font color=\"pink\"][O][/font]"); //Tenma
 map = map.replace(/\[or(ph)?\]/ig, "[font color=\"3a00da\"][O][/font]"); // Orph
 map = map.replace(/\[oc(tavius)?\]/ig, "[font color=\"79C4C3\"][V][/font]"); //Octavius
 //Make the map courier new
 map = "[font face=\"courier new\"]" + map + "[/font]"
 document.getElementById("output").value = map;
}
