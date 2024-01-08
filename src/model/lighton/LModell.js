class LModel {
    constructor(n) {
        this.allapot = undefined; // Initial value, adjust as needed
        this.allapotList = [];
        this.n = n;
        this.init();
    }

    init() {
        for (let db = 0; db < this.n; db++) {
            let esely = Math.floor((Math.random() * 4) + 1);
            let aktualisAllapot = esely === 1;
            this.allapotList.push(aktualisAllapot);
        }
        console.log(this.allapotList);
    }

    getAllapot() {
        return this.allapot;
    }

    getList() {
        return this.allapotList;
    }
}

export default LModel;
