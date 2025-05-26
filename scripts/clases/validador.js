class Validador {
    static validarString(string) {
        if (string === null) {
            return false;
        }
        else if (string.trim() === ""){
            return false;
        } return true;
    }

static validarID(id) {
    if (!isNaN(id) || id >= 1 || id < 999) {
        return true;
    } return false;
}


}