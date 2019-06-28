interface Shootable {
    shoot();
}

abstract class Gun implements Shootable {
    abstract shoot();
}

class AK47 extends Gun {
    shoot() {
        console.log('ak47 shoot.');
    }
}

class M4A1 extends Gun {
    shoot() {
        console.log('m4a1 shoot.');
    }
}

abstract class GunFactory {
    abstract create(): Gun;
}

class AK47Factory extends GunFactory {
    create() {
        let gun: AK47 =  new AK47();
        this.clean(gun);
        this.applyTungOil(gun);
        return gun;
    }

    private clean(gun: Gun) {
        console.log('clean gun.');
    }

    private applyTungOil(gun: Gun) {
        console.log('apply tung oil.');
    }
}

class M4A1Factory extends GunFactory {
    create() {
        let gun: M4A1 = new M4A1();
        this.clean(gun);
        this.sprayPaint(gun);
        return gun;
    }

    private clean(gun: Gun){
        console.log('clean gun.');
    }

    private sprayPaint(gun: Gun){
        console.log('spray paint.');
    }
}

let ak47 = new AK47Factory().create()
ak47.shoot()

let m4a1 = new M4A1Factory().create()
m4a1.shoot()