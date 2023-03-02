var ulang = confirm("apakah anda ingin mengulang?");
var counter = 0;
while(ulang){
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulang = confirm("apakah anda ingin mengulang?");
}